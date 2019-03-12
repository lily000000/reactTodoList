import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './reset.css';
import AppForm from './components/AppForm'
import AppList from './components/AppList'
import AppFooter from './components/AppFooter'
import Propstype from './components/propstype'
import AppRouter from './router/index/index'

class App extends Component {
  constructor(props,context){
    super(props,context);
    console.log('cont',this.context)
    console.log(props.data)
    this.state = {
      choosevalue : 1,
      data:this.props.data
    }
  }

  chooseValue =(id)=> {
    this.setState({choosevalue:id});
  }
  onAddTodoItem =(newItem)=>{
    console.log(newItem)
    let newdata = this.state.data.concat(newItem);
    this.setState({data : newdata});
  }
  deleteItemTop = (id,index) =>{
    this.state.data.splice(index,1)
    this.setState({ data: this.state.data })
  }
  allChangeComplete  =(id)=> {
    console.log(11111,id)
    let newdata = this.state.data.map((item,index) => {
        if(item.id === id) {
          item.complete = !item.complete;
        }
        return item;
    })
    this.setState({data : newdata});
  }
  render() {
    const { data } = this.state; 
    return (
      
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
        <AppForm  addTodoItem={this.onAddTodoItem} />
        <AppList data={data} deleteItemTop={this.deleteItemTop}
        changeCompleteTop={this.allChangeComplete}
        choosevalue={this.state.choosevalue}
        />
        <AppFooter submitChooseValue={this.chooseValue}/>
        <Propstype name='222'/>
        <AppRouter />
     
      </div>
      
    );
  }
}

export default App;
