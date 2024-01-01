'use client'

import React from "react";
import Form from "./form";
import Results from "./results";
import { initFirebase } from "../../firebase/firebaseApp";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/navigation";

const MotionWiz: React.FC = () => {
    const CHARACTER_LIMIT = 32;
    const ENDPOINT: string = "https://7pkmmzlacl.execute-api.us-east-1.amazonaws.com/prod/generate_exercises_and_explanation"
    const [prompt, setPrompt] = React.useState("");
    const [explanation, setExplanation] = React.useState("");
    const [exercises, setExercises] = React.useState([]);
    const [hasResult, setHasResult] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);
    const auth = getAuth();
    const [user, loading] = useAuthState(auth);
    const router = useRouter();

    if (loading) {
        return <div>Loading...</div>
    }

    if (!user) {
        router.push("/auth")
    }

    // const callApi = async () => {
    //     const token = await user.getIdToken();     
        
    //     const echoEndpoint: string = `${ENDPOINT}?prompt=${prompt}`;
    //     const requestInfo = {
    //         headers: {
    //             Authorization: "Bearer " + token,
    //         },
    //     };

    //     const response = await fetch(echoEndpoint, requestInfo).then((res) => res.json()).then(onResult);
    //     const responseBody = await response.json();
    //     console.log(responseBody);
    // };

    const onSubmit = () => {
        console.log("Submitting: " + prompt);
        setIsLoading(true);
        fetch(`${ENDPOINT}?prompt=${prompt}`).then((res) => res.json()).then(onResult);
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
        displayedElement = <Results prompt={prompt} exercises={exercises} explanation={explanation} onBack={onReset} />
    } else {
        displayedElement = <Form prompt={prompt} setPrompt={setPrompt} onSubmit={onSubmit} isLoading={isLoading} characterLimit={CHARACTER_LIMIT} />
    }

    return (
        <>
            <h1>MotionWiz!</h1>
            {displayedElement}
            <button onClick={() => auth.signOut()}>Log Out</button>
        </>
    );
};

export default MotionWiz;