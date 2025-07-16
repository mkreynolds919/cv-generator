import '../styles/App.css'
import initialData from "../data/initialData.js";
import { useState } from 'react';

function App() {
  const { header, summary, education, experience, skills, projects } = initialData;
  const [data, setData] = useState(initialData);

  return (
    <>
      <Page data={data} setData={setData} header={header} summary={summary} education={education} experience={experience} skills={skills} projects={projects} />
    </>
  )
}

export default App
