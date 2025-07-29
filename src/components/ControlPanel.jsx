
import "../styles/ControlPanel.css";

export default function ControlPanel({ setIsEditing, handlePrint}) {
    return (
        <div className="control-panel">
            <div className="btn-container">
                <button className="edit-button" onClick={() => setIsEditing(true)}>Edit</button>
                <button className="done-button" onClick={() => setIsEditing(false)}>Done</button>
                <button className="print-button" onClick={() => handlePrint()}>Print</button>
            </div>
        </div>
    )
}