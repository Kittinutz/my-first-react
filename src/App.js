import React, { Component } from 'react';
import logo from './logo.svg';
import Foo from './Foo';
import './App.css';
import Bar from './Bar';
class App extends Component {
    constructor(prop){
        super();
        this.state={
            name:'Kittinut',
            numbber:'1234567',
            user:[{name:'john'},{name:'jack'},{name:'joo'}],
            users:{}
        }
    }
    componentWillUnmount(){
        console.log('componentWillunMount')
    }
    componentWillMount(){
        console.log('componentWillMount')
    }
    componentDidMount(){
        console.log('componentDidMount')
    }
    handleClick=(value)=>{
        this.setState({name:value});
    };
    renderUser=()=>{
        return this.state.user.map(value=>{
         return   (<h1>{value.name}</h1>)
        });
    }
    handleChange=(event)=>{
        var name = event.target.name;
        var value = event.target.value;
        this.setState(prevState => ({
            users: {
                ...prevState.users,
                [name]: value
            }
        }),()=>{console.log(this.state.users)})

    }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React {this.state.name}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <h1>{this.state.name}</h1>
          <input type="text" name={'name'} onChange={this.handleChange}/>
          <input type="text" name={'surname'} onChange={this.handleChange}/>

      </div>
    );
  }
}

export default App;
