import React from 'react'
import "./Tasks.css"
import moment from 'moment';

function Tasks(props) {

const handleDeleteClick =() => {
// console.log("Delete button was clicked");
// console.log(props.id);
props.deleteTaskFunc(props.id);
};

const handleCompelteClick =() => {
    console.log("Complete button was clicked");
    console.log(props.id);
    props.completeTaskFun(props.id);
}

    return (
        <div className="row taskRow">
            <div className= "col-12 col-md-4">{props.text}</div>
            <div className= "col-3 col-md-2">{props.Status} </div>
            <div className= "col-3 col-md-2"> {moment(props.Deadline).format('d MM YYYY')} </div>
            <div className= "col-3 col-md-2"><button className="btn btn-info" onClick={handleCompelteClick}>Complete </button></div>
            <div className= "col-3 col-md-2"><button className="btn btn-info" onClick={handleDeleteClick}> Delete</button></div>
        </div>
    )
}

export default Tasks;