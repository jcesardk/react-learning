import React from 'react'

function Fragment({propFragment}) {
  return (
    <>
      <h1>Primeiro Titulo</h1>
      <h2>Segundo Titulo</h2>
      <h4>{propFragment}</h4>
    </>
  )
}

export default Fragment