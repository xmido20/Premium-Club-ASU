import './css/navbar.css';
import './css/footer.css';
import './css/scrollbar.css';
import './css/bootstrap.css';
import './css/allDescription.css';
import './css/headers.css';

import 'bootstrap/dist/js/bootstrap.js'
// import 'bootstrap/dist/js/bootstrap.bundle';
import styled from 'styled-components'

import React, { lazy, useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './pages/components/Loader';

// import Home from './pages/Home';
import Activities from './pages/Activites'
import Crew from './pages/Crew';

import MarketingCommittee from './pages/Committees/Marketing';
import EventsCommittee from './pages/Committees/Events';
import LogisticsCommittee from './pages/Committees/Logistics';
import HumanResourcesCommittee from './pages/Committees/Hr';
import PublicRelationsCommittee from './pages/Committees/Pr';
import MediaCommittee from './pages/Committees/Media';
import AcademicCommittee from './pages/Committees/Academic';

import NotFound from './pages/NotFound';
import ClientNavbar from './pages/components/ClientNavbar';
import { Suspense } from 'react';
import FooterNew from './pages/components/FooterNew';
const Home = lazy(() => import('./pages/Home'))

  const Background = styled.div`
      
      position: fixed;
      z-index: -1;
      background-size: cover;
      background-repeat: no-repeat;
      background-attachment: fixed;
      background-position: center center;
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-color: #464646;
      overflow-x:hidden;
      height: 100vh;
      padding:0;
      transition: none !important;
   `

function App() {
  const location = useLocation()

  const [isLoading, setIsLoading] = useState(true)

  //IMPORTING IMAGES
  function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images
  }
  const images = importAll(require.context('./imgs', false, /\.(png|jpe?g|svg|gif|mp4)$/));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location])

  const checkImageExists = (url) => {
    const img = new Image();
    img.onload = () => setTimeout(()=>{
      setIsLoading(false);
    },1500)
    img.onerror = () => setTimeout(()=>{
      setIsLoading(false);
    },1500)
    img.src = url;
};
  useEffect(() => {
    checkImageExists(`${images['bg-constant.png']}`);
}, [images['bg-constant.png']]);
  //-----------
  return (
    <>
      <Background style={{backgroundImage: `url(${images['bg-constant.png']})`}} id='bg'>
        <video poster={images['bg-constant.png']} style={{ position: 'fixed', width: '100%', height: '100%', objectFit: 'cover', top: 0, left: 0, zIndex: -1 }} onPauseCapture={(e) => e.preventDefault()} disableRemotePlayback={false} controls={false} autoPlay={true} muted={true} loop={true} playsInline={true}>
          <source src={images['space1.mp4']} type='video/mp4' />
        </video>
      </Background>
      {
        isLoading && (
          <Loader images={images} />
        )
      }
      <div id='site' style={
        isLoading ? {
          display: 'none'
        } : {
          animation: 'fadeIn 1s linear'
        }
      }>
        <Suspense fallback={<Loader images={images} />} >
          <ClientNavbar images={images} location={location} />
          <Routes>
            <Route index element={<Home images={images} />} />
            <Route path="activities" element={<Activities images={images} />} />
            <Route path="crew" element={<Crew images={images} />} />


            <Route path="committees/marketing" element={<MarketingCommittee images={images} />} />
            <Route path="committees/events" element={<EventsCommittee images={images} />} />
            <Route path="committees/logistics" element={<LogisticsCommittee images={images} />} />
            <Route path="committees/human-resources" element={<HumanResourcesCommittee images={images} />} />
            <Route path="committees/public-relations" element={<PublicRelationsCommittee images={images} />} />
            <Route path="committees/media" element={<MediaCommittee images={images} />} />
            <Route path="committees/academic" element={<AcademicCommittee images={images} />} />

            {/* <Route path="sessions-application" element={<Application images={images} />} /> */}

            <Route path="*" element={<NotFound images={images} />} />
          </Routes>
          <FooterNew images={images} />
        </Suspense>
      </div>
    </>
  );
}

export default App;
