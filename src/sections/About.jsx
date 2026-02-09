import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
    {
        icon: Code2,
        title: "Clean Code",
        description:
            "Writing maintainable, scalable code that stands the test of time.",
    },
    {
        icon: Rocket,
        title: "Performance",
        description:
            "Optimizing for speed and delivering lightning-fast user experiences.",
    },
    {
        icon: Users,
        title: "Collaboration",
        description: "Working closely with teams to bring ideas to life.",
    },
    {
        icon: Lightbulb,
        title: "Innovation",
        description:
            "Staying ahead with the latest technologies and best practices.",
    },
];

const education = [
    {
        period: "2023 — Present",
        degree: "B.Tech CSE (Full Stack Development & DevOps)",
        institution: "DIT University , Dehradun.",
        grades: "Grade : 7.98 CGPA",
        description:
            "As an active member of Google Developer Student Clubs (GDSC) Dehradun,I actively participated in learning new-age technologies, collaborated within the developer community, and helped organize technical sessions, mentorship programs, and coding contests..",
        skills: ["React", "Tailwind CSS", "Docker", "Mongo DB", "Git / GitHub"],
        current: true,
    },
    {
        period: "2021 — 2023",
        degree: "Senior Secondary Schooling",
        institution: "SGRR Public School , Dehradun.",
        grades: "Grade : 85 % ",
        description:
            "Served as School Discipline Captain, I led student coordination and maintained campus discipline, hosted assemblies and coordinated institutional events. This experience enhanced my leadership, project management, and interpersonal communication skills, serving as a liaison between students and school management to ensure effective and fair coordination.",
        skills: ["Python", "My SQL", "Leadership", "Problem Solving"],
        current: false,
    },
    {
        period: "2015 — 2021",
        degree: "High Schooling",
        institution: "Vidya Vihar Residential School , Purnea.",
        grades: "Grade : 88 % ",
        description:
            "I served as School Vice Captain in grade 10, contributing to student coordination and day-to-day school activities. I was also recognized as the top Hindi debater, winning multiple intra- and inter-school competitions. These experiences enhanced my public speaking, confidence, and leadership skills, while strengthening my ability to represent peers effectively and communicate ideas clearly in diverse settings.",
        skills: ["Leadership", "Public Speaking", "Team Work", "Project Management"],
        current: false,
    },
    {
        period: "2009 — 2015",
        degree: "Primary Schooling",
        institution: "Delhi Public School , Sitamarhi.",
        grades: "Grade : 92 % ",
        description:
            "Completed primary schooling with a strong focus on foundational learning and overall development. Actively participated in classroom activities, group tasks, and early stage competitions, which nurtured curiosity, discipline, and communication skills while building the academic base and confidence that supported my later achievements.",
        skills: ["Discipline", "Creative Thinking", "Making Friends", "Vocabulary Building"],
        current: false,
    },
    
];

export const About = () => {
    return (
        <section id="about" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="text-secondary-foreground text-sm font-semibold tracking-wider uppercase">
                                About Me
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                            Building the future,
                            <span className="font-serif italic font-normal text-white">
                                {" "}
                                one component at a time.
                            </span>
                        </h2>

                        <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                            <p>
                                I'm a passionate software engineer with over 5 years of
                                experience crafting digital products that make a difference. My
                                journey started with a curiosity for how things work on the web,
                                and it has evolved into a deep expertise in modern frontend
                                technologies.
                            </p>
                            <p>
                                I specialize in React, Next.js, and TypeScript, building
                                everything from sleek landing pages to complex enterprise
                                applications. My approach combines technical excellence with a
                                keen eye for design and user experience.
                            </p>
                            <p>
                                When I'm not coding, you'll find me exploring new technologies,
                                contributing to open-source projects, or sharing knowledge with
                                the developer community.
                            </p>
                        </div>

                        <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                            <p className="text-lg font-medium italic text-foreground">
                                "My mission is to create digital experiences that are not just
                                functional, but truly delightful — products that users love to
                                use and developers love to maintain."
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Hilights */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        {highlights.map((item, idx) => (
                            <div
                                key={idx}
                                className="glass p-6 rounded-2xl animate-fade-in"
                                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                            >
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                                    <item.icon className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                <p className="text-sm text-muted-foreground">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>


                {/* Section Header */}
                <div className="max-w-3xl mb-16 mt-20">
                    <span
                        className="text-secondary-foreground text-sm
           font-semibold tracking-wider uppercase animate-fade-in"
                    >
                        Educational Journey
                    </span>
                    <h2
                        className="text-4xl md:text-5xl font-bold
           mt-4 mb-6 animate-fade-in animation-delay-100
            text-secondary-foreground"
                    >
                        Education that{" "}
                        <span className="text-white">shaped my</span>
                        <span className="font-serif italic font-normal text-white">
                            {" "}
                            engineering mindset.
                        </span>
                    </h2>

                    <p
                        className="text-muted-foreground
           animate-fade-in animation-delay-200"
                    >
                        A timeline of my academic journey — where curiosity turned into structured thinking and 
                        fundamentals into real-world problem solving.
                    </p>
                </div>
                
                {/* Timeline */}
                <div className="relative mt-15">
                    <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

                    {/* Experience Items */}
                    <div className="space-y-12">
                        {education.map((exp, idx) => (
                            <div
                                key={idx}
                                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                                    {exp.current && (
                                        <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                                    )}
                                </div>

                                {/* Content */}
                                <div
                                    className={`pl-8 md:pl-0 ${idx % 2 === 0
                                        ? "md:pr-16 md:text-right"
                                        : "md:col-start-2 md:pl-16"
                                        }`}
                                >
                                    <div
                                        className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                                    >
                                        <span className="text-sm text-primary font-medium">
                                            {exp.period}
                                        </span>
                                        <h3 className="text-xl font-semibold mt-2">{exp.degree}</h3>
                                        <p className="text-muted-foreground text-lg font-semibold">{exp.institution}</p>
                                        <h5 className=" font-sm text-muted-foreground ">{exp.grades}</h5>
                                        <p className="text-sm text-muted-foreground mt-4">
                                            {exp.description}
                                        </p>
                                        <div
                                            className={`flex flex-wrap gap-2 mt-4 ${idx % 2 === 0 ? "md:justify-end" : ""
                                                }`}
                                        >
                                            {exp.skills.map((tech, techIdx) => (
                                                <span
                                                    key={techIdx}
                                                    className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};