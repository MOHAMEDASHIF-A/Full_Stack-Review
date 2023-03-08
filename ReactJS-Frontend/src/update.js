import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useState} from 'react';
import axios from 'axios';
import "./update.css"

export default function Update() {
    const [sno, setSno] = useState('');
    const [brandname, setBrandname] = useState("");
    const [modelname, setModelname] = useState("");
    const [price, setPrice] = useState("");
    const [launchedyear, setLaunchedyear] = useState("");
    
    async function save(event) {
        event.preventDefault();
        try {
            await axios.put("http://localhost:8080/updateDetails",

                { sno:sno,
                    modelName:modelname,
                    brandName:brandname,
                    price:price,
                    launchedYear:launchedyear
                   

                });
            alert("Order Updated");
            setSno("");
            setModelname("");
            setBrandname("");
            setPrice("");
            setLaunchedyear("");
           


        }
        catch (err) {
            alert("Order Updation Failed");
        }
    }

    return (
        <div>
           
           <center ><h2>Update The Details</h2></center>
            <div class="container mt-4"  style={{ display: 'block', 
        width: 500, 
        padding: 30 }}></div>
          
        <form>
        <div class="form-group">
       <center> <input type="number" placeholder='Enter S.no' className="form-control1" value={sno} onChange={(e) => setSno(e.target.value)}/></center>
        <br></br>
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
            <input type="text" class="form-control" placeholder="Enter LaunchedYear"
             value={launchedyear}
             onChange={(event) =>
               {
                setLaunchedyear(event.target.value);      
               }}
            />
        </div>
        <br></br>
        
        <center>
               <center> <button type="submit" class="btn btn-primary" onClick={save}>Update</button></center>
                </center>
                
            </form>
            

        </div>
    );
}