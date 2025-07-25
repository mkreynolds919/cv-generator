import Header from "./Header.jsx";
import Summary from "./Summary.jsx";
import Education from "./Education.jsx";
import Experience from "./Experience.jsx";
import Skills from "./Skills.jsx";
import Projects from "./Projects.jsx";

import "../styles/Page.css";


export default function Page( { setData, header, summary, education, experience, skills, projects, isEditing }) {

    return (
        <div className="page-container">
            <Header data={header} setData={setData} isEditing={isEditing} />
            <Summary data={summary} setData={setData} isEditing={isEditing} />
            <Education data={education} setData={setData} isEditing={isEditing} />
            <Experience data={experience} setData={setData} isEditing={isEditing} />
            <Skills data={skills} setData={setData} isEditing={isEditing} />
            <Projects data={projects} setData={setData} isEditing={isEditing} />
        </div>
    );
}