import '../styles/App.css'
import Page from "./Page.jsx";
import initialData from "../data/initialData.js";
import { useState } from 'react';

function App() {
  const [data, setData] = useState(initialData);
  const { header, summary, education, experience, skills, projects } = data;

  return (
    <>
      <Page setData={setData} header={header} summary={summary} education={education} experience={experience} skills={skills} projects={projects} />
    </>
  )
}

export default App
