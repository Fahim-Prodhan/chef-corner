import './App.css'
import Header from './components/header/Header'

function App() {
  const setTheme = ()=>{
    document.querySelector('body').setAttribute('data-theme','light')
  }
  setTheme()

  return (
    <div>
      <Header></Header>
    </div>
  )
}

export default App
