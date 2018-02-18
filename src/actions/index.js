import axios from 'axios';

export const SEND_USER = 'send_user';

export function sendName(value) {

    const request = axios.post('http://localhost:5005/sendname',value);

    return {
        type: SEND_USER,
        payload: request
    }


}
