import axios from '@/config/axiosConfig';

export const createWorkspaceRequest = async ({ name, description, token}) => {

    try {
        const response = await axios.post('/workspaces', {name, description}, {
            headers: {
                'x-access-token': token
            }
        });
        console.log("Response in create workspace request", response);
        return response?.data?.data;
        
    } catch (error) {
        console.log("Response in create workspace request", response);
        throw error.response.data;
    }
};

export const fetchWorkspacesRequest = async ({ token}) => {
    try {
        const response = await axios.get('/workspaces', {
            headers: {
                'x-access-token': token
            }
        });
        console.log("Response in fetch workspaces request", response);
        return response?.data?.data;
    } catch (error) {
        console.log("Error in fetch workspaces request", error);
        throw error.response.data;
    }
}