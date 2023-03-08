    import React from 'react';
    import {Link} from 'react-router-dom';
import "./home.css"
function Home(){
    return(
        <>
            <body>
                <div class="home">
                    
                    <div className='navi'>
                        <ul class="navigation">
                            <li><Link to="/" className='nav'>Home</Link></li>
                            <li><Link to="/Menu" classNmae='nav'>Order</Link></li>
                            <li><Link to="/" className='nav'>About</Link></li>
                            <li><Link to="/" className='nav'>Contact</Link></li>
                        </ul>
                    </div>
                    <h1>Just click away</h1>
                    <Link to="/Add"><button type="submit" className='order'>Order Now</button></Link>
                    
                    
                </div>
            </body>
        </>
    )
}
export default Home;