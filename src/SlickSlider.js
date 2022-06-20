import React, { Component } from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import customerBorder from './xdimages/customerBorder.png'
import customerImage from './xdimages/customerImage.png'

export default class SlickSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div>
                <h2> Single Item</h2>
                <Slider {...settings}>
                        <div className="col-6">
                            <div className="blueDiv">
                                <h5 className='CusHeading'>Alexandra</h5>
                                <div className="starIcon">
                                    <FontAwesomeIcon icon="fas fa-star" />

                                    <FontAwesomeIcon icon="fas fa-star" />
                                    <FontAwesomeIcon icon="fas fa-star" />
                                    <FontAwesomeIcon icon="fas fa-star" />
                                    <FontAwesomeIcon icon="fas fa-star" />
                                    <div className='customerPara'>
                                        <p>
                                            There are many variations of I am done <br /> with the design lorem ipsum <br /> passages of lorem ipsum <br /> lorem ipsum
                                        </p>
                                    </div>
                                </div>
                                <img className='customerBorder' src={customerBorder} alt="" />
                            </div>

                            <span class="dot2"> <div className="">
                                <img className='customerImg' src={customerImage} alt="" />
                            </div></span>





                        </div>
                        <div className="col-6 secondBlueDiv">
                            <div className="blueDiv">
                                <h5 className='CusHeading'>Alexandra</h5>
                                <div className="starIcon">
                                    <FontAwesomeIcon icon="fas fa-star" />
                                    <FontAwesomeIcon icon="fas fa-star" />
                                    <FontAwesomeIcon icon="fas fa-star" />
                                    <FontAwesomeIcon icon="fas fa-star" />
                                    <FontAwesomeIcon icon="fas fa-star" />
                                    <div className='customerPara'>
                                        <p>
                                            There are many variations of I am done <br /> with the design lorem ipsum <br /> passages of lorem ipsum <br /> lorem ipsum
                                        </p>
                                    </div>

                                </div>
                                <img className='customerBorder' src={customerBorder} alt="" />

                            </div>
                            <span class="dot2">
                                <img className='customerImg' src={customerImage} alt="" />
                            </span>

                        </div>
                  
                </Slider>
            </div>
        );
    }
}