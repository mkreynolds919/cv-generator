
export default function Summary({ setData, summary }) {

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
            <textarea className="Summary" value={summary} onChange={handleSummary}></textarea>
        </div>
    );
}