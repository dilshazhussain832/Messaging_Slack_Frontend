import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input";
import { useCreateWorkspace } from "@/hooks/apis/workspaces/useCreateWorkspace";
import { useCreateWorkspaceModal } from "@/hooks/context/useCreateWorkspaceModal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const CreateWorkspaceModal = () => {
    const { openCreateWorkspaceModal, setOpenCreateWorkspaceModal } = useCreateWorkspaceModal();

    const { isPending, createWorkspaceMutation } = useCreateWorkspace();

    const [workspaceName, setWorkspaceName] = useState("");

    const navigate = useNavigate();

    function handleClose() {
        setOpenCreateWorkspaceModal(false);
    }

    async function handleFormSubmit(e) {
        e.preventDefault();
        try {
            const data = await createWorkspaceMutation({ name: workspaceName });
            console.log("Workspace created successfully:", data);
            navigate(`/workspaces/${data._id}`);
        } catch (error) {
            console.log("Error creating workspace:", error);
        } finally {
            setWorkspaceName("");
            setOpenCreateWorkspaceModal(false);
        }
        
    }

    return (
        <Dialog
            open={openCreateWorkspaceModal}
            onOpenChange={handleClose}
        >
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Create a new workspace</DialogTitle>
                </DialogHeader>

                <form onSubmit={handleFormSubmit} className="flex flex-col gap-4 mt-4">
                    <Input
                        required
                        disabled={isPending}
                        minLength={3}
                        placeholder="Put the name of your workspace e.g. My Company"
                        value={workspaceName}
                        onChange={(e) => setWorkspaceName(e.target.value)}
                    />

                    <div className="flex justify-end mt-5">
                        <Button disabled={isPending}>Create workspace</Button>
                    </div>
                </form>
            </DialogContent>

        </Dialog>
    );
};