import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Header from './components/header' // you are importing the deafult
import {Header, Header2} from './components/header' // you import multiple components
import Main from './components/main'
import Footer from './components/footer'
import axios from 'axios'
import { getUserList } from './util/service-helper'

class App extends Component {

  constructor(props){
    super (props);

    console.log('Sam was here');

    this.state = { //initialization
      userList: [],
      date: new Date()
      
    }
  }

  //COMPONENT LIFE CYCLE
  componentDidMount(){//this will only occur when all components are rendered
    
    // this.timerID = setInterval( //pwedeng wala na yung this.timerID
    //   () => {this.tick()}, 1000 //() => an anynoymous functions that will do what the arrow points to
    //   ); 

    this.getUsers();

  }

  //SERVICE CALL FUNCTIONS  
  getUsers = () => {
    // console.log('GET USERS');
    console.log('INITIAL STATE VALUES');
    console.log(this.state.userList);

    getUserList()
    .then(
      res => {
      //res is a variable
        // console.log(res.data.data); //print details on console

        //let user = res.data.data;

        this.setState({
          userList: res.data.data
        });

        console.log('UPDATED STATE VALUE');
        console.log(this.state.userList);
      }
    ); //after calling service, it will do what is inside then()
         //parameter of get is URL of web service
   
  }

  // ETC FUNCTIONS

  tick(){

    console.log('CALLED TICK METHOD');

    this.setState({
      date: new Date()
    });
  }


  render() {
    // let name = 'Sam';
    return (
      
      <div className="App">
      {/* <header>
        <div className="header"> 
                <h1> HELLO WORLD </h1>
                <h1> HELLO {name} </h1>
        </div>
      </header> */}

      <Header date={this.state.date.toLocaleTimeString()}/>
      
      <Header2 />

      {/* <div className="main">
            <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam repellat similique voluptatibus excepturi. Nostrum, maiores assumenda provident deserunt nemo optio aut similique recusandae iure blanditiis saepe commodi. Laborum, eum explicabo!</p>
      </div> */}

      {/* <Main /> */}
      <Main userList={this.state.userList} />

        {/* <div className="footer">
            <h2> Footer </h2>
        </div> */}

      <Footer />

        


      </div>
    );
  }
}

export default App;
