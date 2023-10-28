import React from 'react'
import { Button } from './Button'
import "../../App.css"

const Curvytext = () => {
    return (
        <div className='d-flex flex-column align-items-center  text-white p-4' style={{ position: "absolute", top: "0", width: "100vw" }}>
            <div className=" oxygenfont  " style={{ letterSpacing: "5px",marginTop:"12vh",fontSize:"3.5vh",marginBottom:"10vh" }}>WHERE QUALITY MEETS CLASS.</div>
            <div class="oxygenfont" style={{marginBottom:"15vh",fontSize:"6vh"}}>
                Curvy Text Example
            </div>

            <div className=" pridifont pb-4" style={{marginBottom:"8vh",fontSize:"7vh"}}>PISTONS</div>
            <div className='oxygenfont ' style={{marginBottom:"13vh"}}>
            <   Button className="oxygenfont" toShow={"SHOP THE FALL 2023 COLLECTION"} />
            </div>

            

        </div>
    )
}

export default Curvytext