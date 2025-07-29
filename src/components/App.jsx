import '../styles/App.css'
import Page from "./Page.jsx";
import ControlPanel from "./ControlPanel.jsx";
import initialData from "../data/initialData.js";
import { useState, useRef } from 'react';

function App() {
  const [data, setData] = useState(initialData);
  const [isEditing, setIsEditing] = useState(true);
  const { header, summary, education, experience, skills, projects } = data;
  const printRef = useRef();

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <div ref={printRef} className="cv-page">
        <Page setData={setData} header={header} summary={summary} education={education} experience={experience} skills={skills} projects={projects} isEditing={isEditing}/>
      </div>
      <ControlPanel />
    </>
  )
}

export default App
