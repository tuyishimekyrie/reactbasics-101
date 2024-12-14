import { NavLink, useNavigate } from "react-router";
import "./App.css";




const App = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/about")
  }
  return (
    <div >
      <h1>Hello World!</h1>


      <NavLink to="/login">Login</NavLink>

      <NavLink to="/about">About</NavLink>

      <button onClick={handleClick}>About</button>

    </div>
  )
}

export default App