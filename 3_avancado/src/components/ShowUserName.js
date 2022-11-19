import React from 'react'

function ShowUserName(props) {
  return (
    <div>
      <h3>Tem um rato com nome de: {props.nameUsuario}</h3>
      {console.log(props)}
    </div>
  )
}

export default ShowUserName