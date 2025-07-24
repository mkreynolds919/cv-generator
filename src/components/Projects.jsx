
import SectionInfo from "./SectionInfo.jsx";

export default function Projects({ data, setData }) {
    return (
            <div className="projects-container section">
                <h1 className="section-header">Projects</h1>
                <hr></hr>
                {data.map((proj) => {
                    return <SectionInfo 
                            name={proj.name} 
                            location={null}
                            startDate={proj.startDate}
                            endDate={proj.endDate}
                            subtitles={proj.subtitles}
                            bullets={proj.bullets}
                            setData={setData}
                            key={proj.id}
                            id={proj.id}
                            source="projects"
                            />
                })}
            </div>
    );
}