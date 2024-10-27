// client/src/Form.js
import React, { useState } from 'react';
import axios from './api';

function Form() {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        age: '',
        address: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/add-user', formData);
            console.log('User added:', response.data);
        } catch (error) {
            console.error('Error adding user:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="firstname" placeholder="First Name" value={formData.firstname} onChange={handleChange} required />
            <input type="text" name="lastname" placeholder="Last Name" value={formData.lastname} onChange={handleChange} required />
            <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} required />
            <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
            <button type="submit">Submit</button>
        </form>
    );
}

export default Form;
