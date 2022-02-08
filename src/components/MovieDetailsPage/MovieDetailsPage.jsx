import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
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
    
    
    
    return (
        <div>
            <div><img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title} /></div>
            <div> 
                <h1>{movieId}</h1>
                <h2>{item.title}({item.release_date})</h2>
             
                <h3>Overview:</h3>
                <p>{item.overview}</p>
                <h3>Genres:</h3>
             {/* {item.genres.map(genre => (
                 <li>{genre.name}</li>
             ))} */}
             </div>
        </div>
    )
}
