import { useMutation } from "@tanstack/react-query";

import { signUpRequest } from "@/apis/auth";

export const useSignup = () => {
    const {isPending, isSuccess, error, mutate: signupMutation} = useMutation({
        mutationFn: signUpRequest,
        onSuccess: (data) => {
            console.log("Signup Successful:", data);
        },
        onError: (error) => {
            console.error("Signup Failed:", error);
        }
    });
    return {
        isPending,
        isSuccess,
        error,
        signupMutation
    };
}