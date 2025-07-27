
import SectionInfo from "./SectionInfo.jsx";

export default function Education({ data, setData, isEditing }) {

    function addEducation() {
        setData((prevData) => ({
            ...prevData,
            education: [
                ...prevData.education,
                {
                    name: "Your University",
                    location: "City, State",
                    startDate: "1/1/2000",
                    endDate: "1/1/2025",
                    subtitles: ["First Degree", "Second Degree"],
                    bullets: ["Club Contributions", "Research", "GPA"],
                    id: crypto.randomUUID(),
                }
            ]
        }));
    }


    function deleteEducation(id) {
        setData((prevData) => ({
            ...prevData,
            education: prevData.education.filter((school) => {
                return school.id !== id;
            })
        }));
    }


    return (
        <div className="education-container section">
            <h1 className="section-header">Education</h1>
            <hr></hr>
            {data.map(school => {
                return (
                        <SectionInfo 
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
                        deleteSection={deleteEducation}
                        />
                    )
            })}
            {isEditing && <button className="add-section-button" onClick={() => addEducation()}>+</button>}
        </div>
    );
}