import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import App from "./App";

class Main extends Component
{
    render()
    {
        return(
            <div>
                <Header/>
                <App />
                <Footer/>

            </div>
        );
    }
}

export default Main;