import './App.css';
import User from './Props/User2';

function App() {
  return (
    <div>

      <User 
        name="Merve" 
        surname="Altınışık" 
        isLoggedIn={true} 
        number={10} 
        friends={["James", "David", "Margot"]}
      />

    </div>
  );
}

export default App;
 