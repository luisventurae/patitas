import React from 'react';
import { auth, provider } from '../utils/firebase'

const Login = () => {

    const loginFacebook = () => {
        auth().signInWithPopup(provider) // Inicio de Sesion con popup
        .then(({ user }) => {
            console.log(user)
        })
    }

    const logoutFacebook = () => {
        auth().signOut()
        .then(() => {
            console.log('Cerrar Sesion')
        })
    }

    return (
        <div className="Login">
            <div className="Login-container">
                <div className="Login-content">
                    <h2>Crear cuenta o Iniciar Sesion</h2>
                    <button onClick={loginFacebook} >
                        <i className="fab fa-facebook-square" ></i> 
                        <span>Iniciar Sesion con facebook</span>
                    </button>
                    <button onClick={logoutFacebook} >Cerrar Sesion</button>
                </div>
            </div>
        </div>
    )
}

export default Login