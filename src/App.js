import React, { Component } from 'react';
import './App.css';
import List from "./List";

class App extends Component {
  render(){
    return (
      <List />
    )
  }
  
  // state = {
  //   data: this.props.todos
  // }
  // // onDelete =  () => {

  // // }
  // // todos = this.props.todos;
  // onAdd = (e)=> {
  //   e.preventDefault()
  //   console.log(this.newText.value)
  //   let newData = this.state.data
  //   console.log(newData)
  //   newData.push(this.newText.value)
  //   // newData[newData.length] = this.newText.value
  //   this.setState(prevState => (
  //     {data : newData}
  //   ))
  //   this.newText.value = ''
  // }
  // render() {
  //   const { todos } = this.props;
  //   return (
  //     <main>
  //       <form onSubmit={this.onAdd}>
  //         <input type="text" placeholder="Add New Item" ref={input => this.newText = input} />
  //         <button onClick={this.onAdd}>Add</button>
  //       </form>
  //       <h1>hello from the App component</h1>
  //       <List todos={todos}/>
  //     </main>
  
  //   );
  // }
  
}


export default App;
