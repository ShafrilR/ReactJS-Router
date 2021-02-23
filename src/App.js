import React, { Component } from 'react'
import Navbar from './Components/navbar'
import Utama from './Components/utama'
import Pegawai from './Components/Pegawai'


export class App extends Component{
  render(){
    return(
      <div>
        <Navbar />
        <Utama />
      </div>
    )
  }
}

export default App;
