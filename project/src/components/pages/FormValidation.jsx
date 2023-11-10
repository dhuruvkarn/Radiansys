import React, { useState } from 'react';
import "./FormValidation.css"

const FormValidation = () => {
    const [formData, setFormData] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const checkSpecial = (str) => {
        const regex = /^[a-zA-Z0-9\s]+$/;
        return regex.test(str);
    }
    const checkNumber = (num) => {
        const regex = /^\d{10}$/;
        return regex.test(num);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            formData.name.length >= 3 &&
            formData.name.length <= 20 &&
            checkSpecial(formData.name) &&
            Number(formData.age) < 100 &&
            formData.gender !== "" &&
            formData.address.length <= 120 &&
            checkNumber(formData.phoneNumber)
        ) {
            alert("Form submit successfully")
        } else {
            alert("some field missing or in not correct order")
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    onChange={handleInputChange}
                    minLength={3}
                    maxLength={20}
                    pattern="[A-Za-z\s]*"
                    required
                />
            </div>

            <div>
                <label>Age:</label>
                <input
                    type="number"
                    name="age"
                    onChange={handleInputChange}
                    max={99}
                    required
                />
            </div>

            <div>
                <label>Gender:</label>
                <select name="gender" onChange={handleInputChange} required>
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>
            </div>

            <div>
                <label>Address:</label>
                <input
                    name="address"
                    onChange={handleInputChange}
                    maxLength={120}
                    required
                />
            </div>

            <div>
                <label>Phone Number:</label>
                <input
                    type="tel"
                    name="phoneNumber"
                    onChange={handleInputChange}
                    pattern="[0-9]{10}"
                    required
                />
            </div>

            <div>
                <label>Skills:</label>
                <input
                    type="text"
                    name="skills"
                    onChange={handleInputChange}
                />
            </div>

            <button type="submit">Submit</button>
        </form>
    );
};

export default FormValidation;
