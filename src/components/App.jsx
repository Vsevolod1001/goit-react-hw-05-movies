import { Route, Routes, Navigate} from 'react-router-dom';
import { Navigator } from 'components/Navigator';
import { HomePage } from './HomePage';
import { MovieDetailsPage } from './MovieDetailsPage/MovieDetailsPage';



export const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigator />}>
          <Route path='home' element={<HomePage />} />        
          <Route path='movies' element={<div>movie page</div>} />  
          <Route path='movies/:movieId/*' element={<MovieDetailsPage />}/>
          <Route path='*' element={<Navigate to='/' />} />
        </Route>
     
      </Routes>
      
    </div>
  );
};
 