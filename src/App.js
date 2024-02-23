import './App.css';
import Header from "./myComponents/Header";
import Todos from "./myComponents/Todos";
import Footer from "./myComponents/Footer";
import AddTodo from "./myComponents/AddTodo";
import React, {useState} from 'react';

function App() {

  const onDelete = (todo)=>{
    // console.log("I am onDelete", todo);
    
    setTodos(todos.filter((e)=>{
      return e !== todo;
    }))
  }

  const addTodo = (title, desc)=>{
    // console.log("Adding todo ", title, desc)

    let sno;
    if(todos.length === 0){
      sno = 0;
    }
    else{
      sno = todos[todos.length-1].sno + 1;
    }
    
    const myTodo = {
      Sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    // console.log(myTodo);
  }

  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Sample Todo",
      desc: "You can Add or Delete a Todo",
    },
  ]);

  return (
    <>
      <Header title="My Todo's list" searchBar={false}/>
      <Todos todos={todos} onDelete={onDelete}/>
      <AddTodo addTodo={addTodo}/>
      <Footer/>
    </>
  );
}

export default App;