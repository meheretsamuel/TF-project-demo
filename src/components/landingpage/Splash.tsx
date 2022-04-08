import React from 'react';
import './landingpage.css'

//Import Assets for the landing pages
import illust from "../../assets/images/illist.svg"


function splash(){
    return (
        <div className="App">
        <header className="App-header">     
        <img src={illust} className="cheer" alt="logo" />
          <h2 className="caption-1">
            Manage Your Events With <span className="orange">Ticket Funnel</span>
          </h2>
          <h4 className="caption-2">
            Organize any event with ease and efficiency
          </h4>
        </header>
      </div>
    )
}

export default splash;