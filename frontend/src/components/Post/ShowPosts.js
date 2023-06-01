import axios from 'axios';
import { useEffect, useState } from 'react';

export const URL = "http://localhost:8000/api/";

// function 

function ShowPosts({ setData }) {
    // const [dataArray, setDataArray] = useState(null);
    axios.get("http://127.0.0.1:8000/api/posts/")
        .then((response) => {
            // handle success
            console.log(response.data[0]);
            setData(response.data);
        })
        .catch((error) => {
            // handle error
            console.log(error);
        })

    // useEffect(() => {
    //     // reponse.data przyjmuje tablicę obiektów

    //         // console.log(response.data);
    // }, []);
}

export default ShowPosts;