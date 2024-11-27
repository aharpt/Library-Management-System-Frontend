import axios from 'axios';
const BASE_URL = "http://localhost:8080/library/users";

export const saveUser = async (id : string, username : string, password : string) => {
    try {
        const response = await axios.get(`http://localhost:3000/api`);
        // handle success
        console.log(response);
    } catch (error) {
        // handle error
        console.log(error);
    }
}

