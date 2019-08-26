import React from 'react'

const Form  = () => (
    <div className="Form">
        <div className="Form-head">
            <h2>Dar en Adopción</h2>
        </div>
        <div className="Form-item">
            <form action="">
                <input type="name"  name="name" placeholder="Nombre de tu mascota" />
                <input type="text"  name="description" placeholder="Descibe a tu mascota" />
                <select name="type" >
                    <option disabled selected>Seleccione</option>
                    <option value="cat">Gato</option>
                    <option value="dog">Perro</option>
                </select>
                <select name="gender" >
                    <option disabled selected>Seleccione</option>
                    <option value="mañe">Masculino</option>
                    <option value="female">Femenino</option>
                </select>
                <select name="adopt" >
                    <option disabled selected>Seleccione</option>
                    <option value="true">Dar en Adopción</option>
                    <option value="false">Cuidar</option>
                </select>
                <input type="file" name="photo" />
                <button type="submit" >Enviar</button>
            </form>
        </div>
    </div>
)

export default Form 