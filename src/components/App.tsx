import '../styles/App.css'
import Page from "./Page";
import {initialData, type ResumeData} from "../data/initialData";
import { useState } from 'react';

function App() {
  const [data, setData] = useState<ResumeData>(initialData);
  const [isEditing, setIsEditing] = useState<boolean>(true);
  const { header, summary, education, experience, skills, projects } = data;

  return (
    <>
      <Page setData={setData} header={header} summary={summary} education={education} experience={experience} skills={skills} projects={projects} isEditing={isEditing}/>
      <div className="page-button-container">
        <button className="edit-button" onClick={() => setIsEditing(true)}>Edit</button>
        <button className="done-button" onClick={() => setIsEditing(false)}>Done</button>
      </div>
    </>
  )
}

export default App
