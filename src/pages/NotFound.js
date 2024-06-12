import React from 'react';
import { Link } from 'react-router-dom';
import '../css/404.css';
import {Helmet} from "react-helmet";
import FirebaseActivation from '../js/FirebaseActivation';
import styled from 'styled-components';


const Section = styled.section`
    height: 100vh;
    position: relative;
`
const Wrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`


const NotFound = ({images}) => {
    //FIREBASE
    FirebaseActivation();

    return ( 
        <>
            <div className="wrapper">
                <Helmet>
                    <meta property="og:title" content="Premium Club ASU" />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://www.premium-club-asu.org" />
                    <meta property="og:image" content={images["premiumClubLogoTextMouse.png"]} />
                    
                    <title> Not Found </title>

                    <meta charSet="UTF-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    <meta name="description" content="Wrong page for premium club!!"/>
                    <meta name="keywords" content="premium club,premium, premium club asu, club, asu, بريميم, premium student activity, student activity, كلية تجارة"/>
                        
                </Helmet>
            </div>
            <Section>
                <Wrapper>
                    <div className="container">
                        <div className="errContent">
                            <div className="errRow">
                                <div className="errLogo">
                                    <img src={images["premiumClubLogo w.png"]} className="img-fluid"/>
                                </div>
                                <div className="errText">
                                    <div className="text-white">
                                        <h1 className="font-weight-bold">Not Found</h1>
                                        <h3 className="mt-3">
                                            You must have entered a wrong url.<br/>
                                            if you're searching for us, you can find us here.
                                        </h3>
                                        <Link to="/">
                                            <button type="button" className="btn btn-lg mt-3 homebtn">Home page</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Wrapper>
            </Section>
        </>
     );
}
 
export default NotFound;