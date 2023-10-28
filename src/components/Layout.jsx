import React from 'react'

const Layout = ({ children }) => {
    return (
        <>
            <div>
                <div className="feedback-button">
                    <button className='oxygenfont ' >FEEDBACK</button>
                </div>

                <main className='' >
                    {children}
                </main>

                <footer className='d-flex flex-column justify-content-around align-items-center bg-black'
                    style={{ height: "220px", color: "#FFFFFF" }}>

                    <div className='pridifont mt-4 pb-3' style={{ fontSize: "35px" }} >PISTONS</div>
                    <div className='oxygenfont fw-bold mb-1' style={{ fontSize: "19px", letterSpacing:"5px", }}>STAY CONNECTED</div>
                    <img className='mb-5 mt-1' src="./sociallinks.png" alt="" style={{width:"20%"}} />

                </footer>
            </div>


        </>
    )
}

export default Layout