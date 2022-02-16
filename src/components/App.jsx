import { Route, Routes, Navigate} from 'react-router-dom';
import {lazy} from 'react';
import { Navigator } from 'components/Navigator';

const HomePage = lazy(() => 
  import('./HomePage/HomePage').then(module => ({ default: module.HomePage}))
);
const MovieDetailsPage = lazy(() => 
  import('./MovieDetailsPage/MovieDetailsPage').then(module => ({ default: module.MovieDetailsPage}))
);
const MoviesPage = lazy(() => 
  import('./MoviesPage/MoviesPage').then(module => ({ default: module.MoviesPage}))
);


export const App = () => {
  return (
    <div>
    
      <Routes>
        <Route path='/' element={<Navigator />}>
          <Route path='home' element={<HomePage />} />        
          <Route path='movies' element={<MoviesPage />} />  
          <Route path='movies/:movieId/*' element={<MovieDetailsPage />}/>
          <Route path='*' element={<Navigate to='/' />} />
        </Route>
      </Routes>
    
      
    </div>
  );
};
 