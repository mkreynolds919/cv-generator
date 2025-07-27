
import SectionInfo from "./SectionInfo.jsx";

export default function Experience({ data, setData, isEditing }) {

    function addExperience() {
        setData((prevData) => ({
            ...prevData,
            experience: [
                ...prevData.experience,
                {
                    name: "Company Name",
                    location: "City, State",
                    startDate: "1/1/2000",
                    endDate: "1/1/2025",
                    subtitles: ["Title/Role"],
                    bullets: ["Contributions", "Responsibilities"],
                    id: crypto.randomUUID(),
                }
            ]
        }));
    }

    function deleteExperience(id) {
        setData((prevData) => ({
            ...prevData,
            experience: prevData.experience.filter((exp) => {
                return exp.id !== id;
            })
        }));
    }
    return (
            <div className="experience-container section">
                <h1 className="section-header">Experience</h1>
                <hr></hr>
                {data.map(exp => {
                    return (
                            <SectionInfo 
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
                            deleteSection={deleteExperience}
                            />
                    )
                })}
                {isEditing && <button className="add-section-button" onClick={() => addExperience()}>+</button>}
            </div>
    );
}