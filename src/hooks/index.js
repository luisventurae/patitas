import { useState, useEffect } from 'react'

const useGetPets = ( url ) => {
    const [ pets, setPets ] = useState([])

    useEffect(() => {
        fetch(url)
        .then(response => {
            return response.json()
        }).then(data => {
            return setPets(data) 
        })
    }, []) // [] para que se ejecute un sola vez

    return pets
}

export default useGetPets