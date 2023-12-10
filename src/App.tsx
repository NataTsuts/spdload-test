import './App.css';
import { Header } from './components/Header';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { HomePage } from './pages/HomePage';
import { FavouritesPage } from './pages/FavouritesPage';

function App() {


  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/favourites' element={<FavouritesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
