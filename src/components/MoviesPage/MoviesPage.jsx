import  {useState, useEffect} from "react";
import { getSearchPublication } from "services/publicationsApi";
import { Link, useSearchParams, useLocation } from "react-router-dom";
import { TailSpin } from  'react-loader-spinner'



export const MoviesPage = () => {  
    const [searchkinchik, setSearchkinchik] = useState([])
    const [isLoad, setIsLoad] = useState(false)
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();
    const query = searchParams.get('query')

    useEffect(() => {
        if (query === null) {
            return;
        }
     async function FetchSearch () {
        setIsLoad(true);
         try {
             const cardSearch = await getSearchPublication(query)
             
             setSearchkinchik(cardSearch)
         } catch (error) {
             
         } finally {
            setIsLoad(false)
          } 
     }
     FetchSearch();
    }, [query])
       
    const hendleSubmit = e => {
        e.preventDefault();
        setSearchParams({ query: e.currentTarget.elements.query.value });

        if (e.currentTarget.elements.query.value.trim() === '') {
            alert('введите название фильма')
            return;            
        }
    }
   
    return ( 
        <>
            {isLoad && <TailSpin />}
            <div>
                <header className="searchbar">
                    <form className="form" onSubmit={hendleSubmit}>
                        
                            <button type="submit" className="button" >
                                <span className="button-label">Search</span>
                            </button>
                                            
                    <input                        
                        className="input"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search movies"                        
                        name="query"
                    />
                    </form>
                </header>
            </div>
            {searchkinchik.length > 0 && (
            <ul>
                {searchkinchik.map(({id, title}) => (
                    <li key={id}>
                        <Link to={`/movies/${id}`} state={{from: location}}>{title}</Link>
                    </li>
                ))}
            </ul>
            )}           
        </>
    )
}