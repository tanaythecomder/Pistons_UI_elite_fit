import React, { useReducer, useRef } from 'react'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'

import { useEffect } from 'react';
import { useState } from 'react';
import { Button } from '../components/homepagecomponents/Button';
// import axios from 'axios';

const initialCondition = {};

function Reducer(state, action) {
    switch (action.type) {
        case 'HOVER_ENTER':
            return { ...state, [action.id]: false };
        case 'HOVER_LEAVE':
            return { ...state, [action.id]: true };
        default:
            return state;
    }
}

const Home = () => {
    const [hoveredTestimonial, dispatch] = useReducer(Reducer, initialCondition);

    const handleMouseEnter = (id) => {
        dispatch({ type: 'HOVER_ENTER', id });
    };

    const handleMouseLeave = (id) => {

        dispatch({ type: 'HOVER_LEAVE', id });
    };

    const aboutSectionRef = useRef(null);
    const scrollToAbout = () => {
        aboutSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const carousel_photo = ["./carouselphotos/Frame16.jpg", "./carouselphotos/Frame18.jpg",
        "./carouselphotos/Frame19.jpg", "./carouselphotos/Frame20.jpg"]
    const [data, setData] = useState([])
    useEffect(() => {
        

        fetch('http://localhost:5000/api/testimonials') 
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(data.testimonials)
            })
            .catch(error => {
                console.error(error);
            });

    }, []);


    return (
        <Layout>
            <Navbar aboutSectionRef={aboutSectionRef} scrollToAbout={scrollToAbout} />
            <div className="container-fluid">

                <div className="row ">
                    
                    <div className="row homecontainer p-0 m-0">
                        <div className=" col-md-6 col-12 p-0 position-relative">
                            <img src="./homepages/11.jpg" className="img-fluid" style={{ objectFit: 'cover', width: '100%', height: '100%' }} alt="Image 1" />
                            <div className='align-items-center justify-content-center d-flex flex-column  text-white p-4' style={{ position: "absolute", top: "0", width: "100%", height: "100%" }}>
                                <div className='oxygenfont' style={{ transform: "translateX(-10px) rotate(1deg)", marginBottom: "13%", fontSize: "200%", marginTop: "45%" }}>
                                    <div >
                                        <span className="M">M</span>
                                        <span className="A">A</span>
                                        <span className="D">D</span>
                                        <span className="E">E</span>
                                        <span className="F">F</span>
                                        <span className="O_1">O</span>
                                        <span className="R">R</span>
                                        <span className="Y">Y</span>
                                        <span className="O_2">O</span>
                                        <span className="U">U</span>
                                    </div>
                                </div>
                                <div class="pridifont " style={{ letterSpacing: "2.3px", marginBottom: "2%", fontSize: "130%", marginTop: "" }}>
                                    PISTONS.<br />

                                </div>

                            </div>
                        </div>
                        <div className=" col-md-6 col-12 p-0  position-relative">
                            <img src="./homepages/12.png" className="img-fluid" style={{ objectFit: 'cover', width: '100%', height: '100%' }} alt="Image 2" />
                            <div className='align-items-center justify-content-center d-flex flex-column  text-white p-4' style={{ position: "absolute", bottom: "0", width: "100%", height: "100%" }}>

                                <div class="oxygenfont" style={{ letterSpacing: "2.3px", marginBottom: "2%", fontSize: "120%", marginTop: "55%" }}>
                                    YOU WERE MADE TO<br />
                                    &nbsp; MAKE AN IMPACT.
                                </div>


                                <div className='oxygenfont ' style={{
                                    marginBottom: "8%"
                                }}>
                                    <button className="searchbtn_bl fw-bold" style={{
                                        fontSize: "87%",
                                    }} type="submit">SHOP PENS</button>
                                </div>



                            </div>
                        </div>
                    </div>

                    <div className="row homecontainer  p-0 m-0">
                        <div className=" col-md-6 col-12 p-0 position-relative">
                            <img src="./homepages/21.png" className="img-fluid" style={{ objectFit: 'cover', width: '100%', height: '100%' }} alt="Image 3" />
                            <div className='align-items-center justify-content-center d-flex flex-column  text-white p-4' style={{ position: "absolute", bottom: "0", width: "100%", height: "100%" }}>

                                <div class="oxygenfont text-black " style={{
                                    letterSpacing: "2.3px",
                                    fontWeight: "medium",
                                    marginBottom: "2%", fontSize: "120%", marginTop: "60%"
                                }}>
                                    MADE FOR THE BEST<br />
                                    &nbsp;
                                    CHANGE MAKERS.
                                </div>


                                <div className='oxygenfont ' style={{
                                    marginBottom: "8%"
                                }}>
                                    <button className="searchbtn_bl fw-bold" style={{
                                        fontSize: "87%", color: "white", backgroundColor: "black"
                                    }} type="submit">SHOP BRANDS</button>
                                </div>



                            </div>

                        </div>
                        <div className="homecontainer col-md-6 col-12 p-0">
                            <img src="./homepages/22.jpg" className="img-fluid" style={{ objectFit: 'cover', width: '100%', height: '100%' }} alt="Image 4" />
                        </div>
                    </div>

                    <div className="row homecontainer  p-0 m-0">
                        <div className=" col-md-6 col-12 p-0">
                            <img src="./homepages/31.jpg" className="img-fluid" style={{ objectFit: 'cover', width: '100%', height: '100%' }} alt="Image 5" />
                        </div>
                        <div className=" col-md-6 col-12 p-0 position-relative">
                            <img src="./homepages/32.jpg" className="img-fluid" style={{ objectFit: 'cover', width: '100%', height: '100%' }} alt="Image 6" />
                            <div className='align-items-center justify-content-center d-flex flex-column  text-white p-4' style={{ position: "absolute", bottom: "0", width: "100%", height: "100%" }}>

                                <div class="oxygenfont " style={{ letterSpacing: "2.3px", marginBottom: "2%", fontSize: "120%", marginTop: "60%" }}>
                                    SAVOUR THE PRESENT.<br />

                                </div>


                                <div className='oxygenfont ' style={{
                                    marginBottom: "8%"
                                }}>
                                    <button className="searchbtn_bl fw-bold" style={{
                                        fontSize: "87%"
                                    }} type="submit">SHOP MONT BLANC</button>
                                </div>



                            </div>
                        </div>
                    </div>



                    {/* Here we have to apply media query  */}
                    <div className="homecontainer row p-0 m-0">
                        <div className="col-lg-12 p-0 ">
                            <img src="./homepages/4.jpg" className="img-fluid" style={{ objectFit: 'cover', width: '100%', height: '100%' }} alt="Image 6" />

                            <div className='visible-on-maxwidth-762px ' >

                                <div className='d-flex flex-column align-items-center  text-white p-4' style={{ position: "absolute", top: "0", width: "100%", height: "100%" }}>
                                    <div className=" oxygenfont  " style={{ letterSpacing: "5px", marginTop: "6.5%", fontSize: "150%", marginBottom: "6%" }}>WHERE QUALITY MEETS CLASS.</div>
                                    <div className=' oxygenfont' style={{ transform: "translateX(-10px) rotate(1deg)", marginBottom: "4.5%", fontSize: "200%" }}>
                                        <div >
                                            <span className="M">M</span>
                                            <span className="A">A</span>
                                            <span className="D">D</span>
                                            <span className="E">E</span>
                                            <span className="F">F</span>
                                            <span className="O_1">O</span>
                                            <span className="R">R</span>
                                            <span className="Y">Y</span>
                                            <span className="O_2">O</span>
                                            <span className="U">U</span>
                                        </div>
                                    </div>

                                    <div className=" pridifont pb-4" style={{ marginBottom: "2%", fontSize: "240%" }}>PISTONS</div>
                                    <div className='oxygenfont '>
                                        <   Button className="oxygenfont" toShow={"SHOP THE FALL 2023 COLLECTION"} />
                                    </div>



                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="not-visible-on-maxwidth-762px position-relative homecontainer col-lg-12 p-0" style={{ width: "100", height: "50vh", backgroundColor: "black" }}>



                        <div className='d-flex flex-column align-items-center  text-white p-4' style={{ position: "absolute", top: "0", width: "100%" }}>
                            <div className=" oxygenfont  " style={{ letterSpacing: "5px", marginTop: "3%", fontSize: "160%", marginBottom: "4%" }}>WHERE QUALITY MEETS CLASS.</div>
                            <div className=' oxygenfont' style={{ transform: "translateX(-10px) rotate(1deg)", marginBottom: "8%", fontSize: "200%",marginTop:"2%" }}>
                                <div >
                                    <span className="M">M</span>
                                    <span className="A">A</span>
                                    <span className="D">D</span>
                                    <span className="E">E</span>
                                    <span className="F">F</span>
                                    <span className="O_1">O</span>
                                    <span className="R">R</span>
                                    <span className="Y">Y</span>
                                    <span className="O_2">O</span>
                                    <span className="U">U</span>
                                </div>
                            </div>

                            <div className="pridifont" style={{ marginBottom: "6%", fontSize: "3.5vh" }}>PISTONS</div>
                            <div className='oxygenfont '>
                                <button className="searchbtn_bl fw-bold" type="submit">SHOP THE FALL 2023 COLLECTION</button>
                            </div>



                        </div>



                    </div>

                </div>



                {/* About Section */}

                <div className="row " ref={aboutSectionRef}>
                    <div className="col-lg-6 col-md-6 col-12 my-auto">

                        <div className="d-flex flex-column justify-content-center align-items-center mt-5" >
                            <div className="horizontal-gallery w-75 m-5" >
                                {carousel_photo.map((image, index) => (
                                    <img
                                        key={index}
                                        src={image}
                                        alt={`Image ${index + 1}`}
                                        className="img-fluid"
                                    />
                                ))}
                            </div>
                        </div>

                        {/* <div id="carouselExampleControls" class="carousel slide  p-5 pl-8 w-100" data-bs-ride="carousel">
                            <div class="carousel-inner ">

                                {
                                    carousel_photo.map((path) => {
                                        return (
                                            <div class="carousel-item active">
                                                <img src={path} class="d-block w-100" alt="..." />
                                            </div>
                                        )

                                    })
                                }
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div> */}
                    </div>

                    <div className="col-lg-6 col-md-6 col-12 my-auto"  >

                        <div className='d-flex flex-column justify-content-center align-items-center  '>
                            <div className='' style={{ width: "85%" }}>
                                <div className='oxygenfont mx-auto' style={{ fontSize: "2.0rem", letterSpacing: "9px", fontWeight: "1000", width: "80%" }}> ABOUT PISTONS</div>
                                <div className='mt-2 m-auto' style={{ fontSize: "0.87rem", width: "80%" }}>Established in 1897, our beloved fountain pen haven,
                                    'PISTONS,' has been a haven for pen enthusiasts for generations. With a century-long dedication to fine
                                    writing instruments, we've bridged tradition and modernity, offering a curated selection of vintage and
                                    contemporary fountain pens. Our little shop, nestled in the heart of town, continues to inspire a love for the art of writing,
                                    connecting past and present through the timeless elegance of ink on paper.</div>
                            </div>


                        </div>
                    </div>

                </div>

                {/* Testimonials */}
                <hr></hr>
                <div className='container oxygenfont mb-5'>
                    <div className=" h3 d-flex flex-row justify-content-center fw-bold mt-5 pb-3" style={{ letterSpacing: "10px", fontWeight: "bold" }}
                    > TESTIMONIALS</div>
                    <div className="row " >

                        {
                            data.map((test,index) => {
                                { console.log(hoveredTestimonial[test.name]) }
                                return (
                                    <>
                                        <div key={index} className="col-md-6 col-lg-3 col-12 py-4 d-flex justify-content-center "

                                        >
                                            {


                                                hoveredTestimonial[test.name] === undefined || hoveredTestimonial[test.name] ? (
                                                    <div className="position-relative" style={{
                                                        width: "220px",
                                                        height: "220px"

                                                    }}    >
                                                        <img src={test.image} alt="Your Image" className="img-fluid border rounded-5" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                                                        <div onMouseEnter={() => handleMouseEnter(test.name)} onMouseLeave={() => handleMouseLeave(test.name)} className="position-absolute top-50 start-50 translate-middle text-center text-white h2 ">
                                                            {test.name}</div>
                                                    </div>
                                                ) : (
                                                    <div className=" oxygenfont text-white p-4  d-flex flex-row justify-content-around align-items-center 
                                                    border rounded bg-black border rounded-5" onMouseLeave={() => handleMouseLeave(test.name)}
                                                        style={{
                                                            width: "220px",
                                                            height: "220px",
                                                            fontSize: "13px"

                                                        }}
                                                    >
                                                        "{test.message}"
                                                    </div>

                                                )
                                            }

                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>



            </div>

        </Layout>

    )

}

export default Home