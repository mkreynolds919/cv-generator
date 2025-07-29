import { SketchPicker } from 'react-color';
import "../styles/ControlPanel.css";

export default function ControlPanel({ setIsEditing, handlePrint}) {
    function handleColor(clr) {
        const headers = document.querySelectorAll(".section-header");
        const name = document.querySelector('.name');
        headers.forEach((h) => {
            h.style.color = clr.hex;
        });
        name.style.color = clr.hex;
    }

    function handleFont(font) {
        document.querySelectorAll(".page-container *").forEach((el) => {
            el.style.fontFamily = `${font}`;
        })
    }


    return (
        <div className="control-panel">
            <h1 className='color-header'>Headers and Name Color</h1>
            <div className="color-container">
                <SketchPicker color={"#000000"} onChangeComplete={handleColor} />
            </div>
            <div className="font-container">
                <button className="font-btn PT-Serif-Caption" onClick={() => handleFont("PT Serif Caption")}>PT Serif Caption</button>
                <button className="font-btn Inter" onClick={() => handleFont("Inter")}>Inter</button>
                <button className="font-btn DM-Serif-Text" onClick={() => handleFont("DM Serif Text")}>DM Serif Text</button>
                <button className="font-btn Roboto-Condensed" onClick={() => handleFont("Roboto Condensed")}>Robot Condensed</button>
            </div>
            <div className="btn-container">
                <button className="edit-button" onClick={() => setIsEditing(true)}>Edit</button>
                <button className="done-button" onClick={() => setIsEditing(false)}>Done</button>
                <button className="print-button" onClick={() => handlePrint()}>Print</button>
            </div>
        </div>
    );
}