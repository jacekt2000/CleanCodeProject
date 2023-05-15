import { useState } from 'react';

export default function useToken() {
    let pair = []
    const getToken = () => {
        const tokenString = localStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken?.access
    };

    const [token, setToken] = useState(getToken());

    // funckcja ustawia token w local storage i zarazem ustawia go jako stan komponentu
    function saveToken(userToken) {
        localStorage.setItem('token', JSON.stringify(userToken));
        setToken(userToken.access);
    };


    pair.push(token, saveToken);
    return pair;
}
