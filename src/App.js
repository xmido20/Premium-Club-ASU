import './css/background.css';
import './css/navbar.css';
import './css/footer.css';
import './css/scrollbar.css';
import './css/bootstrap.css';
import './css/allDescription.css';
import './css/headers.css';

import 'bootstrap/dist/js/bootstrap.min.js'



import Home from './components/Home';
import Activities from './components/Activites'
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MarketingCommittee from './components/Committees/Marketing';
import EventsCommittee from './components/Committees/Events';
import LogisticsCommittee from './components/Committees/Logistics';
import HumanResourcesCommittee from './components/Committees/Hr';
import PublicRelationsCommittee from './components/Committees/Pr';
import MediaCommittee from './components/Committees/Media';
import Appreciation from './components/Appreciation';
import NotFound from './components/NotFound';






function App() {

  //IMPORTING IMAGES
  function importAll(r) {
    let images = {};
     r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images
   }
   const images = importAll(require.context('./imgs', false, /\.(png|jpe?g|svg|gif)$/));
   //----------------------------------


   

  return (
    <Router>
          <Switch>
            <Route exact path="/activities">
              <Activities images ={images}/>
            </Route>
            <Route exact path="/committees/marketing">
              <MarketingCommittee images ={images}/>
            </Route>
            <Route exact path="/committees/events">
              <EventsCommittee images ={images}/>
            </Route>
            <Route exact path="/committees/logistics">
              <LogisticsCommittee images ={images}/>
            </Route>
            <Route exact path="/committees/human-resources">
              <HumanResourcesCommittee images ={images}/>
            </Route>
            <Route exact path="/committees/public-relations">
              <PublicRelationsCommittee images ={images}/>
            </Route>
            <Route exact path="/committees/media">
              <MediaCommittee images ={images}/>
            </Route>
            <Route exact path="/appreciation">
              <Appreciation images ={images}/>
            </Route>
            <Route exact path="/">
              <Home images ={images}/>
            </Route>
            <Route path="*">
              <NotFound images={images}/>
            </Route>
          </Switch>
    </Router>
  );
}

export default App;
