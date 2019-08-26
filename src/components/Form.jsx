import React, { useState } from 'react'
import { storage, database } from '../utils/firebase'

const Form  = () => { 

    const [ petPhoto, setPetPhoto ] = useState('')
    const [ sendForm, setSendForm ] = useState(false) 

    const handleSubmit = event => {
        event.preventDefault() // Evitar Reload de la pagina

        const form = new FormData(event.target) // Obtner todos los datos de los formularios
        const newDate = new Date().toISOString()

        // Objeto que se subira a la bd
        const data = {
            'adopt': form.get('adopt'), // get obiene el valor segun el nombre que tiene el field deformulario
            'date': newDate,
            'description': form.get('description'),
            'gender': form.get('gender'),
            'name': form.get('name'),
            'type': form.get('type'),
            'photo': petPhoto,
            'profilePic': '',
            'userContact': '',
            'userName': '',
        }

        database.ref('pets') // Hacer referencia a la colección
        .push(data) // Guardar la data, 
        .then(response => {
            return setSendForm(true)
        }).catch(error => {
            console.error(error)
        })
    }

    const onChange = event => { // Para subir las imagenes al almacenamiento de firebase al seleccionar una imagen
        const file = event.target.files[0] // Cargar imagen
        const storageRef = storage.ref() // Hacer referencia al storage de firebase
        const name = (+new Date()) + '-' + file.name // Para crear un nombre dinamico a los archvos que se van a subir
        
        const uploadFile = storageRef.child(name).put(file) // Sube la imagen

        uploadFile
        .then((snapshot) => {
            snapshot.ref.getDownloadURL() // Obtener URL donde se subio la imagen
            .then(downloadURL => {
                return setPetPhoto(downloadURL)
            })
        })
    }

    return (
        <div className="Form">
            <div className="Form-head">
                <h2>Dar en Adopción</h2>
            </div>
            {sendForm &&
                <div className="Form-send">
                    <span>Se ha enviado exitosamente</span>
                </div>
            }
            {!sendForm &&
                <div className="Form-item">
                    <form onSubmit={handleSubmit} >
                        <input type="name"  name="name" placeholder="Nombre de tu mascota" />
                        <input type="text"  name="description" placeholder="Describe a tu mascota" />
                        <select name="type" >
                            <option disabled selected>Seleccione</option>
                            <option value="cat">Gato</option>
                            <option value="dog">Perro</option>
                        </select>
                        <select name="gender" >
                            <option disabled selected>Seleccione</option>
                            <option value="male">Masculino</option>
                            <option value="female">Femenino</option>
                        </select>
                        <select name="adopt" >
                            <option disabled selected>Seleccione</option>
                            <option value="true">Dar en Adopción</option>
                            <option value="false">Cuidar</option>
                        </select>
                        <input type="file" onChange={onChange} name="photo" />
                        <button>Enviar</button>
                    </form>
                </div>
            }
        </div>
    )
}

export default Form 