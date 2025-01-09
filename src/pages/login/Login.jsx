


import axios from 'axios'

import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login(){

    const navigate = useNavigate()
    const [formdata, setFormdata] = useState({email:"",password:""})
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    // const [user, setUser] = useState(null);
    // const [items, setItems] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormdata({...formdata, [name]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage("");
        setSuccessMessage("");

        try {
            
            const response = await axios.post("http://localhost:5000/api/connexion", {
                email: formdata.email,
                password: formdata.password
            });

            
            if (!response.data && response.data.user_id) {
                console.log("erreur de connexion");
            } else {
                console.log("Connecté avec succès");
                setSuccessMessage("Connecté avec succès");
                
                localStorage.setItem('user', JSON.stringify(response.data));
                localStorage.setItem('token', response.data.token);
            }
            navigate('/catalogue');

        } catch (error) {
            console.log(error.message);
            console.log("utilisateur inconnu")


        }
    };

  return (
    <>
      <div className="formulaire">
        <form /*onSubmit={handleSubmit}*/>
            <label htmlFor="email">
                <input 
                    type="email" 
                    name='email' 
                    placeholder='email'
                    autoFocus={true}
                    value={formdata.email} 
                    onChange={handleChange} 
                />
            </label>
            <label htmlFor="pasword">
                <input 
                    type="password" 
                    name='password' 
                    placeholder='password'
                    value={formdata.password} 
                    onChange={handleChange} 
                />
            </label>

            <button type='submit' onClick={handleSubmit}>Login</button>
            {!errorMessage ?(<p style={{ color: 'green' }}>{successMessage}</p>) : (<p style={{ color: 'red' }}>{errorMessage}</p>)}
            {/* {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>} */}
            <h4>you don't have a account ? <Link to="/signUp">register</Link></h4>
        </form>
      </div>
    </>
  )
}

export default Login
