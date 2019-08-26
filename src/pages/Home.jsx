import React from 'react'
import useGetPets from '../hooks';
import PeetItem from '../components/PeetItem'

const API = 'https://us-central1-patitas-b0e03.cloudfunctions.net/api'

const Home = () => {
    const pets = useGetPets(API)

    return(
        <div className="Home">
            <div className="Home-container">
                <div className="Home-items">

                    {pets.map((pet, index) => 
                        <PeetItem pet={pet} key={`pet-${index}`} />
                    )}

                </div>
            </div>
        </div>
    )
}

export default Home 