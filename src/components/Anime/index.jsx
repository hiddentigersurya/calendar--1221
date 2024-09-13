import React from "react";
import AI from "../../assets/AI.json";
import Tick from "../../assets/Tick.json";
import Start from "../../assets/Start.json";
import Shapes from "../../assets/Shapes.json";
import Lottie from "lottie-react";
import './index.css';

const Anime = () => {
    return (
        <div className="bg-container">
        <div className="container">
        <div className="start">
                <Lottie animationData={Start} style={{ height: 300, width: 300 }} />
                <p>Let's Go</p>
                </div>
            <div className="alpha">
                <Lottie animationData={Shapes} style={{ height: 300, width: 300 }} />
                <p>Alpha</p>
                </div>
            <div className="beta">
                <Lottie animationData={AI} style={{ height: 300, width: 300 }} />
                <p>Beta</p>
                </div>
            <div className="gamma">
                <Lottie animationData={Tick} style={{ height: 300, width: 300 }} />
                <p>Gamma</p>
                </div>
           
        </div>
        </div>
    );
}

export default Anime;