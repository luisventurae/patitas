import React from 'react'

const PetInfo = props => {

    // const 

    return(
        <div className="PetInfo">
            <div className="PetInfo-container">
                <div className="PetInfo-content">

                    <div className="PetInfo-avatar">
                        <img src={props.pet.photo} alt={props.pet.name}/>
                    </div>
                    <div className="PetInfo-profile">
                        <h2>{props.pet.name}</h2>
                        <span>
                            {props.pet.type === 'dog' && '🐕'}
                            {props.pet.type === 'cat' && '🐈'}
                        </span>
                        <p>{props.pet.description}</p> 
                        <i>
                            {props.pet.type === 'male' && '♂'}
                            {props.pet.type === 'female' && '♀️'}
                        </i>

                        <div className="PetInfo-type">
                            <button>Adoptar</button>
                        </div>

                        <div className="PetInfo-profile-adopt">
                            <div className="PetInfo-item">
                                <h3>Datos de contacto</h3>
                                <span>Dueño:</span>
                                <h4>Luis</h4>
                                <span>Correo:</span>
                                <h4>@</h4>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default PetInfo 