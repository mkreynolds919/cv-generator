
import SectionInfo from "./SectionInfo.jsx";

export default function Experience({ data, setData, isEditing }) {
    return (
            <div className="experience-container section">
                <h1 className="section-header">Experience</h1>
                <hr></hr>
                {data.map(exp => {
                    return <SectionInfo 
                            name={exp.name} 
                            location={exp.location} 
                            startDate={exp.startDate}
                            endDate={exp.endDate}
                            subtitles={exp.subtitles}
                            bullets={exp.bullets}
                            setData={setData}
                            key={exp.id}
                            id={exp.id}
                            source="experience"
                            isEditing={isEditing}
                            />
                })}
            </div>
    );
}