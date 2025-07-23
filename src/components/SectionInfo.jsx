
import "../styles/SectionInfo.css";

export default function SectionInfo({ name, location, startDate, endDate, subtitles, bullets, setData, id, source }) {

    function handleInfo(e, item) {
        const itemData = e.target.value;
        
        setData((prevData) => ({
                    ...prevData,
                    [source]: prevData[source].map((obj) =>
                        id === obj.id ? { ...obj, [item]: itemData } : obj
                ),  
            }));
    }

    function handleSubtitles(e, index) {
        const itemData = e.target.value;

        setData((prevData) => ({
                    ...prevData,
                    [source]: prevData[source].map((obj) =>
                        id === obj.id ? {...prevData[source], subtitles: prevData[source].subtitles.map((sub, i) => i === index ? itemData : sub),} : obj
                    ),
            }));
    }

    function handleBullets(e, index) {
        const itemData = e.target.value;

        setData((prevData) => ({
            ...prevData,
            [source]: prevData[source].map((obj) =>
                id === obj.id ? {
                    ...prevData[source],
                    bullets: prevData[source].bullets.map((b, i) => i === index ? itemData : b),
                } : obj
            ),   
        }));
    }

    return (
        <div className="info-container">
            <div className="top-line">
                <input type="text" className="info-name" value={name} onChange={e => handleInfo(e, "name")}></input>
                {location && <input type="text" className="info-location" value={location} onChange={e => handleInfo(e, "location")}></input>}
                <div className="date-container">
                    <input type="text" className="start-date" value={startDate} onChange={e => handleInfo(e, "startDate")}></input>
                    <span className="hypen">-</span>
                    <input type="text" className="end-date" value={endDate} onChange={e => handleInfo(e, "endDate")}></input>
                </div>
            </div>
            {subtitles.map((sub, index) => {
                return <input key={index} type="text" className="subtitle" value={sub} onChange={e => handleSubtitles(e, index)}></input>
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