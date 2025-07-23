
export default function SectionInfo({ university, location, startDate, endDate, degrees, bullets, setData }) {

    function handleInfo(e, item) {
        const itemData = e.target.value;

        setData((prevData) => ({
            ...prevData,
            education: {
                ...prevData.education,
                [item]: itemData,
            },
        }));
    }

    function handleDegrees(e, index) {
        const itemData = e.target.value;

        setData((prevData) => ({
            ...prevData,
            education: {
                ...prevData.education,
                degrees: prevData.degrees.map((deg, i) => i === index ? itemData : deg),
            },
        }))
    }

    function handleBullets(e, index) {
        const itemData = e.target.value;

        setData((prevData) => ({
            ...prevData,
            education: {
                ...prevData.education,
                bullets: prevData.bullets.map((b, i) => i === index ? itemData : b),
            },
        })) 
    }

    return (
        <div className="info-container">
            <div className="top-line">
                <input type="text" className="university" value={university} onChange={e => handleInfo(e, "university")}></input>
                <input type="text" className="location" value={location} onChange={e => handleInfo(e, "location")}></input>
                <div className="date-container">
                    <input type="text" className="start-date" value={startDate} onChange={e => handleInfo(e, "startDate")}></input>
                    <span className="hypen">-</span>
                    <input type="text" className="end-date" value={endDate} onChange={e => handleInfo(e, "endDate")}></input>
                </div>
            </div>
            {degrees.map((degree, index) => {
                return <input key={index} type="text" className="degree" value={degree} onChange={e => handleDegrees(e, index)}></input>
            })}
            {bullets && <ul className="bullets">
                            {bullets.map((bullet, index) => {
                                return <li className="bullet" key={index}>
                                            <input type="text" className="bullet-input" value={bullet} onChange={e => handleBullets(e, index)}></input>
                                        </li>
                            })}
                        </ul>}
        </div>
    );
}