import React from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../Contexts/useAuth';
import Footer from '../Shared/Footer/Footer';




const Register = () => {
    const history = useHistory()
    const location = useLocation();
    const { signinWithGoogle, registerUser, } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        registerUser(data.email, data.password, data.name, location, history)
        reset()
    };

    return (
        <>
            <div className='my-5'>
                <h4>Please Regester</h4>
                <div style={{ marginLeft: "30%" }}>
                    <form className='input-field' onSubmit={handleSubmit(onSubmit)}>
                        <input type='text' placeholder='Your name' {...register("name")} />
                        <input type='email' placeholder='Email' {...register("email")} />
                        <input type='password' placeholder='Password' {...register("password")} />
                        <input type="submit" />
                    </form>
                </div>
                <Link to='/login'>Already registered? Please Login</Link>
                <p>-----------------------------------</p>
                <Button onClick={signinWithGoogle}>Google Sign in</Button>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Register;