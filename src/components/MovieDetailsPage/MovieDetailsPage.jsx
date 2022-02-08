import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import { getPublicationId } from "services/publicationsApi";

export const MovieDetailsPage = () => {
    const {movieId} = useParams();
    const [item, setItem] = useState(null);
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
             <h1>{movieId}</h1>
             {/* <h2>{item.title}</h2> */}
            
            
            {/* {item && item.map(card => (<li key={card.id}>{card.title}</li>))} */}
        </div>
    )
}
