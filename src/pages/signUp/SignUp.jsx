

import './signUp.css';
import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function SignUp() {

    const navigate = useNavigate()
    const [formdata, setFormdata] = useState({nom:"", prenom:"", email:"", telephone:"", password:"", address:""})
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormdata({...formdata, [name]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage("");
        setSuccessMessage("");

        try {
            
            const response = await axios.post("http://localhost:5000/api/inscription", formdata);

            // Vérifier si JSON valide
            if (!response.data && response.data.user_id) {
                console.log("Erreur d'inscription");
                setErrorMessage("Erreur d'inscription");
                 // Rediriger vers la page de connexion
            }else{
                console.log("Inscription réussie");
                setSuccessMessage("Inscription réussie");
            }
            navigate("/login");
        } catch (error) {
            
            console.log(error);
        }
    };
   return (
    <>
      <div className="formulaire">
        <form /*onSubmit={handleSubmit}*/>
            <label htmlFor="nom">
                <input type="text" name='nom' placeholder='nom' value={formdata.nom} onChange={handleChange} required/>
            </label>
            <label htmlFor="prenom">
                <input type="text" name='prenom' placeholder='prenom' value={formdata.prenom} onChange={handleChange} required/>
            </label>
            <label htmlFor="email">
                <input type="email" name='email' placeholder='email' value={formdata.email} onChange={handleChange} required/>
            </label>
            <label htmlFor="telephone">
                <input type="number" name='telephone' placeholder='telephone' value={formdata.telephone} onChange={handleChange} required/>
            </label>
            <label htmlFor="pasword">
                <input type="password" name='password' placeholder='password' value={formdata.password} onChange={handleChange} required/>
            </label>
            <label htmlFor="address">
                <input type="text" name='address' placeholder='address' value={formdata.address} onChange={handleChange} required/>
            </label>

            <button type='submit' onClick={handleSubmit}>SignUp</button>

            {/* /*affichage du message d'erreur */}
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

            {/* /*affichage du message de succès */}
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}

            <h3>you have an account ? <Link to="/login">Login</Link></h3>
        </form>
      </div>
    </>
  )
}

export default SignUp;
