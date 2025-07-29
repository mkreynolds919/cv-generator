import { SketchPicker } from 'react-color';
import "../styles/ControlPanel.css";
import { useState } from 'react';

export default function ControlPanel({ setIsEditing, handlePrint}) {
    const [color, setColor] = useState("#000000");



    function handleColor(clr) {
        setColor(clr.hex);

        const headers = document.querySelectorAll(".section-header");
        const name = document.querySelector('.name');
        headers.forEach((h) => {
            h.style.color = clr.hex;
        });
        name.style.color = clr.hex;
    }


    return (
        <div className="control-panel">
            <h1 className='color-header'>Headers and Name Color</h1>
            <div className="color-container">
                <SketchPicker color={color} onChangeComplete={handleColor} />
            </div>
            <div className="btn-container">
                <button className="edit-button" onClick={() => setIsEditing(true)}>Edit</button>
                <button className="done-button" onClick={() => setIsEditing(false)}>Done</button>
                <button className="print-button" onClick={() => handlePrint()}>Print</button>
            </div>
        </div>
    );
}