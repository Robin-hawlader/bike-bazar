import React from 'react';
import { useForm } from "react-hook-form";
import './AddProduct.css'


const AddProduct = () => {
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        fetch('http://localhost:5000/upload', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Uploaded Successful')
                }
            })
        reset()
    };
    return (
        <div>
            <h2>Add product</h2>
            <form className='input-field' onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input placeholder='Product Name' type='text' {...register("name")} />
                    <textarea placeholder='Description' type='text' {...register("description")} maxLength='150' />
                    <input placeholder='Price' type='number' {...register("price")} />
                    <input type='url' placeholder='Image url' {...register("image", { required: true })} />
                    {/* errors will return when field validation fails  */}
                    {errors.exampleRequired && <span>This field is required</span>}
                    <input type="submit" value='Upload' />
                </div>
            </form>
        </div>
    );
};

export default AddProduct;