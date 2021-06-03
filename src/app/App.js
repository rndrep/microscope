import React, { useEffect, useState } from "react";

// Libs
import gsap from "gsap";

import { Draggable } from "gsap/Draggable";

// Components
import Microscope from "../components/Microscope";
import Wheel from "../components/Wheel";
import Overlay from "../components/Overlay";

// Assets
import bcp from "../assets/img/xpl";
import ppl from "../assets/img/ppl";

import "./App.css";

gsap.registerPlugin(Draggable);

const App = () => {
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        Draggable.create(".wheel", {
            type: "rotation",

            onDrag: function () {
                setRotation(
                    this.rotation - 360 * Math.floor(this.rotation / 360)
                );
            },
        });
    }, []);

    return (
        <div className="container">
            <div className="content">
                <div className="microscope-container">
                    <Overlay name="plane polarised light" />
                    <Wheel />
                    <Microscope images={ppl} rotation={rotation} />
                </div>

                <p className="degrees">{Math.round(rotation)}°</p>

                <div className="microscope-container">
                    <Overlay name="between crossed polars" />
                    <Wheel />
                    <Microscope images={bcp} rotation={rotation} />
                </div>
            </div>
        </div>
    );
};

export default App;
