import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Pour rediriger l'utilisateur après la connexion

function Login() {
  // Déclarez les états pour gérer les entrées du formulaire
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Utilisez navigate pour rediriger après une connexion réussie
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    // Créez l'objet pour envoyer les données au backend
    const userData = {
      email: username,  // Vous pouvez changer 'email' en fonction de ce que vous attendez
      password: password
    };

    try {
      // Envoi de la requête POST au backend
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Spécifiez que vous envoyez du JSON
        },
        body: JSON.stringify(userData) // Corps de la requête avec les données de connexion
      });

      const data = await response.json(); // Parse la réponse JSON

      if (response.ok) {
        // Si la connexion est réussie, vous pouvez stocker l'_id dans localStorage
        localStorage.setItem('sessionToken', data._id); // Remplacer 'data._id' par l'_id de la réponse du backend

        // Redirigez l'utilisateur vers la page d'accueil ou une page protégée
        navigate('/');
      } else {
        // Si la connexion échoue, affichez un message d'erreur
        setErrorMessage(data.error || 'Nom d\'utilisateur ou mot de passe incorrect');
      }
    } catch (error) {
      // Si une erreur se produit lors de la requête
      console.error('Erreur lors de la connexion:', error);
      setErrorMessage('Une erreur s\'est produite lors de la connexion');
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2>Connexion</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Nom d'utilisateur</label>
              <input
                type="text"
                id="username"
                className="form-control"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">Mot de passe</label>
              <input
                type="password"
                id="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {errorMessage && (
              <div className="alert alert-danger" role="alert">
                {errorMessage}
              </div>
            )}

            <button type="submit" className="btn btn-primary w-100">Se connecter</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
