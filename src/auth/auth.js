import axios from 'axios';

// Insert your own API key after Token
export default() => {
    return axios.create({
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Token df3a9ea1d4d5804d830fe93267242281cedd59ec`
        }
    });
};