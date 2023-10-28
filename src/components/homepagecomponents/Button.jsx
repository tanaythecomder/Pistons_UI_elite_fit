import React from 'react'

export const Button = ({ toShow, isBlackbackgroung }) => {
    return (
        <>
            {
                isBlackbackgroung ? (
                    <button className="searchbtn fw-bold"  type="submit">{toShow}</button>

                ) : (
                    <button className="searchbtn fw-bold" style={{
                        backgroundColor:"white",
                        color:"black"
                    }} type="submit">{toShow}</button>

                )
            }
        </ >
    )
}
