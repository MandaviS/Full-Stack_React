import React, {useState} from "react";
import axios from "axios";
// import {toast} from "react-toastify";

const Form = () => {
    const [type,settype] = useState("");
    const [category,setcategory] = useState("");
    const [headline,setheadline] = useState("");
    const [description,setdescription] = useState("");

//to store what is written in input boxes, we use two attributes:
//value={state}
//onChange = {(e)=>setstate(e.target.value)}

const handlesubmit =async()=>{
    try{const response = await axios.post("/api/save" ,{
        type,
        category,
        headline,
        description,
    });

    if(response.data.sucess){
alert("Content successfully saved");
    }}
    catch (error){
        console.log(error);
alert("Something went wrong...");
    }
};

return(
    <>
    <form>
        <div class="form-group">
        <label>Content Type</label>
    <select 
    value={type}
    onChange={(e)=>settype(e.target.value)}
    class="form-select" aria-label="Default select example">
  <option value="">Select Content Type</option>
  <option value="news">News</option>
  <option value="jokes">Jokes</option>
  <option value="quotes">Motivational Quotes</option>
</select>
</div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Category</label>
    <input 
    value={category}
    onChange={(e)=>setcategory(e.target.value)}
    type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Headline</label>
    <input 
    value={headline}
    onChange={(e)=>setheadline(e.target.value)}
    type="text" class="form-control" id="exampleInputPassword1" />
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Description</label>
    <input 
    value={description}
    onChange={(e)=>setdescription(e.target.value)}
    type="text" class="form-control" id="exampleInputPassword1" />
  </div>
  <button 
  onClick={()=> handlesubmit()}
  type="submit" class="btn btn-primary">Submit</button>
</form>
    </>
)
}

export default Form;