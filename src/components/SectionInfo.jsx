import { useState } from 'react';
import "../styles/SectionInfo.css";

export default function SectionInfo({ name, location, startDate, endDate, subtitles, bullets, setData, id, source, isEditing, deleteSection }) {
    const [hoveredBulletIndex, setHoveredBulletIndex] = useState(null);

    function handleInfo(e, item) {
        const itemData = e.target.value;
        
        setData((prevData) => ({
                    ...prevData,
                    [source]: prevData[source].map((obj) =>
                        id === obj.id ? { ...obj, [item]: (itemData === "" ? " " : itemData) } : obj
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

    function addBullet() {
        setData((prevData) => ({
            ...prevData,
            [source]: prevData[source].map((obj) =>
                id === obj.id ? {
                    ...obj,
                    bullets: [
                        ...obj.bullets,
                        "New bullet",
                    ]
                } : obj
            ),
        }))
    }

    function deleteBullet(index) {
        setData((prevData) => ({
            ...prevData,
            [source]: prevData[source].map((obj) => 
                id === obj.id ? {
                    ...obj,
                    bullets: obj.bullets.filter((b, i) => {
                        return i !== index
                    })
                } : obj
            ),
        }))
    }


    if (isEditing) {
        return (
            <div className="info-container">
                <div className="top-line">
                    <input type="text" className="info-name" value={name} onChange={e => handleInfo(e, "name")} style={{width: `${Math.max(name.length + 2, 1)}ch`}}></input>
                    {location && <input type="text" className="info-location" value={location} onChange={e => handleInfo(e, "location")} style={{width: `${Math.max(location.length + 2, 1)}ch`}}></input>}
                    <div className="date-container">
                        <input type="text" className="start-date" value={startDate} onChange={e => handleInfo(e, "startDate")} style={{width: `${Math.max(startDate.length + 2, 1)}ch`}}></input>
                        <span className="hypen">-</span>
                        <input type="text" className="end-date" value={endDate} onChange={e => handleInfo(e, "endDate")} style={{width: `${Math.max(endDate.length + 2, 1)}ch`}}></input>
                    </div>
                    {isEditing && <button className="delete-section-button" onClick={() => deleteSection(id)}>✕</button>}
                </div>
                {subtitles.map((sub, index) => {
                    return <input key={index} type="text" className="subtitle" value={sub} onChange={e => handleSubtitles(e, index)} style={{width: `${Math.max(sub.length + 2, 1)}ch`}}></input>
                })}
                {bullets && <ul className="bullets">
                                {bullets.map((bullet, index) => {
                                    return <li className="bullet" key={index} onMouseEnter={() => setHoveredBulletIndex(index)} onMouseLeave={() => setHoveredBulletIndex(null)}>
                                                <input type="text" className="bullet-input" value={bullet} onChange={e => handleBullets(e, index)}></input>
                                                {hoveredBulletIndex === index && <button className="delete-bullet-button" onClick={() => deleteBullet(index)}>✕</button>}
                                            </li>
                                })}
                            </ul>}
                {isEditing && <button className="add-bullet-button" onClick={() => addBullet()}>+</button>}
            </div>
        );
    } else {
        return (
            <div className="info-container">
                <div className="top-line">
                    <div className="info-name">{name}</div>
                    {location && <div className="info-location">{location}</div>}
                    <div className="date-container">
                        <div className="start-date">{startDate}</div>
                        <div className="hypen">-</div>
                        <div className="end-date">{endDate}</div>
                    </div>
                </div>
                {subtitles.map((sub) => {
                    return <div className="subtitle" key={sub}>{sub}</div>
                })}
                {bullets && <ul className="bullets">
                                {bullets.map((bullet) => {
                                    return <li className="bullet" key={bullet}>{bullet}</li>             
                                })}
                            </ul>}
            </div>
        );
    }

    
}