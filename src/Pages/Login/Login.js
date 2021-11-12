import React from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Contexts/useAuth';
import Footer from '../Shared/Footer/Footer';




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
        <>
            <div className='my-5'>
                <h4>Please Login</h4>
                <div style={{ marginLeft: "30%" }}>

                    {
                        isLoading && <Spinner animation="border" variant="danger" />
                    }
                    <form className='input-field' onSubmit={handleSubmit(onSubmit)}>
                        <input type='email' placeholder='Email' {...register("email")} />
                        <input type='password' placeholder='Password' {...register("password")} />
                        <input type="submit" />
                    </form>
                </div>
                <div>
                    <Link to='/register'>new user? please register</Link>
                    <p>-----------------------------------</p>
                    <Button onClick={() => signinWithGoogle(location, history)}>Google Sign in</Button>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Login;