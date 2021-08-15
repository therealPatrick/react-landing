import{Route, Switch} from 'react-router-dom';
import AllMeetupPage from './pages/AllMeetups';
import FavouritePage from './pages/Favourite';
import NewMeetupPage from './pages/NewMeetup';
import MainNavigation from './components/layout/MainNavigation';


function App() {
  return(
    <div>
      <MainNavigation />
      
      <Switch>
        <Route path="/" exact><AllMeetupPage /></Route>
        <Route path="/new-meetup"><NewMeetupPage /></Route>
        <Route path="/favourites"><FavouritePage /></Route>
      </Switch>

    </div>
  );
}

export default App;
