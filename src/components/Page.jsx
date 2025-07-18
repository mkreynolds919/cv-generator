
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