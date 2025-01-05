


import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login(){

    const navigate = useNavigate()
    const [formdata, setFormdata] = useState({nom:"", prenom:"", email:"", telephone:"", password:"", address:""})

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormdata({...formdata, [name]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:4000/api/connexion",formdata);
            const result = await response.json()

            if(result.user_id){
                navigate('/')
            }else{
                console.error("lofin failed")
                navigate("/signUp")
            }
        } catch (error) {
            console.log(error.message)
        }
    }

  return (
    <>
      <div className="formulaire">
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">
                <input type="email" name='email' placeholder='email' value={formdata.email} onChange={handleChange} />
            </label>
            <label htmlFor="pasword">
                <input type="password" name='password' placeholder='password' value={formdata.password} onChange={handleChange} />
            </label>

            <button type='submit'>Login</button>
            <h4>you don't have a account ? <Link to="/signUp">register</Link></h4>
        </form>
      </div>
    </>
  )
}

export default Login
