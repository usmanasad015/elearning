import React from 'react'
import Img1 from './Images/Group81.png'
import Img2 from './Images/Group79.png'
import fourPeople from './xdimages/fourPeopleImage.png'
import greenImage from './xdimages/green image.png'
import threeSidedRect from './xdimages/threeSidedRect.png'
import cardIcon from './xdimages/card_icon.png'
import footerGroup from './xdimages/footerGroup.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import customerBorder from './xdimages/customerBorder.png'
import customerImage from './xdimages/customerImage.png'
import News from './News'
import SlickSlider from './SlickSlider'



function Home() {
  return (
    <div>
      <div className="container row margin-home mobileImg">

        {/* Column 1 */}

        <div className="col-11 ">
          <div className="container  ">
            <img src={Img1} alt="Secondary " className='img-fluids' />
            <img src={Img2} alt="Student " className='img2' />


            <h1 className='first-heading'>
              LARGE EDUCATIONAL <br /> <p className='prog'> PROGRAMS </p>
            </h1>
            <div>
              <p className='first-para'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Ducimus quam nesciunt eveniet earum omnis at, ab <br /> obcaecati ut, dolorem modi itaque aperiam quo corporis <br /> nisi, temporibus alias ratione debitis eos voluptatibus <br />Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br /></p>
            </div>
            <button className='Btn1'>
              Lorem Ipsum
            </button>
            {/* 
          <br /> <br /> <br /> <br />
          <img src={fourPeople} alt="Four People Image" className='fourPeople ' /> */}

          </div>
          {/* 
          <div className="row container">

            <div className="col-8">
              <img src={fourPeople} alt="Four People Image" className='fourPeople ' />
            </div>
            <div className="col-4">
              <img src={greenImage} alt="Green Image" className='fourPeople ' />

            </div>
          </div> */}

        </div>

        {/* Column 2 -- Icons */}

        <div className="col-1 social-icons">
          <section>
            <div className="toRight">
              <a href="https://islootech.com/" className='navIcons'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />

                </svg>
              </a>
              &nbsp; &nbsp;

              <a href="https://islootech.com/" className='navIcons'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                </svg>
              </a>
              &nbsp; &nbsp;

              <a href="https://islootech.com/" className='navIcons'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                </svg>
              </a>
              &nbsp; &nbsp;

              <a href="https://islootech.com/" className='navIcons'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
              </a>

              &nbsp; &nbsp;


              <a href="https://islootech.com/" className='navIcons'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-youtube " viewBox="0 0 16 16">
                  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                </svg>
              </a>
              &nbsp; &nbsp;
            </div>


          </section>
        </div>
      </div>

      <div className="row container impHeight">

        {/* Four people Image */}

        <div className="col-8">
          <img src={fourPeople} alt="Four People " className='fourPeople ' />
        </div>

        {/* Vertical Green bar Image */}

        <div className="col-4 colHeight">
          <img src={greenImage} alt="Green " className='greenImage ' />


          <div className="  content circle circle-lg aboutColor">
            <h2 className='aboutCard'>About</h2>

            <div className='iconFont'>
              <FontAwesomeIcon icon="fa fa-chevron-circle-right" />
            </div>

            <p className='about1Para'>Lorem ipsum dolor sit amet consectetur adipis <br /> elit. Nesciunt, voluptatibus  consectetur adipis.</p>

            <div className='iconFont2'>
              <FontAwesomeIcon icon="fa fa-chevron-circle-right" />
            </div>

            <p className='about2Para'>Lorem ipsum dolor, sit amet consectetur adipisicing. <br /> Libero sed recusandae reiciendis impedit, asperiores <br /> quisquam eum quibusdam eligendi laboriosam aliq.</p>
            <button type='button' className='Btn1 aboutBtn'  >
              <p className='paraAbout'> Read More </p>
            </button>

          </div>

          <div className="services">
            <p>Services</p>
            <h2 className='serText'>What We Provide
              <br /> To You</h2>
          </div>

          <img src={threeSidedRect} alt="threeSidedRect" className='threeSidedRect' />




        </div>



      </div>

      {/*  All Six Card */}


      <div class="row row-cols-1 row-cols-md-3 row-col-3 g-4  sixCards ">


        {/* 1st Card */}
        <div class="col cardWidth">
          <div class="card shadow-lg cardShadow ">
            <span class="dot"></span>
            <img src={cardIcon} className="card-img-top cardIcon " alt="..." />

            <div class="card-body bodyCard">
              <h5 class="card-title  cardHead">Skilled Lectures</h5>
              <div className="borderInBtw"></div>
              <p class="card-text">There are many variations <span className='noShow'> ofs  </span> <br /> passage of lorem ipsum <br /> lorem ipsum </p>
            </div>
          </div>

          <br />
        </div>


        {/* 2nd Card */}

        <div class="col cardWidth">
          <div class="card shadow-lg cardShadow">
            <span class="dot"></span>
            <img src={cardIcon} className="card-img-top cardIcon " alt="..." />

            <div class="card-body bodyCard">
              <h5 class="card-title cardHead">Skilled Lectures</h5>
              <div className="borderInBtw"></div>
              <p class="card-text">There are many variations  <span className='noShow'> ofs  </span> <br /> passage of lorem ipsum <br /> lorem ipsum </p>
            </div>
          </div>
        </div>

        {/* 3rd Card */}

        <div class="col cardWidth">
          <div class="card shadow-lg cardShadow">
            <span class="dot"></span>
            <img src={cardIcon} className="card-img-top cardIcon " alt="..." />

            <div class="card-body bodyCard">
              <h5 class="card-title  cardHead">Skilled Lectures</h5>
              <div className="borderInBtw"></div>
              <p class="card-text">There are many variations <span className='noShow'> ofs  </span> <br /> passage of lorem ipsum <br /> lorem ipsum </p>
            </div>
          </div>
        </div>


        {/* 4th Card */}

        <div class="col cardWidth noShow">

          <br /> <br />
          <div class="card shadow-lg cardShadow">
            <span class="dot"></span>
            <img src={cardIcon} className="card-img-top cardIcon " alt="..." />

            <div class="card-body bodyCard">
              <h5 class="card-title ">Skilled Lectures</h5>
              <div className="borderInBtw"></div>
              <p class="card-text">There are many variations of <br /> passage of lorem ipsum <br /> lorem ipsum </p>
            </div>
          </div>
        </div>

        {/* 5th Card */}

        <div class="col cardWidth noShow">

          <br /> <br />
          <div class="card shadow-lg cardShadow ">
            <span class="dot"></span>
            <img src={cardIcon} className="card-img-top cardIcon " alt="..." />

            <div class="card-body bodyCard">
              <h5 class="card-title ">Skilled Lectures</h5>
              <div className="borderInBtw"></div>
              <p class="card-text">There are many variations of <br /> passage of lorem ipsum <br /> lorem ipsum </p>
            </div>
          </div>
        </div>

        {/*6th Card */}

        <div class="col cardWidth noShow">

          <br /> <br />
          <div class="card shadow-lg cardShadow">
            <span class="dot"></span>
            <img src={cardIcon} className="card-img-top cardIcon " alt="..." />

            <div class="card-body bodyCard">
              <h5 class="card-title ">Skilled Lectures</h5>
              <div className="borderInBtw"></div>
              <p class="card-text">There are many variations of <br /> passage of lorem ipsum <br /> lorem ipsum </p>
            </div>
          </div>
        </div>

      </div>



      {/* All Six Cards Ended */}

      <div className='cusSay' >
        <h2 className='customers'>What Our Customers Say</h2>
      </div>

      <div className=" row container customerRow alignVer ">
        <div className="col-6 customerRowMob cardAlign">
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
        <div className="col-6 secondBlueDiv cardAlign secondStudent">
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
      </div>

      {/* <SlickSlider/> */}

      <div className=''>
        <h2 className='footerLogo'>LOGO</h2>
      </div>



      {/* Footer */}

      <div className='mainFooter '>
        <div className="container">
          <br /> <br />
          <br />
          <div className="row forTab forMob" >
            {/* 1st Colomn */}

            <div className="col-lg-3 col-md-3 col-sm-3 col-3 firstCol">




              <div className='footerHeadings'>About Us</div>

              <p className='pText'>  Lorem, Voluptatum, maio  rem cumque &nbsp; &nbsp;  impedit distinctio voluptatibus &nbsp;  id veritatis qui quis mollitia delectus. Vitae debitis pariatur molestiae modi ipsam &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; ullam est voluptas? Tempore. mol delectus. Vitae debitis pariatur molestiae mollitia delectus. Vitae debitis pariatur &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;molestiae </p>

             
            </div>

            {/* 2nd Colomn */}
            <div className="col-lg-3 col-md-3 col-sm-3 col-3 firstCol ">


              <div className='footerHeadings'>Contact Us</div>

              <div className='footerContact'>
                1247 PLot No 39, 15th Phase <br /> LHB Colony RWP  <br />
                <br />

                1800-21202322 <br />
                +92-3-5555-5555  <br />

                <br />

                info@example.com <br />
                help@example.com
              </div>

            </div>

            {/* 3rd Colomn */}

            <div className="col-lg-3 col-md-3 col-sm-3 col-3 lastCol serCol">
              <div className="footerHeadings">
                <p className='dontShow'> Our </p> Services
              </div>

              <div className='footerServices'>
                <a href="#"> <div>Home</div></a><br />
                <a href="#"> <div> Success Stories</div> </a> <br />
                <a href="#"><div>Calender</div> </a> <br />
                <a href="#"><div>Blog</div> </a><br />
              </div>

            </div>

            {/* 4th Colomn */}

            <div className="col-lg-3 col-md-3 col-sm-3 col-3 midCol" >

              <div className="footerHeadings">
                Our Gallery
              </div>

              <div className="">
                <img className="footerGroupImg" src={footerGroup} alt="" />
              </div>

            </div>

          </div>


        </div>


      </div>

      <div className="row footerRow2 ">

        <span className='col-6 copyright'>
          Copyright &copy; 2022  Luxia. All Rights Reserved
        </span>

        <span className='col-6 footerPrivacy'>
          <a href="#">Privacy</a> &nbsp; &nbsp; &nbsp;
          <a href="#">Terms & Conditions</a> &nbsp; &nbsp; &nbsp;
          <a href="#">Legal</a> &nbsp;
        </span>


      </div>

    </div>
  )
}

export default Home


