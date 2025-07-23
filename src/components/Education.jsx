
import SectionInfo from "./SectionInfo.jsx";

export default function Education({ setData, data }) {
    return (
        <div className="education-container section">
            <h1 className="section-header">Education</h1>
            <hr></hr>
            {data.map(school => {
                return <SectionInfo 
                        university={school.university} 
                        location={school.location} 
                        startDate={school.startDate}
                        endDate={school.endDate}
                        degrees={school.degrees}
                        bullets={school.bullets}
                        setData={setData}
                        key={school.id}
                        />
            })}
        </div>
    );
}