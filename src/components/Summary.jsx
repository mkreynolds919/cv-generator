
import "../styles/Summary.css";

export default function Summary({ setData, data }) {

    function handleSummary(e) {
        const newSummary = e.target.value;
        setData((prevData) => ({
            ...prevData,
            summary: newSummary,
        }));
    }
    return (
        <div className='summary-container'>
            <h1 className='section-header'>Summary</h1>
            <hr></hr>
            <textarea className="summary" value={data} onChange={handleSummary}></textarea>
        </div>
    );
}