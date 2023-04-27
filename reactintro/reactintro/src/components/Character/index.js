import {useEffect, useState} from "react";

// const Character = () => {
//
//     const [name, setName] = useState('')
//     const [height, setHeight] = useState('')
//     const [mass, setMass] = useState('')
//
//     useEffect(() => {
//         fetch('https://swapi.dev/api/people/1/')
//         .then(res => res.json())
//         .then(data => {             // alternatively use setData(data) to get all data
//             setName(data.name)      //Then in the <li> select {data.name}, {data.height} etc.
//             setHeight(data.height)
//             setMass(data.mass)
//         })
//     }, [])
//
//     return (
//         <ul>
//             <li>Name: {name}</li>
//             <li>Height: {height}</li>
//             <li>Mass: {mass}</li>
//         </ul>
//     )
// }

// Switching between characters from Star Wards API
const Character = () => {
    const [data, setData] = useState({})
    const [homeworld, setHomeworld] = useState({})
    const [characterId, setCharacterID] = useState(1)

    const nextCharacter = () => {
        setCharacterID(characterId + 1)
    }

    useEffect(() => {
        fetch('https://swapi.dev/api/people/' + characterId)
            .then(res => res.json())
            .then(data => {
                if (data.detail === 'Not found') {
                    setData({
                        name: 'unknown',   // this is to display something when there is no character data
                        height: 'unknown',
                        mass: 'unknown'
                    })
                } else {
                    setData(data)
                }
            })
    }, [characterId])

    useEffect(() => {
        if(data.homeworld) {
            fetch(data.homeworld)
                .then(res => res.json())
                .then(data => {
                    setHomeworld(data)
                })
        }
    }, [data])

    return (
        <>
            <ul>
                <li>Name: {data.name}</li>
                <li>Height: {data.height}</li>
                <li>Mass: {data.mass}</li>
                <li>Homeworld: {homeworld.name}</li>
            </ul>
            <button onClick={nextCharacter}>Show me next character</button>
        </>
    )
}
export default Character