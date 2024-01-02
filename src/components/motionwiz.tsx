"use client";

import React from "react";
import Form from "./form";
import Results from "./results";
import { initFirebase } from "../../firebase/firebaseApp";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "../public/Dumbbell.svg";

const MotionWiz: React.FC = () => {
  initFirebase();
  const CHARACTER_LIMIT = 32;
  const ENDPOINT: string =
    "https://7pkmmzlacl.execute-api.us-east-1.amazonaws.com/prod/generate_exercises_and_explanation";
  const [prompt, setPrompt] = React.useState("");
  const [explanation, setExplanation] = React.useState("");
  const [exercises, setExercises] = React.useState([]);
  const [hasResult, setHasResult] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const auth = getAuth();
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    router.push("/auth");
  }

  const onSubmit = () => {
    console.log("Submitting: " + prompt);
    setIsLoading(true);
    fetch(`${ENDPOINT}?prompt=${prompt}`)
      .then((res) => res.json())
      .then(onResult);
  };

  const onResult = (data: any) => {
    setExplanation(data.explanation);
    setExercises(data.exercises);
    setHasResult(true);
    setIsLoading(false);
  };

  const onReset = (data: any) => {
    setPrompt("");
    setHasResult(false);
    setIsLoading(false);
  };

  let displayedElement = null;

  if (hasResult) {
    displayedElement = (
      <Results
        prompt={prompt}
        exercises={exercises}
        explanation={explanation}
        onBack={onReset}
      />
    );
  } else {
    displayedElement = (
      <Form
        prompt={prompt}
        setPrompt={setPrompt}
        onSubmit={onSubmit}
        isLoading={isLoading}
        characterLimit={CHARACTER_LIMIT}
      />
    );
  }

  const gradientText =
    "text-motion-white text-transparent bg-clip-text bg-gradient-to-r from-motion-orange to-motion-red w-fit mx-auto";

  return (
    <>
      <div className="h-screen flex">
        <div className="max-w-md m-auto p-2">
          <div className="bg-motion-blue p-6 rounded-md text-motion-white">
            <div className="text-center my-6">
              <Image
                src={logo}
                alt={""}
                width={75}
                height={75}
                className="mx-auto"
              />
              <h1 className={gradientText + " text-3xl font-light"}>
                MotionWiz
              </h1>
              <div className={gradientText}>Your AI workout assistant</div>
            </div>
            {displayedElement}
            <div className="flex justify-center">
              <button
                className="w-fit pt-2 text-slate-400 text-center hover:cursor-pointer hover:underline"
                onClick={() => auth.signOut()}
              >
                Log Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MotionWiz;
