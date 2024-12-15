import './App.css';
import Header from './components/Header';


const name = "Merve"
const isLoggedIn = true;


function App() {
  return (
    <div>

      <Header/>  

      <h1> {name} </h1>
      <h1> {`Benim adım ${name}`} </h1>


      {/* Koşullu render etme işlemleri */}

    
      <h2> {isLoggedIn && `Benim adım ${name}`} </h2>    {/*isLoggedIn true ise bunu yap anlamına geliyor */}
      {!isLoggedIn && "Giriş yapmadınız"} {/*isLoggedIn false ise bunu yap anlamına geliyor */}



      {/*Kısa yolu */}
      <h2>{isLoggedIn? `Benim adım ${name}` : "Giriş yapmadınız"}</h2>  

    </div>
  );
}

export default App;
 