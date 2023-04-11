"use client"
import {FC, useState} from 'react'
import Button from "@/ui/Button";
import {signIn} from "next-auth/react";
import toast from "react-hot-toast";

interface SignInButtonProps {
}

const SignInButton: FC<SignInButtonProps> = ({}) => {
    const [isLoading, setLoading] = useState<boolean>(false)

    const signInWithGoogle = async () => {
        setLoading(true)
        try {
            await signIn("Google")
        } catch (error) {
            toast({
                key: undefined,
                props: undefined,
                type: "error",
                title: "Error Signing in",
                message: "Please try again later."
            })
        }
    }

    return <Button onClick={signInWithGoogle} isLoading={isLoading}>Sign in</Button>
}
export default SignInButton