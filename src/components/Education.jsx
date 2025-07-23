
export default function Education({ setData, education }) {
    return (
        <div className="education-container section">
            <h1 className="section-header">Education</h1>
            <hr></hr>
            {education.map(school => {
                return <SectionInfo 
                        university={school.university} 
                        location={school.location} 
                        startDate={school.startDate}
                        endDate={school.endDate}
                        degrees={school.degrees}
                        bullets={school.bullets}
                        setData={setData}
                        key={school.id}
                        />
            })}
        </div>
    );
}