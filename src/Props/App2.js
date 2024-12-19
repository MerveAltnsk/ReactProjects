import './App.css';
import User from './Props/User2';

function App() {
  return (
    <div>

      <User 
        name="Merve" 
        surname="Altınışık" 
        isLoggedIn={true} // string dışındaki değerleri süslü parantez içinde yazarız
        number={10} // string dışındaki değerleri süslü parantez içinde yazarız
        friends={["James", "David", "Margot"]}
      />

    </div>
  );
}

export default App;
 