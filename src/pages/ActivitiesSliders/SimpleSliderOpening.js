import React, { useEffect } from "react";
import Slider from "react-slick";
import $ from 'jquery';
import '../../css/slick.css';
import '../../css/slick-theme.css';
import '../../css/imgSize.css'

export default function SimpleSliderOpening({images}) {
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
                <div className="slider">
                    <Slider {...settings} className="single-item">
                        <div className="openingPics">
                            <img src={images['opening (1).jpg']} className=" myImg img-fluid" />
                        </div>
                        <div className="openingPics">
                            <img src={images['opening (2).jpg']}  className=" myImg img-fluid" />
                        </div>
                        <div className="openingPics">
                            <img src={images['opening (3).jpg']}  className=" myImg img-fluid" />
                        </div>
                        <div className="openingPics">
                            <img src={images['opening (4).jpg']}  className=" myImg img-fluid" />
                        </div>
                        <div className="openingPics">
                            <img src={images['opening (5).jpg']}  className=" myImg img-fluid" />
                        </div>
                        <div className="openingPics">
                            <img src={images['opening (6).jpg']}  className=" myImg img-fluid" />
                        </div>
                        <div className="openingPics">
                            <img src={images['opening (7).jpg']}  className=" myImg img-fluid" />
                        </div>
                        <div className="openingPics">
                            <img src={images['opening (8).jpg']}  className=" myImg img-fluid" />
                        </div>
                    </Slider>
                </div>
                <div className="sliderDescription">
                    <div className="py-5 mobileHeader">
                        <h2 className="h2 text-dark" style={{ fontWeight: 900 }}>
                            Opening Day
                        </h2>
                    </div>
                    <div className="opening-description">
                        <p className="lead">
                            Opening day is when we start presenting the club for the students and when start making interviews for the applicants. And it is considered as a launch for the year.
                        </p>
                    </div>
                </div>
                <div id="myModal" className="modal">

                    <span className="close">&times;</span>

                    <img className="modal-content" id="img01" />

                    <div id="caption"></div>
                </div>
            </>
    );
  }