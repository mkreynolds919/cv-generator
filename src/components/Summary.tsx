
import "../styles/Summary.css";

export default function Summary({ setData, data, isEditing }) {

    function handleSummary(e) {
        const newSummary = e.target.value;
        setData((prevData) => ({
            ...prevData,
            summary: newSummary,
        }));
    }

    if (isEditing) {
        return (
            <div className='summary-container section'>
                <h1 className='section-header'>Summary</h1>
                <hr></hr>
                <textarea className="summary" value={data} onChange={handleSummary}></textarea>
            </div>
        );
    } else {
        return (
            <div className='summary-container section'>
                <h1 className='section-header'>Summary</h1>
                <hr></hr>
                <div className="summary">{data}</div>
            </div>
        );
    }
    
}