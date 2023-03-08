import axios from 'axios';
import {useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';

function Add()
{
    const [sno, setSno] = useState('');
    const [brandname, setBrandname] = useState("");
    const [modelname, setModelname] = useState("");
    const [price, setPrice] = useState("");
    const [launchedyear, setLaunchedyear] = useState("");
    
   
    
 
    async function save(event)
    {
        event.preventDefault();
    try
        {
         await axios.post("http://localhost:8080/addDetails",
        {
        
        sno:sno,
        brandName:brandname,
        modelName:modelname,
        price:price,
        launchedYear:launchedyear,
       
        });
          alert("Order added.");
          setSno("");
          setModelname("");
          setBrandname("");
          setPrice("");
          setLaunchedyear("");
         
        
        
        }
    catch(err)
        {
          alert("Order Failed");
        }
   }
    return (

        <div class="container mt-4"  style={{ display: 'block', 
        width: 700, 
        padding: 30 }}>
          <center><h1>Enter The Details</h1></center>
        <form>
        <div class="form-group">
            <label><span>S.no</span></label>
            <input type="text" class="form-control" placeholder="Enter S.no"
             value={sno}
            onChange={(event) =>
              {
                setSno(event.target.value);      
              }}
            />
        </div>
        <br></br>
        <div class="form-group">
            <label><span>BrandName</span></label>
            <input type="text" class="form-control" placeholder="Enter BrandName"
             value={brandname}
            onChange={(event) =>
              {
                setBrandname(event.target.value);      
              }}
            />
        </div>
        <br></br>
        <div class="form-group">
            <label><span>ModelName</span></label>
            <input type="text" class="form-control" placeholder="Enter ModelName"
             value={modelname}
             onChange={(event) =>
               {
                setModelname(event.target.value);      
               }}
            />
        </div>
        <br></br>
        <div class="form-group">
            <label><span>Price</span></label>
            <input type="text" class="form-control" placeholder="Enter Price"
             value={price}
             onChange={(event) =>
               {
                setPrice(event.target.value);      
               }}
            />
        </div>
        <br></br>
        <div class="form-group">
            <label><span>LaunchedYear</span></label>
            <input type="text" class="form-control" placeholder="Enter LauncherYear"
            value={launchedyear}
            onChange={(event) =>
              {
                setLaunchedyear(event.target.value);      
              }}
           />
        </div>
        <br></br>
        
       <center> <button class="btn btn-primary mt-4"  onClick={save}>Order</button></center>
        </form>

 
      </div>
    
    );
  }
  
  export default Add;