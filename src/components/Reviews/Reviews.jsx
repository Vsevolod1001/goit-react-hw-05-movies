import { useState, useEffect} from "react"
import { getPublicationReviewsId } from "services/publicationsApi"
import { useParams } from "react-router"


export const Reviews = () => {
    const [reviews, setReviews] = useState([])
    const {movieId} = useParams();
    
    useEffect(() => {
     async function FetchReviews () {
         try {
            const cardReview = await getPublicationReviewsId(movieId);
            setReviews(cardReview)
         } catch (error) {
             
         }
     }
     FetchReviews();
    }, [movieId])
    
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
}