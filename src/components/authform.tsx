import Image from "next/image";
import logo from "../public/Dumbbell.svg";

interface FormProps {
  signIn: any;
}

import { getAuth, GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

const AuthForm: React.FC<FormProps> = (props) => {
  const gradientText =
    "text-motion-white text-transparent bg-clip-text bg-gradient-to-r from-motion-orange to-motion-red w-fit mx-auto";

  return (
    <>
      <div className="h-screen flex">
        <div className="max-w-md m-auto p-2">
          <div className="bg-motion-blue p-12 rounded-md text-motion-white">
            <div className="text-center my-6">
              <Image
                src={logo}
                alt={""}
                width={75}
                height={75}
                className="mx-auto"
              />
              <h1 className={gradientText + " text-4xl font-bold"}>
                MotionWiz
              </h1>
              <div className={gradientText}>Your AI workout assistant</div>
            </div>
            <div>
              <div className="text-center my-2">Sign in to continue</div>  
              <button
                className="bg-gradient-to-r from-motion-orange to-motion-red w-full p-2 rounded-md"
                onClick={props.signIn}
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthForm;
