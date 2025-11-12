import { instance } from "../utils/axios.util";

export const getUsers   = async () => {
    const response = await instance.get('/user');
    return response.data;
    }