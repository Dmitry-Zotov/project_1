import React from 'react';
import './App.css';
import {Route, BrowserRouter, NavLink} from "react-router-dom";
import {Menu} from "./components/Menu";
import {PostList} from "./components/Postlist";
import {Post} from"./components/Post";



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

    <div className="container">
        <BrowserRouter>
            <Menu/>
            <Route exact path="/" render={()=><PostList/>}/>
            <Route path="/about" render={()=><About/>}/>
            <Route path="/contact-us" render={()=><ContactUs/>}/>
            <Route path="/post" render={()=><Post/>}/>

        </BrowserRouter>
    </div>
  );
}

export default App;
