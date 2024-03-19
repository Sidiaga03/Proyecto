

import { ILogin, IRespLogin } from '@/interfaces/Ilogin';
import axios from 'axios';

const apiBD = 'http://192.168.0.100:3001/api';

const apiAuth = {

    login: async (login:ILogin): Promise<IRespLogin> => {
        const ruta = `${apiBD}/auth/login`;
        const {data} = await axios.post(`${ruta}`, login) 
        return data
    }
}

export default apiAuth;