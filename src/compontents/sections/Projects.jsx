import RevealOnScroll from "../RevealOnScroll";

export const Projects = () => {
    return (
        <section 
                id="projects" 
                className="min-h-screen flex items-center justify-center"
        >
            <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold-mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"
                >
                    Feautred Projects
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-2">Project 1: Vikesplace Marketplace</h3>
                        <p className="text-gray-400 mb-4">
                            The marketplace is a high-performance, cloud-deployed platform designed to handle peak traffic of up to 20,000 users. 
                            It features secure authentication, fast response times through Redis caching, and robust backend services containerized with Docker and Kubernetes. 
                            The system is fully tested with 97% API coverage and continuously optimized for reliability and scalability.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["JavaScript","REST APIs", "Automated Testing","JMeter","Docker","Kubernetes","Redis","AWS","Agile / Scrum"].map((tech, key) => (   
                                <span 
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                    key={key}
                                >
                                    {tech}
                                </span>
                            ))}     
                        </div>

                        <div className="flex justify-between items-center mt-4">
                            <a 
                                href="https://github.com/ash-raf-codes/Vikesplace" 
                                className="text-blue-300 transition-colors my-4"
                                target="_blank"
                                rel="noopener noreferrer"
                            > 
                                <strong>View Project → </strong> </a>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-2">Project 2: Deadline-Driven Scheduler</h3>
                        <p className="text-gray-400 mb-4">
                            Designed and implemented a real-time Deadline-Driven Scheduler in C on an STM32 microcontroller using FreeRTOS. 
                            The system uses Earliest Deadline First (EDF) scheduling to dynamically manage tasks, enable inter-task communication, and monitor performance in real time. 
                            It ensures time-critical operations run reliably and efficiently.
                        </p>
                        <div>
                            {["C Programming","Data Flow Diagrams (DFD)","FreeRTOS","STM32 Microcontroller","Real-Time Systems","Embedded Systems", "Dynamic Task Management","Performance Monitoring", "UML Diagrams"].map((tech, key) => (   
                                <span 
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                    key={key}
                                >
                                    {tech}
                                </span>
                            ))}     
                        </div>

                        <div className="flex justify-between items-center mt-4">
                            <a 
                                href="https://github.com/ash-raf-codes/DDS_Proj" 
                                className="text-blue-300 transition-colors my-4" 
                                target="_blank"
                                rel="noopener noreferrer"
                            > 
                                <strong>View Project → </strong> 
                            </a>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-2">Project 3: Audio Compression and Decompression</h3>
                        <p className="text-gray-400 mb-4">
                            I developed a μ-law audio compressor and decompressor in C for WAV files, optimized for ARM systems. 
                            Using techniques like loop unrolling and GCC’s -O3 flag, I reduced processing time under 0.13s. 
                            The project explores both software efficiency and potential hardware acceleration for real-time audio applications.
                        </p>
                        <div>
                            {["C Programming","Embedded Systems","Audio Signal Processing","μ-Law Compression","WAV File I/O","ARM Architecture Optimization", "GCC Compiler Optimization (-O3)","Performance Benchmarking","Software-Hardware Co-design","File Parsing", "VM", "ARM Emulation"].map((tech, key) => (   
                                <span 
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                    key={key}
                                >
                                    {tech}
                                </span>
                            ))}     
                        </div>

                        <div className="flex justify-between items-center mt-4">
                            <a 
                                href="https://github.com/ash-raf-codes/seng-440" 
                                className="text-blue-300 transition-colors my-4" 
                                target="_blank"
                                rel="noopener noreferrer"
                            > 
                                <strong>View Project → </strong> 
                            </a>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-2">Project 4: Patient Management System (OOP)</h3>
                        <p className="text-gray-400 mb-4">
                            I developed this patient management software system with my group for SENG 350 (Software Architecture). 
                            The system manages patient information and healthcare operations, demonstrating the software architecture principles and design patterns I learned in the course.
                        </p>
                        <div>
                            {["Java", "JavaScript", "SQL", "HTML5", "CSS3", "Spring Boot", "REST API", "Object-Oriented Programming", "Database Design", "Microservices", "UML Diagrams"].map((tech, key) => (   
                                <span 
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                    key={key}
                                >
                                    {tech}
                                </span>
                            ))}     
                        </div>

                        <div className="flex justify-between items-center mt-4">
                            <a 
                                href="https://github.com/ash-raf-codes/Paitient_Management_System_proj" 
                                className="text-blue-300 transition-colors my-4" 
                                target="_blank"
                                rel="noopener noreferrer"
                            > 
                                <strong>View Project → </strong> 
                            </a>
                        </div>
                    </div>

                </div>
            </div>
            </RevealOnScroll>
        </section>
    );
}