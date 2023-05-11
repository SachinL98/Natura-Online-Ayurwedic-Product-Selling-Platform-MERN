import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function MyFeedbacks() {
    const [feedbacks, setFeedbacks] = useState([]);
    const user = JSON.parse(localStorage.getItem('user'));
    const userID = user.user._id;
    const [deleted, setDeleted] = useState(false);

    useEffect(()=>{
        axios.get(`http://localhost:8001/api/feedback/user/${userID}`)
        .then((res)=>{
            setFeedbacks(res.data);
            console.log(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
        setDeleted(false)
    },[deleted]);

    function deleteFeedback(id){
        const response = window.confirm('Are you Sure ?');
        if(response){
            axios.delete(`http://localhost:8001/api/feedback/${id}`)
            .then(()=>{
                window.alert("Feedback Deleted !");
                setDeleted(true)
            })
            .catch((err)=>{
                console.log(err);
            })
        }
    };

  return (
    <div>
        <br/>
        <h3 style={{display: "inline-block", marginLeft: "20px"}}>My Feedbacks</h3>
        <Link to="/addFeedback"><button className='btn btn-warning' style={{flot: "left", display: "inline-block", float: "right"}}>Add A New Feedback </button></Link>
        <br></br>
        <br></br>
            {feedbacks.map((feedbackData)=>(  
                <div key={feedbackData._id}> 
                    <table class="table">               
                        <tr scope="row">
                            <b><td scope="col" style={{width: "300px", textAlign: "left"}}>{feedbackData.topic}</td></b>
                            <td scope="col" style={{}}>{feedbackData.description}</td>
                            <td><button className='btn btn-secondary'>Edit</button></td>
                            <td><button onClick={() => deleteFeedback(feedbackData._id)} className='btn btn-danger'>Delete</button></td>
                        </tr>  
                    </table>  
                </div>
            ))}
            {feedbacks == '' && (
                <div style={{textAlign: "center", marginTop: "200px"}}>
                    <h4>Currently No Feedbacks are Avaliable</h4>
                </div>
            )}
    </div>
  )
}
