import React, { Component } from "react";
class Header extends Component
{
    render(){
        return(
            <div>
            <nav className ="navbar sticky-top navbar-dark bg-dark">
                <div className ="container-fluid">
                    <a className ="navbar-brand" href="index.html">SCP FOUNDATION</a>
                </div>

            </nav>
            </div>  
            
        );
    }

}
export default Header;