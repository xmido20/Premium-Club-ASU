import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

// STYLES
const Nav = styled.nav`
    position: fixed;
    background: brightness(50%);
    min-height: 120px;
    z-index: 4;
    padding: 0 9%;
`
const ClientNavbar = ({ images }) => {

    const [scrollPosition, setScrollPosition] = useState(0);
    const [visibleLogo,setVisibleLogo] = useState(false)
    const [navbarGradient,setNavbarGradient] = useState('linear-gradient(to bottom, rgba(0,0,0) ,rgba(0,0,0,0.9),rgba(0,0,0,0.7),rgba(0,0,0,0.5),rgba(0,0,0,0.3) 90%,  transparent 100%)')
    const [navbarBackground, setNavbarBackground] = useState("unset");

    const [home, setHome] = useState(true)
    const [activities, setActivities] = useState(false)
    const [crew, setCrew] = useState(false)
    const [committees, setCommittees] = useState(false)
    const [application, setApplication] = useState(false)

    const [media, setMedia] = useState(false)
    const [marketing, setMarketing] = useState(false)
    const [hr, setHr] = useState(false)
    const [pr, setPr] = useState(false)
    const [ac, setAc] = useState(false)
    const [logistics, setLogistics] = useState(false)
    const [events, setEvents] = useState(false)

    const location = useLocation()

    useEffect(() => {
        if (location.pathname === '/') {
            setHome(true)
            setActivities(false)
            setCrew(false)
            setCommittees(false)
            setApplication(false)
        } else if (location.pathname === '/activities') {
            setActivities(true)
            setHome(false)
            setCrew(false)
            setCommittees(false)
            setApplication(false)
        } else if (location.pathname === ('/crew')) {
            setCrew(true)
            setHome(false)
            setActivities(false)
            setCommittees(false)
            setApplication(false)
        } else if (location.pathname.includes('/committees')) {
            setCommittees(true)
            setHome(false)
            setActivities(false)
            setCrew(false)
            setApplication(false)

            if (location.pathname === ('/committees/media')) {
                setMedia(true)
                setMarketing(false)
                setAc(false)
                setEvents(false)
                setLogistics(false)
                setPr(false)
                setHr(false)
            } else if (location.pathname === ('/committees/marketing')) {
                setMarketing(true)
                setMedia(false)
                setAc(false)
                setEvents(false)
                setLogistics(false)
                setPr(false)
                setHr(false)
            } else if (location.pathname === ('/committees/academic')) {
                setAc(true)
                setMarketing(false)
                setMedia(false)
                setEvents(false)
                setLogistics(false)
                setPr(false)
                setHr(false)
            } else if (location.pathname === ('/committees/human-resources')) {
                setHr(true)
                setMarketing(false)
                setMedia(false)
                setAc(false)
                setEvents(false)
                setLogistics(false)
                setPr(false)
            } else if (location.pathname === ('/committees/public-relations')) {
                setPr(true)
                setMarketing(false)
                setMedia(false)
                setAc(false)
                setEvents(false)
                setLogistics(false)
                setHr(false)
            } else if (location.pathname === ('/committees/logistics')) {
                setLogistics(true)
                setMarketing(false)
                setMedia(false)
                setAc(false)
                setEvents(false)
                setPr(false)
                setHr(false)
            } else if (location.pathname === ('/committees/events')) {
                setEvents(true)
                setMarketing(false)
                setMedia(false)
                setAc(false)
                setLogistics(false)
                setPr(false)
                setHr(false)
            }

        } else if (location.pathname === ('/login')) {
            setHome(false)
            setActivities(false)
            setCrew(false)
            setCommittees(false)
            setApplication(false)
        } else if (location.pathname === ('/sessions-application')) {
            setHome(false)
            setActivities(false)
            setCrew(false)
            setCommittees(false)
            setApplication(true)
        }

    }, [location])

    useEffect(() => {
        const navbarToggler = document.getElementById('toggler-button');
        const navbarCollapse = document.getElementById('navbarSupportedContent');
        navbarCollapse.classList.remove('show');
        navbarToggler.setAttribute('aria-expanded', 'false');
    }, [location])

    useEffect(()=> {
        if (scrollPosition > 50 || location.pathname !== '/') {
            setVisibleLogo(true)
        } else {
            setVisibleLogo(false)
        }
    },[location, scrollPosition])
    



    const handleScroll = () => {
        const currentScrollPosition = window.pageYOffset;
        if (currentScrollPosition > 50) {
            setNavbarBackground("rgba(0, 0, 0, 0.99)");
            setNavbarGradient('unset')
        } else {
            setNavbarBackground("unset");
            setNavbarGradient('linear-gradient(to bottom, rgba(0,0,0) ,rgba(0,0,0,0.9),rgba(0,0,0,0.7),rgba(0,0,0,0.5),  transparent)')
        }
        setScrollPosition(currentScrollPosition);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <Nav style={{backgroundColor: navbarBackground, backgroundImage: navbarGradient}} className="navbar navbar-expand-lg navbar-dark pt-3  position-fixed w-100" id="navbar" >

                <div className="container">
                    <div className="specialThanks">
                        <div className="thanksArrowDiv">
                            <Link to="/crew" className={`thanksWord font-weight-bold`}>
                                <p style={{ fontFamily: 'Gill Sans, Gill Sans MT, Calibri,Trebuchet MS, sans-serif', color: crew ? '#FFF' : 'rgba(255, 255, 255, 0.55)' }}>
                                    <i className="left arrow"></i>
                                    Premium Crew
                                </p>
                            </Link>
                        </div>
                    </div>
                    <Link to='/'>
                        <img src={images['premiumClubLogo w.png']} alt="premiumClubLogo" className="navBarLogo" id="premiumLogo" style={{opacity:visibleLogo ? 1 : 0}} />
                    </Link>
                    <button id='toggler-button' className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0  ml-auto">
                            <li className="nav-item">
                                <Link className={`nav-link ${home ? 'active' : ''}`} to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${activities ? 'active' : ''}`} to="/activities">Activities</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className={`nav-link dropdown-toggle ${committees && 'active'}`} to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Our Committees
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className={`dropdown-item committeeSelector ${marketing && 'activeCommittee'}`} to="/committees/marketing">Marketing Committee</Link></li>
                                    <li><hr className="dropdown-divider w-75 mx-auto" /></li>
                                    <li><Link className={`dropdown-item committeeSelector ${events && 'activeCommittee'}`} to="/committees/events">Events Committee</Link></li>
                                    <li><hr className="dropdown-divider w-75 mx-auto" /></li>
                                    <li><Link className={`dropdown-item committeeSelector ${hr && 'activeCommittee'}`} to="/committees/human-resources">HR Committee</Link></li>
                                    <li><hr className="dropdown-divider w-75 mx-auto" /></li>
                                    <li><Link className={`dropdown-item committeeSelector ${pr && 'activeCommittee'}`} to="/committees/public-relations">PR Committee</Link></li>
                                    <li><hr className="dropdown-divider w-75 mx-auto" /></li>
                                    <li><Link className={`dropdown-item committeeSelector ${logistics && 'activeCommittee'}`} to="/committees/logistics">Logistics Committee</Link></li>
                                    <li><hr className="dropdown-divider w-75 mx-auto" /></li>
                                    <li><Link className={`dropdown-item committeeSelector ${media && 'activeCommittee'}`} to="/committees/media">Media Committee</Link></li>
                                    <li><hr className="dropdown-divider w-75 mx-auto" /></li>
                                    <li><Link className={`dropdown-item committeeSelector ${ac && 'activeCommittee'}`} to="/committees/academic">Academic Committee</Link></li>
                                </ul>
                            </li>
                            {/* <li className="nav-item">
                                <Link className={`nav-link ${application ? 'active' : ''}`} to="/sessions-application">Apply for sessions</Link>
                            </li> */}
                            <li className="nav-item nav-thanks" >
                                <Link className={`nav-link ${crew && 'active'}`} to="/crew">
                                    <p style={{
                                        width: "fit-content",
                                        flexWrap: "nowrap"
                                    }}>
                                        <i className="left arrow"></i>
                                        Premium Crew
                                    </p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </Nav>
        </>
    )
}

export default ClientNavbar;
