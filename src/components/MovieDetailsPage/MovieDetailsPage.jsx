import { useParams, Link, Route, Routes } from "react-router-dom"
import { useState, useEffect } from "react";
import s from './MovieDetailsPage.module.css'
import { getPublicationId } from "services/publicationsApi";
import { Cast } from "components/Cast/Cast";
import { Reviews } from "components/Reviews/Reviews";



export const MovieDetailsPage = () => {
    const {movieId} = useParams();
    const [item, setItem] = useState([]);
    
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
    const pars = parseFloat(release_date)
      
    return (
        <div>
            <hr />
            <Link to='/home'> к публикациям</Link>
            <div className={s.div}>                       
                <div><img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} className={s.filmImg}/></div>
                <div className={s.filmInfo}>                 
                <h1>{title} ({pars})</h1>
                <p>User Score: {vote_average}</p>
                <h2>Overview:</h2>
                <p>{overview}</p>
                <h2>Genres:</h2>
                {genres && genres.map(genre => (
                 <li key={genre.id}>{genre.name}</li>
             ))}
                </div>
            </div> 
            <hr />
            <div className={s.cardInfo}>
                <Link to={'cast'}>Cast</Link>
                <Link to={'reviews'}>Reviews</Link>
            </div>
            <div>
            <Routes>
                <Route path="cast" element={<Cast />}/>
                <Route path="reviews" element={<Reviews />}/>
            </Routes>  
            </div>
        </div>
    
    )
}
