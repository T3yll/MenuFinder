import axios, { AxiosResponse } from "axios";
import { User } from "../types/User";

export const registerUser = async (user: User) => {
    console.log('registerUser');

    const response: AxiosResponse<User> = await axios.post('http://localhost:3000/api/users', user);

    if (response.status !== 200) {
        throw new Error('Failed to register user');
    }

    console.log('registerUser ok');
    return response.data;
};

