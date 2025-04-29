import React from 'react'
import { useState } from 'react'
function Projects() {

  // const [brand , setBrand] = useState("honda")
  // const [color ,setColor] = useState("black")
  // const [model , setModel] = useState("Activa 125")

  const [bike , setBike] = useState (
    {
      model : "Activa 125",
      color :"Black",
      brand:"Honda"
    }
  )

  function updateBike(){
    setBike(prev => {
      return {...prev , color:"blue"}
    })


  }
  return (
    <div>
      <h2>My Bike</h2>
      <p>Model :{bike.model}</p>
      <p>Color : {bike.color}</p>
      <p>Brand: {bike.brand}</p>
      <button onClick={updateBike}>Change color</button>
    </div>
  )
}

export default Projects