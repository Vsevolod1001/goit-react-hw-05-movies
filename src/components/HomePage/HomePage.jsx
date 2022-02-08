import { getPublications } from "services/publicationsApi"
import {useState, useEffect} from "react"
import { Link } from "react-router-dom";

export const HomePage = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        async function fetchItems() {
            try {
               const items = await getPublications();
               setItems(items);

            } catch (error) {
                
            }
        }
        fetchItems();
        
    }, []);
    

    return (
        <main>
            <ul>    
                {items.map(item => (
                <li key={item.id}>
                    <Link to={`/movies/${item.id}`}>
                    {item.title}
                    </Link>
                    </li>
            ))}
            </ul>            
        </main>
    )}