import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const [success, setSuccess] = useState(false);



    const handleOnblur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        e.preventDefault();
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {

                if (data.modifiedCount) {
                    console.log(data)
                    setSuccess(true)
                    alert('Make Admin Succesful')
                }
            })
    }
    return (
        <div>
            <h2>Add admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <input
                    type="email"
                    name="email"
                    onBlur={handleOnblur}
                    placeholder='email' />
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    );
};

export default MakeAdmin;