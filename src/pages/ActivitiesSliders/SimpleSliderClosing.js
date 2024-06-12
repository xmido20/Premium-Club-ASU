import React, { useEffect } from "react";
import Slider from "react-slick";
import $ from 'jquery';
import '../../css/slick.css';
import '../../css/slick-theme.css';
import '../../css/imgSize.css'

export default function SimpleSliderClosing({images}) {
    const settings = {
      dots: true,
      infinite: true,
      speed: 400,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      waitForAnimate: true,
      draggable: true,
      touchMove: true,
      swipe: true,
    };




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

    // Get the modal

    return (
            <>
                <div className="sliderDescription">
                    <div className="py-5 mobileHeader">
                        <h2 className="h2 text-dark" style={{fontWeight: 900}}>
                            Closing Day
                        </h2>
                    </div>
                    <div className="trips-description">
                        <p className="lead">
                            Closing day is a fun and exciting event where we announce the new student activity highboard and celebrate our accomplishments. We plan a variety of activities for students to participate in, such as games, a food and beverage spread, and a farewell ceremony for graduating students. We hope that our closing day event is a memorable experience for everyone involved.
                        </p>
                    </div>
                </div>
                <div className="slider">
                    <Slider {...settings} className="single-item">
                        <div className="openingPics">
                            <img src={images['closing (1).jpg']} className=" myImg img-fluid" />
                        </div>
                        <div className="openingPics">
                            <img src={images['closing (2).jpg']}  className=" myImg img-fluid" />
                        </div>
                        <div className="openingPics">
                            <img src={images['closing (3).jpg']}  className=" myImg img-fluid" />
                        </div>
                        <div className="openingPics">
                            <img src={images['closing (4).jpg']}  className=" myImg img-fluid" />
                        </div>
                        <div className="openingPics">
                            <img src={images['closing (5).jpg']}  className=" myImg img-fluid" />
                        </div>
                        <div className="openingPics">
                            <img src={images['closing (6).jpg']}  className=" myImg img-fluid" />
                        </div>
                        <div className="openingPics">
                            <img src={images['closing (7).jpg']}  className=" myImg img-fluid" />
                        </div>
                        <div className="openingPics">
                            <img src={images['closing (8).jpg']}  className=" myImg img-fluid" />
                        </div>
                        <div className="openingPics">
                            <img src={images['closing (8).jpg']}  className=" myImg img-fluid" />
                        </div>
                    </Slider>
                </div>
                
                <div id="myModal" className="modal">

                    <span className="close">&times;</span>

                    <img className="modal-content" id="img01" />

                    <div id="caption"></div>
                </div>
            </>
    );
  }