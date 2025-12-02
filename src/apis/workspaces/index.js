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
};

export const fetchWorkspaceDetailsRequest = async ({ workspaceId, token }) => {
    try {
        const response = await axios.get(`/workspaces/${workspaceId}`, {
            headers: {
                'x-access-token': token
            }
        });
        return response?.data?.data;
        
    } catch (error) {
        console.log("Error in fetch workspace details request", error);
        throw error.response.data;
    }
}

export const deleteWorkspaceRequest = async ({ workspaceId, token}) => {
    try {
        const response = await axios.delete(`/workspaces/${workspaceId}`, {
            headers: {
                'x-access-token': token
            }
        });

        return response?.data?.data;
        
    } catch (error) {
        console.log("Error in delete workspace request", error);
        throw error.response.data;
    }
}

export const updateWorkspaceRequest = async ({ workspaceId, name, token}) => {
    try {
        const response = await axios.put(`/workspaces/${workspaceId}`, { name }, {
            headers: {
                'x-access-token': token
            }
        })

        return response?.data?.data;
        
    } catch (error) {
        console.log("Error in update workspace request", error);
        throw error.response.data;
    }
}