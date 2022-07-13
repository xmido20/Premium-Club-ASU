import '../css/footer.css';
import React from 'react'



const Footer = ({images}) => {


    return ( 
        
        <footer>
            <div className="footerContainer container">
                <div className="footerContent">
                    <div className="contactUs">
                        <h2 className="font-weight-bold text-dark">
                            Contact Us
                        </h2>
                    </div>
                    <div className="socialMedia">
                        <div className="socialMediaCols">
                            <div className="socialMediaCol">
                                <a href="https://facebook.com/PremiumClubASU/" className="link" target="_blank">
                                    <i className="fa fa-facebook-square"></i>
                                    &nbsp;premiumclub.asu
                                </a>
                            </div>
                            <div className="socialMediaCol">
                                <a href="https://www.instagram.com/premium_club_asu/" className="link" target="_blank">
                                    <i className="fa fa-instagram"></i>
                                    &nbsp;premium_club_asu
                                </a>
                            </div>
                            <div className="socialMediaCol mail" style={{width:"max-content"}}>
                                <span href="" className="link">
                                    <i className="fa fa-envelope"></i>
                                    &nbsp;hb.premiumclub.asu@gmail.com
                                </span>
                            </div>
                        </div>
                        <div className="lastLogo">
                            <img src={images['premiumClubLogoText.png']} alt="" className="footerLogo" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;