import React from 'react'
import {useState} from 'react';

const AddTodo = ({addTodo}) => {
    
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title or Description cannot be empty!!");
        }
        else{
            addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }

    return (
        <div className='container mb-3'> 
        <h3>Add your Todos :</h3>
            <form onSubmit={submit}>
                <div className="form-group my-3">
                    <label htmlFor="title">Todo title :</label>
                    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" id="title" placeholder="Enter Title"/>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="desc">Todo description :</label>
                    <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)} className="form-control" id='desc' placeholder="Enter description"/>
                </div>
                <button type="submit" className="btn btn-success">Add Todo</button>
            </form>
        </div>
    )
}

export default AddTodo
