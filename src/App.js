import './App.css';
import {Route, BrowserRouter, NavLink} from "react-router-dom";

function Menu(){
    return(
        <nav className="nav">
            <NavLink className="nav-link active" aria-current="page" to="/">Главная</NavLink>
            <NavLink className="nav-link" to="/about">О нас</NavLink>
            <NavLink className="nav-link" to="/contact-us">Контакты</NavLink>
        </nav>
    )
}

function ContactUs(){
    return(
        <div className="container my-5">
            <form action="">
                <div className="mb-3"><input type="text" className="form-control"/></div>
                <div className="mb-3"><input type="text" className="form-control"/></div>
                <div className="mb-3"><textarea type="text" className="form-control"/></div>
                <div className="mb-3"><input type="text" className="form-control"/></div>
            </form>
        </div>
    )
}

function Page(){
    return(
        <div className="mb-3"><h1>Главная страница</h1></div>
    )
}
function About() {
    return (
        <div className="mb-3"><h1>О нас</h1></div>
    )
}
function App() {
  return (

    <div className="App">
        <BrowserRouter>
            <Menu/>
            <Route exact path="/" render={()=><Page/>}/>
            <Route path="/about" render={()=><About/>}/>
            <Route path="/contact-us" render={()=><ContactUs/>}/>
        </BrowserRouter>
    </div>
  );
}

export default App;
