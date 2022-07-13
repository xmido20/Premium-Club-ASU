import Footer from "./Footer";
import React from 'react';
import '../css/appreciation.css';
import { Link } from 'react-router-dom';
import ScrollHandle from "../js/Scroll";

import {Helmet} from "react-helmet";
import FirebaseActivation from '../js/FirebaseActivation';




const Appreciation = ({images}) => {

    

    FirebaseActivation();
                
                  
    //SCROLLING NAVBAR
    ScrollHandle();
    //-----------

    return ( 
        <>

            <div className="wrapper">
                <Helmet>
                    <meta property="og:title" content="Special Appreciation" />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://www.premium-club-asu.org/appreciation" />
                    <meta property="og:image" content={images["premiumClubLogoTextMouse.png"]} />
                    
                    <title> Special Appreciation </title>

                    <meta charSet="UTF-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    <meta name="description" content="Premium Club is a Nonprofit Organization and one of the leading student activities in faculty of Commerce Ain shams University."/>
                    <meta name="keywords" content="premium club,premium, premium club asu, club, asu, بريميم, premium student activity, student activity, كلية تجارة"/>
                </Helmet>
            </div>
            <nav className="navbar navbar-expand-lg navbar-dark pt-3 position-fixed w-100" id="navbar" 
                
                style={
                    document.body.scrollTop > 500 || document.documentElement.scrollTop > 500 ? {
                        backgroundImage : "none",
                        backgroundColor : "#262b2f",
                        transition : "0.5s",
                        boxShadow : "0px 0px 20px black"
                    }:{
                        backgroundImage : "linear-gradient(to bottom, rgba(0,0,0) ,rgba(0,0,0,0.9),rgba(0,0,0,0.7),rgba(0,0,0,0.5),  transparent)",
                        backgroundColor : "unset",
                        transition : "0.5s",
                        boxShadow : "none"
                    }
            }>
                <div className="specialThanks">
                    <div className="thanksArrowDiv">
                        <Link to="#" className="thanksWord font-weight-bold active">
                            <p style={{
                                fontFamily : 'Gill Sans, Gill Sans MT, Calibri,Trebuchet MS, sans-serif'
                                }}>
                                <i className="left arrow"></i>
                                Special Appreciation
                            </p>
                        </Link>
                    </div>
                </div>
                <div className="container">
                    <img src={images['premiumClubLogo w.png']} alt="premiumClubLogo" className="navBarLogo" id="premiumLogo" />
                    <button className="navbar-toggler ml-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0  ml-auto mr-5">
                            <li className="nav-item">
                            <Link className="nav-link " aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/activities">Activities</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Our Committees
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item committeeSelector" to="/committees/marketing">Marketing Committee</Link></li>
                                    <li><hr className="dropdown-divider w-75 mx-auto" /></li>
                                    <li><Link className="dropdown-item committeeSelector" to="/committees/events">Events Committee</Link></li>
                                    <li><hr className="dropdown-divider w-75 mx-auto" /></li>
                                    <li><Link className="dropdown-item committeeSelector " to="/committees/human-resources">HR Committee</Link></li>
                                    <li><hr className="dropdown-divider w-75 mx-auto" /></li>
                                    <li><Link className="dropdown-item committeeSelector " to="/committees/public-relations">PR Committee</Link></li>
                                    <li><hr className="dropdown-divider w-75 mx-auto" /></li>
                                    <li><Link className="dropdown-item committeeSelector " to="/committees/logistics">Logistics Committee</Link></li>
                                    <li><hr className="dropdown-divider w-75 mx-auto" /></li>
                                    <li><Link className="dropdown-item committeeSelector " to="/committees/media">Media Committee</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item nav-thanks" >
                                <Link className="nav-link active" to="#">
                                    <p style={{
                                        width: "100%",
                                        flexWrap: "nowrap"
                                        }}>
                                        <i className="left arrow"></i>
                                        Special Appreciation
                                    </p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


            <section className="highBoard  text-light text-center">
                <div className="container">
                    <div className="row py-5" >
                        <div className="row py-5">
                            <h1 className="h1" style={{fontWeight: 900}}>
                                High Board (2021-2022)
                            </h1>
                        </div>
                        <div className="highBoardDivs text-dark">
                            <div className="highBoardDiv">
                                <div className="highBoardID">
                                    <div className="highBoardPic">
                                        <img src={images["highboard2.jpg"]} alt="Mohamed Ayman" className="highBoardImg"/>
                                    </div>
                                    <div className="highBoardName">
                                        <h3 className="highBoardName">
                                            Mohamed Ayman
                                        </h3>
                                        <p className=" font-weight-bold position">"Vice President"</p>
                                    </div>
                                </div>
                            </div>
                            <div className="highBoardDiv">
                                <div className="highBoardID">
                                    <div className="highBoardPic">
                                        <img src={images["highboard1.jpg"]} alt="Mahmoud Badr" className="highBoardImg"/>
                                    </div>
                                    <div className="highBoardName">
                                        <h3 className="highBoardName">
                                            Mahmoud Badr
                                        </h3>
                                        <p className=" font-weight-bold position">"President"</p>
                                    </div>
                                </div>
                            </div>
                            <div className="highBoardDiv">
                                <div className="highBoardID">
                                    <div className="highBoardPic">
                                        <img src={images["highboard3.jpg"]} alt="Ahmed Saad" className="highBoardImg"/>
                                    </div>
                                    <div className="highBoardName">
                                        <h3 className="highBoardName">
                                            Ahmed Saad
                                        </h3>
                                        <p className=" font-weight-bold position">"Treasure"</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            

            <section className="media text-center">
                <div className="container">
                    <div className="row py-5" >
                        <div className="row py-5   text-light">
                            <h1 className="mediaHeader h1 text-center" style={{fontWeight: 900}}>
                                Media Board
                            </h1>
                        </div>
                        <div className="mediaDivs text-dark">
                            <div className="mediaDiv">
                                <div className="mediaID">
                                    <div className="mediaPic">
                                        <img src={images["media3.jpeg"]} alt="Adham Hesham" className="mediaImg"/>
                                    </div>
                                    <div className="mediaName">
                                        <h3 className="mediaName">
                                            Adham Hesham
                                        </h3>
                                        <p className=" font-weight-bold position">"Website Designs"</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mediaDiv">
                                <div className="mediaID">
                                    <div className="mediaPic">
                                        <img src={images["media2.jpeg"]} alt="Ahmed Ashraf" className="mediaImg"/>
                                    </div>
                                    <div className="mediaName">
                                        <h3 className="mediaName">
                                            Ahmed Ashraf
                                        </h3>
                                        <p className=" font-weight-bold position">"Website Animations"</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mediaDiv">
                                <div className="mediaID">
                                    <div className="mediaPic">
                                        <img src={images["media1.jpeg"]} alt="Mohamed Abdelrahman" className="mediaImg"/>
                                    </div>
                                    <div className="mediaName">
                                        <h3 className="mediaName dev">
                                            Mohamed Abdelrahman
                                        </h3>
                                        <p className=" font-weight-bold position">"Website Developer"</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="founders text-center">
                <div className="container">
                    <div className="row py-5" >
                        <div className="row py-5   text-light">
                            <h1 className="premiumFounders h1 text-center" style={{fontWeight: 900}}>
                                Premium Founders
                            </h1>
                        </div>
                        <div className="foundersDivs text-dark">
                            <div className="founderDiv">
                                <div className="founderID">
                                    <div className="founderPic">
                                        <img src={images["founder2.png"]} alt="Mahmoud Hosny" className="mediaImg"/>
                                    </div>
                                    <div className="founderName">
                                        <h3 className="founderName">
                                            Mahmoud Hosny
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <div className="founderDiv">
                                <div className="founderID">
                                    <div className="founderPic">
                                        <img src={images["founder1.jpg"]} alt="Mahmoud Rabee" className="mediaImg"/>
                                    </div>
                                    <div className="founderName">
                                        <h3 className="founderName">
                                            Mahmoud Rabee
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <div className="founderDiv">
                                <div className="founderID">
                                    <div className="founderPic">
                                        <img src={images["founder3.jpg"]} alt="Ahmed Zakaria" className="founderImg"/>
                                    </div>
                                    <div className="founderName">
                                        <h3 className="founderName">
                                            Ahmed Zakaria
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer images={images}/>
        </>
     );
}
 
export default Appreciation;