import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import {orginals,action,comedy, trending, romance, horror} from './urls'

function App() {
  return (
   <div className='App'>
     <NavBar/>
     <Banner/>
     <RowPost url={orginals} title='Neflix Orginals'/>
     <RowPost url={trending} title='Trending'/>
     <RowPost url={action} title='Action' isSmall />
     <RowPost url={comedy} title='Comedy' isSmall/>
     <RowPost url={horror} title='Horror' isSmall/>
     <RowPost url={romance} title='Romance' isSmall/>
   </div>
  );
}

export default App;
