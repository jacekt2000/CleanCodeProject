import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../Header";
import axios from "axios";

const URL = "http://localhost:8000/api/token/";

const Data = {
    email: "stasiol.olszak@gmail.com",
    password: "StanislawOlszak",
};

function SetTokenToLocal({ token }) {

}


export default function Login() {

    const [response, setResponse] = useState("");
    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    });

    async function handleSubmit(event) {
        event.preventDefault();
        if (!credentials) return;
        axios.post(URL, credentials, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            console.log(response.data); // wyświetlamy zawartość response.data
            setResponse(response.data.access);
        })
            .catch((err) => console.log(err));
    }

    useEffect(() => {
        // console.log("hurra!: " + typeof response);
        if (response) {
            localStorage.setItem('accessToken', response);
        }
    }, [response]);

    function onChange(event) {
        const { name, value } = event.target;
        setCredentials((prevState) => ({ ...prevState, [name]: value }));
    }

    return (
        <div className='container'>
            <Header />
            <div className='register'>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email" className='registerForm'>
                        <input type="email"
                            id="email"
                            name="email"
                            className='registerForm'
                            onChange={onChange}
                            size="30"
                            placeholder="email"
                            required />
                    </label><br></br>

                    <label htmlFor="password" className='registerForm'>
                        <input type="password"
                            id='password'
                            name="password"
                            className='registerForm'
                            onChange={onChange}
                            placeholder='password'
                            required />
                    </label><br></br>

                    <div className="recoverPassword">
                        <Link to="/password">Forgot your password?</Link>
                    </div>

                    <button type="submit" className='registerForm'>Sign in</button>

                    <Link to="/Register" className="signIn">Create an account</Link>
                </form>

            </div>
        </div>
    );
}