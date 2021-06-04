import sun from './assets/sun-svgrepo-com.svg';
import './App.css';

function App() {

  return (
    <div className="App">
      <div className="Header">
        <div className="Title">Connor Courtney</div>
        <div className="Subtitle">Web Developer</div>
      </div>
      <div className="Projects">
        <a href={"https://letsgetfit22.herokuapp.com/signup"}>
          <div className="Project">
            <div className="logo">
              <img className="sun" src={sun}/>
            </div>
            <div className="details">
              <div className="ProjectTitle">Hot Girl Summer</div>
              <div className="Description">A react frontend with an express backend. Fitness enthusiasts can make an account and track their macronutrients and workouts using fun visuals.</div>
            </div>
          </div>
        </a>
        <a href={"https://my-marvel-front.herokuapp.com/signup"}>
          <div className="Project">
            <div className="logo">
              <div className="marvel">MY MARVEL</div>
            </div>
            <div className="details">
              <div className="ProjectTitle">My Marvel</div>
              <div className="Description">A react frontend with an express backend. A place for Marvel fans to make an account and save/share view orders of all the movies in the MCU.</div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default App;
