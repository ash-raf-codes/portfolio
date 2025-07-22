export const About = () => {
    
    const progSkills = ["Python", "Java", "C/C++", "JavaScript", "HTML", "CSS", "MATLAB", "R", "SQL", "JUnit", "NodeJS", "Scikit-learn", "Pandas", "NumPy", "Gradle", "Maven", "JSON", "Jest", "Selenium"];
    const frameworks = ["MySQL", "PostgreSQL", "Redis", "JMeter", "Docker", "Postman", "AWS", "Azure", "Git", "Kubernetes", "Jenkins", "Agile", "Scrum", "TDD", "Jira", "SonarQube", "Vite", "TailwindCSS", "Microsoft Office"];
    return (
        <section 
            id="about" 
            className="min-h-screen flex items-center justify-center py-20"
        >
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold-mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"
                >
                    About Me
                </h2>

                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 mb-6">
                        Full-stack software engineer specializing in Python, Java, JavaScript, cloud platforms (AWS, Azure), 
                        and automated testing frameworks. Experienced in microservices architecture, CI/CD pipelines, 
                        containerization, and agile methodologies with proven ability to reduce development lifecycles by 50%. 
                        Passionate about integrating AI/machine learning technologies into enterprise applications and intelligent automation solutions.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Programming Languages & Frameworks</h3>
                            <div className="flex flex-wrap gap-2">
                                {progSkills.map((tech, key) => (
                                    <span 
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                                        key={key}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Technologies & Methodologies</h3>
                            <div className="flex flex-wrap gap-2">
                                {frameworks.map((tech, key) => (
                                    <span 
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                                        key={key}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">Education</h3>
                    <ul>
                        <li>
                            <strong>Bachelor of Software Engineering (With Distinction)</strong> - University of Victoria (2020-2025)
                        </li>
                        <li>
                            <strong>Specialization:</strong> Data mining and analysis, artificial intelligence, and machine learning
                        </li>
                        <li>
                            <strong>GPA:</strong> 3.92/4.0
                        </li>
                    </ul>
                </div>
                
                 
                 <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">
                                    Work Expereince
                                </h3>
                        </div>
                
            </div>
            
        </section>

    );
};