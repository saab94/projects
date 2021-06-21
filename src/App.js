import React,{Component} from 'react';
import SCP from "./SCP";

class App extends Component
{
    render()
    {
      return(
        <SCP scp={ this.state.scp}/>

      );
    }
    state = { scp: []}

    componentDidMount()
    {
      fetch('https://scp20-02b9.restdb.io/rest/content',
      {
        method: 'GET',
        headers: {
          "cache-control": "no-cache",
          "x-apikey": "60d078f3e2c96c46a24637aa",
          "content-type": "application/json"
        }
      })
      .then(result => result.json())
      .then((data) => { this.setState({scp: data})})

      .catch(console.log);
    }
   
}


export default App;
