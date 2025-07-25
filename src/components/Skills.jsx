
import React from "react";
import "../styles/Skills.css";

export default function Skills({ data, setData, isEditing }) {

    function handleSkill(e, index) {
        const itemData = e.target.value;

        setData((prevData) => ({
            ...prevData,
            skills: prevData.skills.map((b, i) => i === index ? itemData : b),
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
                            <React.Fragment key={skill}>
                                <input key={index} type="text" className="skill" value={skill} onChange={e => handleSkill(e, index)} style={{width: `${Math.max(skill.length, 1)}ch`}}></input>
                                {index < data.length - 1 && <span key={"hypen"+index} className="hypen">-</span>}
                            </React.Fragment>
                        );
                    })}
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