import React from 'react';
import Logo from '../../assets/img/CareerZo.png'
import './Home.css';

function Home() {
    const img = [
        'https://images.pexels.com/photos/38293/workers-construction-site-hardhats-38293.jpeg?cs=srgb&dl=pexels-pixabay-38293.jpg&fm=jpg',
        'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?cs=srgb&dl=pexels-pixabay-416405.jpg&fm=jpg'
    ]; 
    return (
        <div>
            <div className="background">
                 <img className="img1"src={Logo} alt="Logo" width="35%" height="80%"/>
                <div className="text">
                    <div className="title-background">
                        <h1 className="sub-title1">The Technology That Supports Your Career!</h1>
                    </div>                    
                    <div className="title-background">
                        <h1 className="sub-title1">Register Now To Begin Your Smart Career Journey Path Today!</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
