
import './App.css'
import Main from './components/Main'
import Basket from './components/BAsket'
import Header from './components/Header'
export default function App() {


  return (
    <>
      <div className='App'>
        <Header />
        <div>
          <Main />
          <Basket />
        </div>

       </div>
    </>
  )
}


