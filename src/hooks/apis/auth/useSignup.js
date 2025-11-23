import { useMutation } from "@tanstack/react-query";

import { signUpRequest } from "@/apis/auth";
import { useToast } from "@/hooks/use-toast";

export const useSignup = () => {
    const {toast} = useToast();
    const {isPending, isSuccess, error, mutateAsync: signupMutation} = useMutation({
        mutationFn: signUpRequest,
        onSuccess: (data) => {
            console.log("Signup Successful:", data);
            toast({
                title: "Signup Successful",
                message: "You can now sign in to your account.",
                type: "success"
            });
        },
        onError: (error) => {
            console.error("Signup Failed:", error);
            toast({
                title: "Failed to Signup",
                message: error.message,
                type: "error",
                variant: "destructive"

            });
        }
    });
    return {
        isPending,
        isSuccess,
        error,
        signupMutation
    };
}