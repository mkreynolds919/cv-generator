
import React, { useState } from "react";
import "../styles/Skills.css";

export default function Skills({ data, setData, isEditing }) {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    function handleSkill(e, index) {
        const itemData = e.target.value;

        setData((prevData) => ({
            ...prevData,
            skills: prevData.skills.map((b, i) => i === index ? itemData : b),
        }));
    }

    function addSkill() {
        setData((prevData) => ({
            ...prevData,
            skills: [
                ...prevData.skills,
                "New Skill",
            ]
        }))
    }

    function deleteSkill(index) {
        setData((prevData) => ({
            ...prevData,
            skills: prevData.skills.filter((_, i) => i !== index),
        }));
    }


    if (isEditing) {
        return (
            <div className="skills-container section">
                <h1 className="section-header">Skills</h1>
                <hr></hr>
                <div className="inner">
                    {data.map((skill, index) => {
                        return (
                            <div key={index} className="skill-wrapper" onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)}>
                                <input key={index} type="text" className="skill" value={skill} onChange={e => handleSkill(e, index)} style={{width: `${Math.max(skill.length, 1)}ch`}}></input>
                                {hoveredIndex === index && (
                                    <button
                                        className="delete-skill-button"
                                        onClick={() => deleteSkill(index)}
                                    >✕</button>
                                )}
                                {index < data.length - 1 && <span key={"hypen"+index} className="hypen">-</span>}
                            </div>
                        );
                    })}
                    <button className="add-skill-button" onClick={() => addSkill()}>+</button>
                </div>
                
            </div>
        );
    } else {
        return (
            <div className="skills-container section">
                <h1 className="section-header">Skills</h1>
                <hr></hr>
                <div className="inner">
                    {data.map((skill, index) => {
                        return (
                            <React.Fragment key={skill}>
                                <div key={index} className="skill">{skill}</div>
                                {index < data.length - 1 && <div key={"hypen"+index} className="hypen">-</div>}
                            </React.Fragment>
                        );
                    })}
                </div>
            </div>
        );
    }

    
}