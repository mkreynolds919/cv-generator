const initialData = {
    header: {
        name: "Your Name",
        title: "Title/Role",
        location: "City, State",
        phone: "123-456-7890",
        email: "youremail@example.com",
    },
    summary: "Insert a small description about yourself and your potential contributions to a future role. \
              What are some ways you like to collaborate? Highlight your skills and reputation.",
    education: [{
        name: "Your University",
        location: "City, State",
        startDate: "1/1/2000",
        endDate: "1/1/2025",
        subtitles: ["First Degree", "Second Degree"],
        bullets: ["Club Contributions", "Research", "GPA"],
        id: crypto.randomUUID(),
    },],
    experience: [{
       name: "Company Name",
       location: "City, State",
       startDate: "1/1/2000",
       endDate: "1/1/2025",
       subtitles: ["Title/Role"],
       bullets: ["Contributions", "Responsibilities"],
       id: crypto.randomUUID(),
    },],
    skills: ["Skill1", "Skill2", "Skill3"],
    projects: [{
        name: "Project/Experience Title",
        startDate: "1/1/2000",
        endDate: "1/1/2025",
        subtitles: ["Add a short description of your project or additional experience"],
        bullets: ["Skills used", "Project impact"],
        id: crypto.randomUUID(),
    },],
}

export default initialData;