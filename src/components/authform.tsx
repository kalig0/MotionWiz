interface FormProps {
    signIn: any;
}

import { getAuth, GoogleAuthProvider } from "firebase/auth";

    const provider = new GoogleAuthProvider();
  
    const AuthForm: React.FC<FormProps> = (props) => {

    return (
        <>
            <div>Sign in to continue</div>
            <button onClick={props.signIn}>Sign In</button>        
        </>

    );
  };
  
  export default AuthForm;