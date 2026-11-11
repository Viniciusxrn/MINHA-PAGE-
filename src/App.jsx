import './App.css'

function App() {
  
  
  const imagem = 'Imagem.png';
  
  

  return (
    <div className="projeto">
      <header>
      </header>
      <main>
        <div className='mainOne' >
          <img src={ imagem } className='imagem' />
        </div>
        <div className='mainTwo' >
          <p className='mensagem'>ME CHAMO VINICIUS FRANÇA </p>
          <br />
          <p className='mensagem'>SOU UM DESENVOLVEDOR JÚNIOR + CIENTISTA DE DADOS</p>
          <br />
          <p className='mensagem' >SEI MEXER COM : PYTHON, JAVA, JAVA SCRIPT, HTML, CSS E REACT </p>
        </div>
      </main>
      <footer>
        FOOTER
      </footer>
    </div>
  )
}

export default App
