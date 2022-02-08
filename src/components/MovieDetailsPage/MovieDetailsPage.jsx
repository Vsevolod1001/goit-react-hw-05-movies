import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import s from './MovieDetailsPage.module.css'
import { getPublicationId } from "services/publicationsApi";




export const MovieDetailsPage = () => {
    const {movieId} = useParams();
    const [item, setItem] = useState([]);
    // const o = getPublicationId(movieId);
    // console.log(o)
    useEffect(() => {
      async function FetchItem () {
          try {
              const card = await getPublicationId(movieId);
              console.log(card)
              setItem(card)
          } catch (error) {
              
          }
      }
      FetchItem();     
    }, [movieId]);
    
    const {genres, title, release_date, overview, poster_path, vote_average } = item
    
    return (
        <div className={s.div}>           
            <div><img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} className={s.filmImg}/></div>
            <div className={s.filmInfo}> 
                {/* <h1>{movieId}</h1> */}
                <h1>{title}({release_date})</h1>
                <p>User Score: {vote_average}</p>
                <h2>Overview:</h2>
                <p>{overview}</p>
                <h2>Genres:</h2>
             {genres && genres.map(genre => (
                 <li key={genre.id}>{genre.name}</li>
             ))}
             </div>
        </div>
    )
}
