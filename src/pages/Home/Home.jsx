import { UserButton } from "@/components/atoms/UserButton/UserButton"
import { useFetchWorkspace } from "@/hooks/apis/workspaces/useFetchWorkspace"
import { useEffect } from "react";

export const Home = () => {

    const { isFetching, workspaces } = useFetchWorkspace();

    useEffect(() => {
        if(isFetching) return;

        console.log("Fetched workspaces:", workspaces);

        if(workspaces.length === 0 || !workspaces) {
            console.log("No workspaces found.");
        }
    }, [isFetching, workspaces]);
    return (
        <>
            <h1>Home Page</h1>
            <UserButton />
        </>
    )
}