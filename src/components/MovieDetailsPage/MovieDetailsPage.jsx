import { useParams } from "react-router-dom"

export const MovieDetailsPage = () => {
    const {movieId} = useParams();
    
    return (
        <div>
            <h1>{movieId}</h1>
        </div>
    )
}