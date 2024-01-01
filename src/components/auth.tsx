'use client'

import React from "react";
import { initFirebase } from "../../firebase/firebaseApp";
import { getAuth, GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import AuthForm from "./authform";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/navigation";

const Auth: React.FC = () => {
    initFirebase();
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const [user, loading] = useAuthState(auth);
    const router = useRouter();

    if (loading) {
        return <div>Loading...</div>
    }

    if (user) {
        router.push("/");
    }

    const signIn = async () => {
        const result = await signInWithRedirect(auth, provider);
    }

    return (<>
        <AuthForm signIn={signIn} />
    </>);
}

export default Auth;