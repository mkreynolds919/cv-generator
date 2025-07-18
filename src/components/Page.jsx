import Header from "./Header.jsx";
import Summary from "./Summary.jsx";
import Education from "./Education.jsx";
import Experience from "./Experience.jsx";
import Skills from "./Skills.jsx";
import Projects from "./Projects.jsx";


export default function Page( { setData, header, summary, education, experience, skills, projects }) {

    return (
        <div className="page-container">
            <Header data={header} setData={setData} />
            <Summary data={summary} setData={setData} />
            <Education data={education} setData={setData} />
            <Experience data={experience} setData={setData} />
            <Skills data={skills} setData={setData} />
            <Projects data={projects} setData={setData} />
        </div>
    );
}