import { useEffect, useState } from "react";
import { SigninCard } from "./SigninCard"
import { useSignin } from "@/hooks/apis/auth/useSignin";
import { useNavigate } from "react-router-dom";

export const SigninContainer = () => {


    const navigate = useNavigate();
    const [validationError, setValidationError] = useState(null);

    const [signinForm, setSigninForm] = useState({
        email: '',
        password: ''
    });

    const { isSuccess, isPending, error, signinMutation } = useSignin();

    const onSigninFormSubmit = async (e) => {
        e.preventDefault();

        if(!signinForm.email || !signinForm.password) {
            console.log("All fields are required.");
            setValidationError({message: "All fields are required."});
            return;
        }

        setValidationError(null);

        await signinMutation({
            email: signinForm.email,
            password: signinForm.password
        });

    };
    useEffect(() => {
            if(isSuccess) {
                setTimeout(() => {
                    navigate('/home');
                }, 2000);
            }
        }, [isSuccess, navigate]);

    return (
        <SigninCard
            onSigninFormSubmit={onSigninFormSubmit}
            signinForm={signinForm}
            setSigninForm={setSigninForm}
            validationError={validationError}
            error={error}
            isSuccess={isSuccess}
            isPending={isPending}
        />
    )
}