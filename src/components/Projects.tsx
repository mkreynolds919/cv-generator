
import SectionInfo from "./SectionInfo.js";
import type {ResumeData} from '../data/initialData';
import type {Dispatch, SetStateAction} from 'react';

type Props = {
    data: ResumeData,
    setData: Dispatch<SetStateAction<ResumeData>>,
    isEditing: boolean,
}

export default function Projects({ data, setData, isEditing }: Props) {

    function addProject() {
        setData((prevData) => ({
            ...prevData,
            projects: [
                ...prevData.projects,
                {
                    name: "Project/Experience Title",
                    startDate: "1/1/2000",
                    endDate: "1/1/2025",
                    subtitles: ["Add a short description of your project or additional experience"],
                    bullets: ["Skills used", "Project impact"],
                    id: crypto.randomUUID(),
                }
            ]
        }));
    }

    function deleteProject(id: string) {
        setData((prevData) => ({
            ...prevData,
            projects: prevData.projects.filter((proj) => {
                return proj.id !== id;
            })
        }));
    }



    return (
            <div className="projects-container section">
                <h1 className="section-header">Projects</h1>
                <hr></hr>
                {data.map((proj) => {
                    return (
                            <SectionInfo 
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
                            isEditing={isEditing}
                            deleteSection={deleteProject}
                            />
                    )
                })}
                {isEditing && <button className="add-section-button" onClick={() => addProject()}>+</button>}
            </div>
    );
}