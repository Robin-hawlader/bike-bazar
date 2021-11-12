import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../Contexts/useAuth';
import './Reviews.css'


const Reviews = () => {
    const { user } = useAuth()
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    alert('Review added successfull')
                }
                reset()
            })
    }
    return (
        <div>
            <h2>Review page</h2>
            <form className='input-field' onSubmit={handleSubmit(onSubmit)}>
                <input type='text' defaultValue={user.displayName} {...register("name", { required: true, })} />
                <input type='email' defaultValue={user.email} {...register("email", { required: true })} />

                <textarea type='text' placeholder='Comment...' {...register("comment",)} maxLength='150' required />
                <input type="number" placeholder='Rating' min='0' max='5' {...register("rate")} required />
                <input type="submit" />
            </form>
        </div>
    );
};

export default Reviews;