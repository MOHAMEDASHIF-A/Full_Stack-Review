import React from 'react';
import axios from 'axios';
import { useState} from 'react';


function Deleteform() {
    const [id, setId] = useState();
    const [error, setError] = useState('');
    function del() {
        // useEffect(() => {
        axios
            .delete('http://localhost:8080/deleteDetails/' + id)
            .then((response) => {
                console.log(response.data);
                
            })
            .catch((error) => setError(error.message));
        alert("User Deleted");
    }
    return (
        <>  <center>
            <h2>Delete The Details</h2>
            <div>

                <input type="number" placeholder='Enter sno' className="form-control1" value={id} onChange={(e) => setId(e.target.value)}>

                </input>
            </div>

            <br/><button type="submit" class="btn btn-primary" onClick
                ={del}>Submit</button>
                </center>
          
            <h2>
                {error}
            </h2>
          
        </>
    );
}

export default Deleteform;