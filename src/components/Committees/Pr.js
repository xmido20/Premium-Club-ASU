import Footer from "../Footer";
import React, {useEffect} from 'react';
import '../../css/pr.css';
import { Link } from 'react-router-dom';
import ScrollHandle from "../../js/Scroll";
import $ from 'jquery';
import {Helmet} from "react-helmet";
import FirebaseActivation from '../js/FirebaseActivation';





const PublicRelationsCommittee = ({images}) => {



    //FIREBASE
    FirebaseActivation();

    //SCROLLING NAVBAR
    ScrollHandle();
    //-----------


    useEffect(() => {
        const modal = document.getElementById("myModal");
    
        // Get the image and insert it inside the modal - use its "alt" text as a caption
        const img = document.querySelectorAll(".myImg");
        const modalImg = document.getElementById("img01");
        const captionText = document.getElementById("caption");
    
    
    
        $(document).ready(function(){
    
                $(document).on("click", ".myImg", function()
                {
                    modalImg.src =  this.src;
                    modal.style.display = "block";
                    captionText.innerHTML = this.alt;
                    console.log($(this).attr("src"));
                    //for changing it
                });
            
            });
    
            // Get the <span> element that closes the modal
            const span = document.getElementsByClassName("close")[0];
    
            // When the user clicks on <span> (x), close the modal
            span.onclick = function() {
                modal.style.display = "none";
            } 
    }, []);

    return ( 
        <>
            <div className="wrapper">
                <Helmet>
                    <meta property="og:title" content="Public Relations Committee" />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://www.premium-club-asu.org/committees/public-relations" />
                    <meta property="og:image" content={images["premiumClubLogoTextMouse.png"]} />
                    
                    <title> Public Relations Committee </title>

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
                                    <li><Link className="dropdown-item committeeSelector activeCommittee " to="#">PR Committee</Link></li>
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


            <section className="pr-description">
                <div className="container">
                    <div className="row py-5  text-light" >
                        <div className="row py-5">
                            <h1 className="h1" style={{fontWeight: 900,fontSize: '50px'}}>
                                Public Relations Committee
                            </h1>
                        </div>
                        <div className="row py-5">
                            <h2 className="h2" style={{fontWeight: 900}}>
                                What is Public Relations
                            </h2>
                        </div>
                        <div className="row pb-5">

                            <p className=" allDescription">
                                &nbsp;Public relations is managing and disseminating information from an individual or an organization (such as a business, government agency, or a nonprofit organization) to another.
                                &nbsp;Public relations professionals shape an organization's image. They build the brand, spread the organization's message and minimize the effect of negative publicity. At a small company, the PR person may have to handle all the roles.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="prRole  bg-white">
                <div className="container">
                    <div className="row pb-5  text-dark" >
                        <div className="row py-5">
                            <h2 className="h2" style={{fontWeight: 900}}>
                                Public Relations's role in Premium
                            </h2>
                        </div>
                        <div className="row pb-5">
                            <p className="allDescription">
                                <span style={{fontWeight: 'bold'}}>Internal role</span><br/>
                                Dealing with newcomers and guiding them to apply to our organization.
                                <br/>We are in charge of taking permissions from the faculty administration before getting deals for any event.
                                <br/><br/> <span style={{fontWeight: 'bold'}}>External role</span><br/>
                                Contacting companies and offices and try getting best offers for our upcoming events.
                                <br/>We are in charge of contacting famous public figures.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pr-description">
                <div className="container">
                    <div className="row pb-5  text-light" >
                        <div className="row py-5">
                            <h1 className="h2" style={{fontWeight: 900}}>
                                Skills obtained
                            </h1>
                        </div>
                        <div className="row pb-5">
                            <ul className="allDescription">
                                Your soft skills will be improved by joining us,<br/> contacting companies and reaching the suitable deal for your budget and for the event.
                                <br/>You will meet new people and build a lot of relations.
                                <br/>It'll be your responsibilty to eventually talk as an organization, not just an individual.
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="prTeam">
                <div className="container">
                    <div className="align-items-center">
                        <div className="py-5">
                            <h1 className="h1 text-dark text-center" style={{fontWeight: 900}}>
                                Public Relations Team (2021-2022)
                            </h1>
                        </div>
                        <div className="prPicDiv">
                            <div className="prPic">
                                <img src={images["prTeam.jpeg"]} alt="" className="myImg img-fluid"/>
                            </div>
                            <div id="myModal" className="modal">

                                <span className="close">&times;</span>
                            
                                <img className="modal-content" id="img01"/>
                            
                                <div id="caption"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer images={images}/>
        </>
     );
}
 
export default PublicRelationsCommittee;