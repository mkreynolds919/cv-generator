
import SectionInfo from "./SectionInfo.jsx";

export default function Education({ data, setData, isEditing }) {
    return (
        <div className="education-container section">
            <h1 className="section-header">Education</h1>
            <hr></hr>
            {data.map(school => {
                return <SectionInfo 
                        name={school.name} 
                        location={school.location} 
                        startDate={school.startDate}
                        endDate={school.endDate}
                        subtitles={school.subtitles}
                        bullets={school.bullets}
                        setData={setData}
                        key={school.id}
                        id={school.id}
                        source="education"
                        isEditing={isEditing}
                        />
            })}
        </div>
    );
}