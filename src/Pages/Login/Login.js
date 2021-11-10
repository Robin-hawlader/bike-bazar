import React from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Contexts/useAuth';




const Login = () => {
    const location = useLocation()
    const history = useHistory()
    const { signinWithGoogle, login, isLoading } = useAuth()
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        login(data.email, data.password, location, history)
        reset()
    };

    return (
        <div>
            {
                isLoading && <Spinner animation="border" variant="danger" />
            }
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type='email' placeholder='Email' {...register("email")} />
                <input type='password' placeholder='Password' {...register("password")} />
                <input type="submit" />
            </form>
            <Link to='/register'>new user? please register</Link>
            <p>-----------------------------------</p>
            <Button onClick={() => signinWithGoogle(location, history)}>Google Sign in</Button>
        </div>
    );
};

export default Login;