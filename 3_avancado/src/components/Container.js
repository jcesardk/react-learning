
function Container({children}) {
  return (
    <div>
      <h1>Este é o titulo do conteudo</h1>
      {/* propriedade que carrega html */}
      {children}
    </div>
  )
}

export default Container