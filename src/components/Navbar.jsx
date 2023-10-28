import React, { useState } from 'react'
import Piston from "/PISTON.png"
import { Link } from "react-router-dom"

const Navbar = ({ aboutSectionRef, scrollToAbout }) => {
    const [search, setSearch] = useState(true)
    const [hamburger, setHamburger] = useState(false)
    const Searchpop = () => {
        setSearch(!search)
    }
    const handleHamburger = () => {
        setHamburger(!hamburger)
    }
    return (
        <div style={{ position: 'sticky', top: "0", zIndex: "13" }}>
            <div className='d-flex justify-content-center align-items-center' style={{ backgroundColor: "#E3E3E3", color: "#9A9A9A", position: 'sticky', top: "0", zIndex: "12" }}>
                <div className='fw-bold py-2' style={{ fontSize: "0.8rem" }}> FREE SHIPPING ON ALL ORDERS</div>
            </div>

            <nav className="navbar navbar-expand-lg bg-body-tertiary text-dark font-weight-bold ">
                <div className="container-fluid p-2">
                    <div class="navbar-brand" >
                        <img src={Piston} className='ps-2 mb-1' style={{ width: "85%" }} alt="piston" onClick={() => {
                        }} />
                    </div>
                    {/* <a className="navbar-brand" href="#">PISTONS</a> */}

                    <div className=" fw-bold visible-on-maxwidth-762px " id="">
                        <ul className="navbar-nav w-100 mb-2 mb-lg-0 d-flex justify-content-center oxygenfont pe-5 ">
                            <li className="nav-item">
                                <Link className="nav-link" to="/new">NEW</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/brands">BRANDS</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/collections">COLLECTIONS</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/accesories">ACCESSORIES</Link>
                            </li>
                            <li className="nav-item">
                                <button onClick={(aboutSectionRef) => scrollToAbout()} className="nav-link" >ABOUT</button>
                            </li>
                        </ul>

                        {/* <div className="d-flex justify-content-between navbar-expand" role="search">
                            <img className='icon me-3 ' src="/Shop.svg" alt="shop-button" />
                            <img className='icon me-4' src="Search.svg" alt="search-button" onClick={Searchpop} />
                        </div> */}
                    </div>
                    <div className="d-flex justify-content-between " role="search">
                        <div className='d-flex flex-column position-relative'>
        
                            <img className=' me-4 ' src="/Shop.svg" alt="shop-button" style={{objectFit:"cover"}} />
                            <div className="d-flex fw-bold justify-content-end " style={{position:"absolute",right:"43%",bottom:"58%"}}>0</div>
                        </div>
                        <img className='icon me-4' src="/Search.svg" alt="search-button" onClick={Searchpop} />
                        <div className='not-visible-on-maxwidth-762px me-3'  >
                            <img className='icon-hamburger pb-2 w-80 ' src="/sidemenu.png" alt="side-menu" onClick={handleHamburger} />
                        </div>
                    </div>


                </div>
            </nav>
            {
                hamburger ? (
                    <div className='bg-light p-2 not-visible-on-maxwidth-762px ' style={{ position: "absolute", right: "0%",top:"30%",zIndex:"11"}}>

                        <div className='d-flex justify-content-end mt-2'>
                            <img className='crossicon ' src="/Cut.svg" alt="" onClick={handleHamburger} />
                        </div>

                        <div className=" fw-bold  bg-light" id="">
                            <ul className="navbar-nav w-100 mb-2 mb-lg-0 d-flex justify-content-center oxygenfont pe-5 ">
                                <li className="nav-item">
                                    <Link className="nav-link  " to="/new">NEW</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/brands">BRANDS</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/collections">COLLECTIONS</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/accesories">ACCESSORIES</Link>
                                </li>
                                <li className="nav-item">
                                    <button onClick={(aboutSectionRef) => scrollToAbout()} className="nav-link" >ABOUT</button>
                                </li>
                            </ul>

                            {/* <div className="d-flex justify-content-between navbar-expand" role="search">
                            <img className='icon me-3 ' src="/Shop.svg" alt="shop-button" />
                            <img className='icon me-4' src="Search.svg" alt="search-button" onClick={Searchpop} />
                        </div> */}
                        </div>
                    </div>
                ) : (<>
                </>)

            }


            {
                search ? (
                    (<></>)
                ) :
                    (<>
                        <div className='bg-light p-2 ' style={{ position: "absolute", right: "5%" }}>
                            <div className='d-flex justify-content-end'>
                                <img className='crossicon ' src="/Cut.svg" alt="" onClick={Searchpop} />
                            </div>

                            <div className='d-flex flex-row pe-3 px-3 pb-3 pt-2 oxygenfont'   >
                                <input className="search px-4   " type="search" aria-label="Search" />
                                <button className="searchbtn fw-bold" type="submit">SEARCH</button>
                            </div>
                        </div>
                        
                    </>)
            }

        </div>
    )
}

export default Navbar