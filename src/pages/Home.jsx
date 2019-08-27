import React from 'react'
import { Link } from 'react-router-dom'
import useGetPets from '../hooks'
import PetItem from '../components/PetItem'

const API = 'https://us-central1-patitas-b0e03.cloudfunctions.net/api'

const Home = () => {
    const pets = useGetPets(API)

    return(
        <div className="Home">
            <div className="Home-container">
                <div className="Home-items">

                    {pets.map((pet, index) => 
                        <Link to={{
                            pathname: `/mascota/${index}-${pet.name}`,
                            state: { ...pet } 
                        }}>
                            <PetItem pet={pet} key={`pet-${index}`} />
                        </Link>
                    )}

                </div>
            </div>
        </div>
    )
}

export default Home 