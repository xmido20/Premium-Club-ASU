import '../css/homePage.css'
import Footer from './Footer';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import $ from 'jquery';
import ScrollHandle from '../js/Scroll';
import {Helmet} from "react-helmet";
import FirebaseActivation from '../js/FirebaseActivation';








const Home = ({images}) => {

    
    //FIREBASE
//     FirebaseActivation();
    //-------------------

    


    //SCROLLING NAVBAR
    ScrollHandle();
    //-----------


    //INTRO
    useEffect(() => {
        const intro = document.getElementById('intro');
        const site = document.getElementById('site');
        
        site.style.display = 'none';
        $(document).ready(function(){
            $(intro).fadeOut(2750);
            setTimeout(() => {
                $(intro).fadeOut();
                $(site).fadeIn("slow");
                
                // $("#identifier").fadeIn("slow");
                // intro.removeChild(this); 
            }
            , 2750)
          }); 
      }, []);
      //-----------

      
          
    return ( 
        
        <>   
            <div className="wrapper">
                <Helmet>
                    <meta property="og:title" content="Premium Club ASU" />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://www.premium-club-asu.org" />
                    <meta property="og:image" content={images["premiumClubLogoTextMouse.png"]} />
                    
                    <title> Premium Club ASU </title>

                    <meta charSet="UTF-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    <meta name="description" content="Premium Club is a Nonprofit Organization and one of the leading student activities in faculty of Commerce Ain shams University."/>
                    <meta name="keywords" content="premium club,premium, premium club asu, club, asu, بريميم, premium student activity, student activity, كلية تجارة"/>
                        
                </Helmet>
            </div>
                <div className="intro" id="intro">
                    <img src={images['intro1.gif']} style={{zIndex:"5"}} className="img-fluid" />
                </div>
            <div className="site" id="site">
            
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
                            <Link to="/appreciation" className="thanksWord font-weight-bold">
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
                                <Link className="nav-link active" aria-current="page" to="#">Home</Link>
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
                                    <Link className="nav-link" to="/appreciation">
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
                
                    <section className="identifier" id="identifier" >
                        <div className="container">
                            <div className="row">
                                <div className="col"></div>
                                <div className="col-sm-6">
                                    <div className="noGuts" id="noGuts">
                                        <div>
                                            <img src={ images['premiumClubLogo w.png'] } alt="Premium Club" className="mainLogo" />
                                        </div>
                                        <h1 className="premiumClubWord" id="premiumClubWord">
                                            PREMIUM CLUB<br />
                                        </h1>
                                    </div>
                                </div>
                                <div className="col"></div>
                            </div>
                        </div>
                    </section>
                
                    
                    <section className="whoArePremium" id="whatIsPremium">
                        <div className="container">
                            <div className="row py-5" >
                                <div className="row py-5">
                                    <h1 className="h1 text-dark" style={{fontWeight: '900'}}>
                                        What is Premium
                                    </h1>
                                </div>
                                <div className="row pb-5">
                                    <p className="allDescription">
                                        Premium Club is a Nonprofit Organization and one of the leading student activities in faculty of Commerce Ain shams University, premium Club was established in 2018/2019... With leading of Dr. Wael Saad, we are interested in how to change the boring routine of the college studying in a new dynamic way, with a challenging atmosphere, full of practical work  Which enables the club members to gather experiences and enhance their personal skills, possess a whole new spirit full of enthusiasm, and give inspiration to his/her mind to work which increases creativity and mental abilities.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    

                    <section className="mission">
                        <div className="container text-light">
                            <div className="row py-5" >
                                <div className="row py-5">
                                    <h1 className="h1 " style={{fontWeight: '900'}}>
                                        Our Mission
                                    </h1>
                                </div>
                                <div className="row pb-5">
                                    <p className="allDescription">
                                        Helping our members develop their mindsets  ,  gain experience and prepare them for the life after graduation in the difference field’s by our academic sessions , workshops and free courses and applying what they have learned in real life.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    

                    <section className="vision">
                        <div className="container">
                            <div className="row py-5" >
                                <div className="row py-5">
                                    <h1 className="h1 text-dark" style={{fontWeight: 900}}>
                                        Our Vision
                                    </h1>
                                </div>
                                <div className="row pb-5">
                                    <p className="allDescription">
                                        Being one of the best clubs in the faculty if commerce and let everyone in the whole universities know who is premium club!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    


                    <section className="goals">
                        <div className="container text-light">
                            <div className="row py-5" >
                                <div className="row py-5">
                                    <h1 className="h1" style={{fontWeight: 900}}>
                                        Our Goals
                                    </h1>
                                </div>
                                <div className="row pb-5">
                                    <p className="allDescription">
                                        Increase Student Leadership Opportunities, Provide new ways for a student to be developed and experienced in leadership capacities.
                                        <br /> And create new ideas for campus programming, organizational development, and problem-solving.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section className="mainEvents">
                        <div className="container">
                            <div className="row py-5" >
                                <div className="row py-5">
                                    <h1 className="h1 text-dark text-center" style={{fontWeight: 900}}>
                                        Main Events
                                    </h1>
                                </div>
                                <div className="row pb-5">
                                    {/* <HomeCarousel /> */}
                                    <Carousel fade id='carouselExampleCrossfade'>
                                        <Carousel.Item>
                                            <img
                                            className="d-block w-100"
                                            src={images['conferencePhoto.jpg']}
                                            alt="First slide"
                                            />
                                            <Carousel.Caption>
                                                <h3>CONFERENCE DAY</h3>
                                                <p>2021-2022</p>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                            className="d-block w-100"
                                            src={images['opening2021.jpg']}
                                            alt="Second slide"
                                            />

                                            <Carousel.Caption>
                                                <h3>OPENING DAY</h3>
                                                <p>2021-2022</p>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                            className="d-block w-100"
                                            src={images['orientation2021.jpg']}
                                            alt="Third slide"
                                            />

                                            <Carousel.Caption>
                                                <h3>ORIENTATION DAY</h3>
                                                <p>2021-2022</p>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                            className="d-block w-100"
                                            src={images['alex2021.jpg']}
                                            alt="Third slide"
                                            />

                                            <Carousel.Caption>
                                                <h3>ALEXANDRIA TRIP</h3>
                                                <p>2021-2022</p>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                    </Carousel>
                                </div>
                            </div>
                        </div>
                    </section>
                
                
                    <section className="noGutsFooter">
                        <div className="container">
                            <div className="row">
                                <div className="col"></div>
                                <div className="col-sm-6">
                                    <div className="noGutsFooter" id="noGuts">
                                        <div>
                                            <p className="lead text-center text-light font-weight-bold">And always remember</p>
                                        </div>
                                        <h1 className="noGutsWord" id="noGutsWord">
                                            NO GUTS NO GLORY
                                        </h1>
                                    </div>
                                </div>
                                <div className="col"></div>
                            </div>
                        </div>
                    </section>


                    <Footer images={images}/>
            </div>
        </>
     );
}
 
export default Home;
