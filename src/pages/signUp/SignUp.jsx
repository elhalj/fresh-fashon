

import './signUp.css';
import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function SignUp() {

    const navigate = useNavigate()
    const [formdata, setFormdata] = useState({nom:"", prenom:"", email:"", telephone:"", password:"", address:""})

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormdata({...formdata, [name]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:4000/api/inscription",formdata);
            const result = await response.json()

            if(result.user_id){
                navigate('/')
            }else{
                console.error("singup failed")
            }
        } catch (error) {
            console.log(error.message)
        }
    }
   return (
    <>
      <div className="formulaire">
        <form onSubmit={handleSubmit}>
            <label htmlFor="nom">
                <input type="text" name='nom' placeholder='nom' value={formdata.nom} onChange={handleChange} />
            </label>
            <label htmlFor="prenom">
                <input type="text" name='prenom' placeholder='prenom' value={formdata.prenom} onChange={handleChange} />
            </label>
            <label htmlFor="email">
                <input type="email" name='email' placeholder='email' value={formdata.email} onChange={handleChange} />
            </label>
            <label htmlFor="pasword">
                <input type="password" name='password' placeholder='password' value={formdata.password} onChange={handleChange} />
            </label>
            <label htmlFor="address">
                <input type="text" name='address' placeholder='address' value={formdata.address} onChange={handleChange} />
            </label>

            <button type='submit'>SignUp</button>

            <h3>you have an account ? <Link to="/login">Login</Link></h3>
        </form>
      </div>
    </>
  )
}

export default SignUp;
