import './App.css'

function App() {
  
  
  const imagemOne = 'imagemSB.png';

  const nome = "Vinicius";
  

  return (
    <div className="container">
      <header className='header' >
        <h1 className='titleOne'> VINICIUS FRANÇA </h1>
        <img className='imagemOne' src={ imagemOne }  />
      </header>
      <main className='main' >
        <div className="caixa">
          <h2 className='titleTwo'> APRESENTAÇÃO  </h2>
          <br />
          <br />
          <div className="mensagem">
            <p className='p1'>
              ME CHAMO VINICIUS, ESTOU CURSANDO <abbr className='abbr1' title='ANÁLISE E DESENVOLVIMENTO DE SISTEMA ' >ADS</abbr>, PELA UNIVERSIDADE UNIORGE. ESTOU NO MEU 3 SEMESTRE DA GRADUÇÃO E ESTOU AFIM DE ACHAR MINHA PRIMEIRA CHANCE NA ÁREA DE TECNOLOGIA, E ASSIM DESENVOLVER VÁRIOS PROJETOS ! 
            </p>
            </div>
        </div>
      </main>
      <footer className='footer'>
        FOOTER
      </footer>
    </div>
  )
}

export default App
