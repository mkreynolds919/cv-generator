import Header from "./Header";
import Summary from "./Summary";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";
import type {Dispatch, SetStateAction} from 'react';
import type {ResumeData} from '../data/initialData';

import "../styles/Page.css";

type Props = {
    setData:  Dispatch<SetStateAction<ResumeData>>,
    header: ResumeData["header"],
    summary: ResumeData["summary"],
    education: ResumeData["education"],
    experience: ResumeData["experience"],
    skills: ResumeData["skills"],
    projects: ResumeData["projects"],
    isEditing: boolean,
}

export default function Page( { setData, header, summary, education, experience, skills, projects, isEditing } : Props) {

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