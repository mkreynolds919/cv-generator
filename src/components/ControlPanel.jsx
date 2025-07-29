
import "../styles/ControlPanel.css";

export default function ControlPanel() {
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