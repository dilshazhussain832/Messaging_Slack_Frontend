import { useMutation } from "@tanstack/react-query";

import { signInRequest } from "@/apis/auth";
import { useToast } from "@/hooks/use-toast";

export const useSignin = () => {
    const {toast} = useToast();
    const {isPending, isSuccess, error, mutateAsync: signinMutation} = useMutation({
        mutationFn: signInRequest,
        onSuccess: (data) => {
            console.log("Signin Successful:", data);
            toast({
                title: "Signin Successful",
                message: "You will be redirected to the home page in a few seconds.",
                type: "success"
            });
        },
        onError: (error) => {
            console.error("Signin Failed:", error);
            toast({
                title: "Failed to Signin",
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
        signinMutation
    };
}