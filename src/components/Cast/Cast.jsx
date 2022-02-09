import { getPublicationCastId } from "services/publicationsApi"
import { useState, useEffect } from "react"
import { useParams } from "react-router"
import s from './Cast.module.css'



export const Cast = () => { 
    const [actors, setActors] = useState([])
    const {movieId} = useParams();
   

    useEffect(() => {
        async function FetchActors () {
            try {
                const cardActors = await getPublicationCastId(movieId)                
                setActors(cardActors)
            } catch (error) {
                
            }
        }
        FetchActors()
    }, [movieId])
    
   
    return (
        <ul>
           {actors.map(({id, profile_path, original_name, character}) => (
                <li key={id} className={s.actorsDiv}>
                <img src={`https://image.tmdb.org/t/p/w500${profile_path}`} alt="" className={s.actorFoto}/>
                <div>
                    <p>name: {original_name}</p>
                    <p>character: {character}</p>
                </div>            
                </li>
                
                
                
               
            ))}
            
            
        </ul>
        
    )
}