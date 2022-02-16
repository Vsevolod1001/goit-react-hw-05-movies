import { useState, useEffect} from "react"
import { getPublicationReviewsId } from "services/publicationsApi"
import { useParams } from "react-router"
import { TailSpin } from  'react-loader-spinner'


export const Reviews = () => {
    const [reviews, setReviews] = useState([])
    const {movieId} = useParams();
    const [IsLoad, setIsLoad] = useState(true)
    
    useEffect(() => {
     async function FetchReviews () {
         try {
            const cardReview = await getPublicationReviewsId(movieId);
            setReviews(cardReview)
         } catch (error) {
             
         } finally {
            setIsLoad(false)
          } 
     }
     FetchReviews();
    }, [movieId])
    if (IsLoad === true) {
        return (
            <TailSpin />
        )
    }
    if (reviews.length !== 0) {
        return (
            <ul>
                {reviews.map(({id, author, content}) => (
                  <li key={id}>
                      <p>author: {author}</p>
                      <p>{content}</p>
                  </li>  
                ))}
            </ul>
        )
    } else {
        return (
            <>
             <p>We don`t have any reviews for this movie</p>
            </>
        )
    }
    // return (
    //     <ul>           
    //         {reviews.length > 0 ?
    //         (reviews.map(({id, author, content}) => (
    //             <li key={id}>
    //                 <p>author: {author}</p>
    //                 <p>{content}</p>
    //             </li>
    //         ))) : (<p>We don`t have any reviews for this movie</p>)}
    //     </ul>
    // )
}