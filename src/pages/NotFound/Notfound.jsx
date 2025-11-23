import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div
            className="flex h-screen w-full flex-col items-center justify-center bg-gray-100"
        >
            <Card className="text-center shadow-lg max-w-lg">
                <CardHeader>
                    <CardTitle>
                        404 - Page Not Found
                    </CardTitle>
                    <p className="text-gray-600">
                        Oops! The page you're looking for doesn't exist.
                    </p>
                </CardHeader>
                <CardContent>
                    <img className="rounded-lg shadow-lg" src="https://img.freepik.com/free-vector/hand-drawn-404-error_23-2147746234.jpg?semt=ais_hybrid&w=740&q=80" />

                    <Button
                        variant="outline"
                        onClick={() => navigate(-1)}
                        className="mt-4"
                    >
                        Go Back
                    </Button>
                </CardContent>
            </Card>

        </div>
    );
};