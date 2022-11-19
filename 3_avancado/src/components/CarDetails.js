import React from 'react'

function CarDetails({marca, cor, km, newCar}) {
  return (
    <div>
      <h1>Detalhes do carro</h1>
      {/* <li>ID: {id}</li> */}
      <li>Marca: {marca}</li>
      <li>km: {km}</li>
      <li>Cor: {cor}</li>
      {newCar && <p>Este carro é novo</p> }
    </div>
  )
}

export default CarDetails