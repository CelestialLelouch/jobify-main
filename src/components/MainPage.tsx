import "./maincvpage.css";

import React, { useContext, useState, useRef  } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Context } from "../Contexts/CVContext";

import TemplateOne from "./cv-templates/Template1";
import TemplateTwo from "./cv-templates/Template2";
import TemplateThree from "./cv-templates/Template3";
import { ExperienceEntry } from "./entry-components/ExperienceEntry";
import { EducationEntry } from "./entry-components/EducationEntry";
import { ReferenceEntry } from "./entry-components/ReferenceEntry";
import { ProjectEntry } from "./entry-components/ProjectEntry";
import SkillEntry, {AchievementEntry, LanguageEntry} from "./entry-components/SingleEntryComponent";
import TemplateZero from "./cv-templates/TemplateZero";
import TemplateNavigation from "./Navigation";
import DownloadButton from "./Buttons/DownloadButton";


const MainCVPage: React.FC = () => {
    const {sharedState, eduState, expState, skillState, achievementState, languageState, matricState, referenceState, projectState, navigationState} = useContext(Context);

    const navState = navigationState();

    const [personalInfoActive, setPerosnalInfoActive] = useState<boolean>(true);
    const [educationActive, setEducationActive] = useState<boolean>(false);
    const [experienceActive, setExperienceActive] = useState<boolean>(false);
    const [skillsActive, setSkillActive] = useState<boolean>(false);
    const [achievementsActive, setAchievementsActive] = useState<boolean>(false);
    const [languageActive, setLanguageActive] = useState<boolean>(false);
    const [referenceActive, setReferenceActive] = useState<boolean>(false);
    const [projectActive, setProjectActive] = useState<boolean>(false);
    const stateHook = sharedState();
    const matric = matricState();

    const eduSetters = [
        eduState(),
        eduState(),
        eduState(),
        eduState(),
        eduState(),
        eduState(),
        eduState(),
        eduState(),
        eduState(),
        eduState()
    ];
    
    const expSetters =[
        expState(),
        expState(),
        expState(),
        expState(),
        expState(),
        expState(),
        expState(),
        expState(),
        expState(),
        expState(),
    ];

    const skillSetters =[
        skillState(),
        skillState(),
        skillState(),
        skillState(),
        skillState(),
        skillState(),
        skillState(),
        skillState(),
        skillState(),
        skillState(),
    ];

    const achievementSetters =[
        achievementState(),
        achievementState(),
        achievementState(),
        achievementState(),
        achievementState(),
        achievementState(),
        achievementState(),
        achievementState(),
        achievementState(),
        achievementState(),
    ];

    const languageSetter = [
        languageState(),
        languageState(),
        languageState(),
        languageState(),
        languageState(),
        languageState(),
        languageState(),
        languageState(),
        languageState(),
        languageState(),
    ]

    const referenceSetters = [
        referenceState(),
        referenceState(),
        referenceState(),
        referenceState(),
        referenceState(),
    ]

    const projectSetters = [
        projectState(),
        projectState(),
        projectState(),
        projectState(),
        projectState(),
    ]

    const educationData : any[] = [
        {
            key: 0,
            institution: eduSetters[0].institution,
            course: eduSetters[0].course,
            location: eduSetters[0].location,
            level: eduSetters[0].level,
            startDate: eduSetters[0].startDate,
            graduationDate: eduSetters[0].graduationDate
        },
        {
            key: 1,
            institution: eduSetters[1].institution,
            course: eduSetters[1].course,
            location: eduSetters[1].location,
            level: eduSetters[1].level,
            startDate: eduSetters[1].startDate,
            graduationDate: eduSetters[1].graduationDate
        },
        {
            key: 2,
            institution: eduSetters[2].institution,
            course: eduSetters[2].course,
            location: eduSetters[2].location,
            level: eduSetters[2].level,
            startDate: eduSetters[2].startDate,
            graduationDate: eduSetters[2].graduationDate
        },
        {
            key: 3,
            institution: eduSetters[3].institution,
            course: eduSetters[3].course,
            location: eduSetters[3].location,
            level: eduSetters[3].level,
            startDate: eduSetters[3].startDate,
            graduationDate: eduSetters[3].graduationDate
        },
        {
            
            key: 4,
            institution: eduSetters[4].institution,
            course: eduSetters[4].course,
            location: eduSetters[4].location,
            level: eduSetters[4].level,
            startDate: eduSetters[4].startDate,
            graduationDate: eduSetters[4].graduationDate
            
        },
        {
            key: 5,
            institution: eduSetters[5].institution,
            course: eduSetters[5].course,
            location: eduSetters[5].location,
            level: eduSetters[5].level,
            startDate: eduSetters[5].startDate,
            graduationDate: eduSetters[5].graduationDate
        },
        {
            key: 6,
            institution: eduSetters[6].institution,
            course: eduSetters[6].course,
            location: eduSetters[6].location,
            level: eduSetters[6].level,
            startDate: eduSetters[6].startDate,
            graduationDate: eduSetters[6].graduationDate
        },
        {
            key: 7,
            institution: eduSetters[7].institution,
            course: eduSetters[7].course,
            location: eduSetters[7].location,
            level: eduSetters[7].level,
            startDate: eduSetters[7].startDate,
            graduationDate: eduSetters[7].graduationDate
        },
        {
            key: 8,
            institution: eduSetters[8].institution,
            course: eduSetters[8].course,
            location:eduSetters[8].location,
            level: eduSetters[8].level,
            startDate: eduSetters[8].startDate,
            graduationDate: eduSetters[8].graduationDate
        },
        {
            key: 9,
            institution: eduSetters[9].institution,
            course: eduSetters[9].course,
            location: eduSetters[9].location,
            level: eduSetters[9].level,
            startDate: eduSetters[9].startDate,
            graduationDate: eduSetters[9].graduationDate
        }

    ];

    const experienceData : any[] = [
        {
            key: 0,
            workplace: expSetters[0].workplace,
            address: expSetters[0].address,
            telephone: expSetters[0].telephone,
            role: expSetters[0].role,
            startDate: expSetters[0].startDate,
            endDate: expSetters[0].endDate,
            description: expSetters[0].description
        },
        {
            key: 1,
            workplace: expSetters[1].workplace,
            address: expSetters[1].address,
            telephone: expSetters[1].telephone,
            role: expSetters[1].role,
            startDate: expSetters[1].startDate,
            endDate: expSetters[1].endDate,
            description: expSetters[1].description
        },
        {
            key: 2,
            workplace: expSetters[2].workplace,
            address: expSetters[2].address,
            telephone: expSetters[2].telephone,
            role: expSetters[2].role,
            startDate: expSetters[2].startDate,
            endDate: expSetters[2].endDate,
            description: expSetters[2].description
        },
        {
            key: 3,
            workplace: expSetters[3].workplace,
            address: expSetters[3].address,
            telephone: expSetters[3].telephone,
            role: expSetters[3].role,
            startDate: expSetters[3].startDate,
            endDate: expSetters[3].endDate,
            description: expSetters[3].description
        },
        {
            key: 4,
            workplace: expSetters[4].workplace,
            address: expSetters[4].address,
            telephone: expSetters[4].telephone,
            role: expSetters[4].role,
            startDate: expSetters[4].startDate,
            endDate: expSetters[4].endDate,
            description: expSetters[4].description
        },
        {
            key: 5,
            workplace: expSetters[5].workplace,
            address: expSetters[5].address,
            telephone: expSetters[5].telephone,
            role: expSetters[5].role,
            startDate: expSetters[5].startDate,
            endDate: expSetters[5].endDate,
            description: expSetters[5].description
        },
        {
            key: 6,
            workplace: expSetters[6].workplace,
            address: expSetters[6].address,
            telephone: expSetters[6].telephone,
            role: expSetters[6].role,
            startDate: expSetters[6].startDate,
            endDate: expSetters[6].endDate,
            description: expSetters[6].description
        },
        {
            key: 8,
            workplace: expSetters[8].workplace,
            address: expSetters[8].address,
            telephone: expSetters[8].telephone,
            role: expSetters[8].role,
            startDate: expSetters[8].startDate,
            endDate: expSetters[8].endDate,
            description: expSetters[8].description
        },
        {
            key: 9,
            workplace: expSetters[9].workplace,
            address: expSetters[9].address,
            telephone: expSetters[9].telephone,
            role: expSetters[9].role,
            startDate: expSetters[9].startDate,
            endDate: expSetters[9].endDate,
            description: expSetters[9].description
        }
    ];

    const skills : any[]  = [
        {
            key: 0,
            skill: skillSetters[0].skill,
        },
        {
            key: 1,
            skill: skillSetters[1].skill,
        },
        {
            key:2,
            skill: skillSetters[2].skill,
        },
        {
            key: 3,
            skill: skillSetters[3].skill,
        },
        {
            key: 4,
            skill: skillSetters[4].skill,
        },
        {
            key: 5,
            skill: skillSetters[5].skill,
        },
        {
            key:6,
            skill: skillSetters[6].skill,
        },
        {
            key: 7,
            skill: skillSetters[7].skill
        },
        {   
            key:8,
            skill: skillSetters[8].skill,
        },
        {
            key:9,
            skill: skillSetters[9].skill
        }
    ];

    const achievements : any[]  = [
        {
            key: 0,
            achievement: achievementSetters[0].achievement,
            achievementDate: achievementSetters[0].achievementDate,
        },
        {
            key : 1,
            achievement: achievementSetters[1].achievement,
            achievementDate: achievementSetters[1].achievementDate,
        },
        {
            key: 2,
            achievement: achievementSetters[2].achievement,
            achievementDate: achievementSetters[2].achievementDate,
        },
        {
            key: 3,
            achievement: achievementSetters[3].achievement,
            achievementDate: achievementSetters[3].achievementDate,
        },
        {
            key:4,
            achievement: achievementSetters[4].achievement,
            achievementDate: achievementSetters[4].achievementDate,
        },
        {
            key: 5,
            achievement: achievementSetters[5].achievement,
            achievementDate: achievementSetters[5].achievementDate,
        },
        {
            key: 6,
            achievement: achievementSetters[6].achievement,
            achievementDate: achievementSetters[6].achievementDate,
        },
        {
            key:7,
            achievement: achievementSetters[7].achievement,
            achievementDate: achievementSetters[7].achievementDate,
        },
        {
            key: 8,
            achievement: achievementSetters[8].achievement,
            achievementDate: achievementSetters[8].achievementDate,
        },
        {
            key: 9,
            achievement: achievementSetters[9].achievement,
            achievementDate: achievementSetters[9].achievementDate,
        }

    ]

    const languages : any[] = [
        {
            key: 0,
            language: languageSetter[0].language
        },
        {
            key : 1,
            language: languageSetter[1].language
        },
        {
            key: 2,
            language: languageSetter[2].language
        },
        {
            key: 3,
            language: languageSetter[3].language
        },
        {
            key:4,
            language: languageSetter[4].language
        },
        {
            key: 5,
            langugae: languageSetter[0].language
        },
        {
            key: 6,
            language: languageSetter[1].language
        },
        {
            key:7,
            language: languageSetter[7].language
        },
        {
            key: 8,
            language: languageSetter[8].language
        },
        {
            key: 9,
            language: languageSetter[9].language
        }

    ]

    const userData = {
        name: stateHook.username,
        surname: stateHook.surname,
        role: stateHook.role,
        address: stateHook.address,
        email: stateHook.email,
        phone: stateHook.phone,
        matric: stateHook.matric,
        highschoolAddress: stateHook.highschoolAddress,
        summary: stateHook.summary
    }

    const matricData= {
        school: matric.school,
        matricDate: matric.matricDate
    }

    const projectData: any[] = [
        {
            key:0,
            projectName: projectSetters[0].projectName,
            description: projectSetters[0].description,
            tools: projectSetters[0].tools,
            link: projectSetters[0].link
        },
        {
            key:1,
            projectName: projectSetters[1].projectName,
            description: projectSetters[1].description,
            tools: projectSetters[1].tools,
            link: projectSetters[1].link
        },
        {
            key:2,
            projectName: projectSetters[2].projectName,
            description: projectSetters[2].description,
            tools: projectSetters[2].tools,
            link: projectSetters[2].link
        },
        {
            key:3,
            projectName: projectSetters[3].projectName,
            description: projectSetters[3].description,
            tools: projectSetters[3].tools,
            link: projectSetters[3].link
        },
        {
            key:1,
            projectName: projectSetters[4].projectName,
            description: projectSetters[4].description,
            tools: projectSetters[4].tools,
            link: projectSetters[4].link
        }
    ]

    const referenceData : any[] = [
        {
            key : 0,    
            reference: referenceSetters[0].reference,
            role : referenceSetters[0].role,
            workplace : referenceSetters[0].workplace,
            cellNumber : referenceSetters[0].cellNumber,
            email: referenceSetters[0].email
            
        },
        {
            key : 1,    
            reference: referenceSetters[1].reference,
            role : referenceSetters[1].role,
            workplace : referenceSetters[1].workplace,
            cellNumber : referenceSetters[1].cellNumber,
            email: referenceSetters[1].email
        },
        {
            key : 2,    
            reference: referenceSetters[2].reference,
            role : referenceSetters[2].role,
            workplace : referenceSetters[2].workplace,
            cellNumber : referenceSetters[2].cellNumber,
            email: referenceSetters[2].email
        },
        {
            key : 3,    
            reference: referenceSetters[3].reference,
            role : referenceSetters[3].role,
            workplace : referenceSetters[3].workplace,
            cellNumber : referenceSetters[3].cellNumber,
            email: referenceSetters[3].email
        },
        {
            key : 4,    
            reference: referenceSetters[4].reference,
            role : referenceSetters[4].role,
            workplace : referenceSetters[4].workplace,
            cellNumber : referenceSetters[4].cellNumber,
            email: referenceSetters[4].email
        }
    ]
    
    const [eduKey, setEduKey] = useState<number>(0);
    const [expKey, setExpKey] = useState<number>(0);
    const [skillKey, setSkillKey] = useState<number>(0);
    const [achievementKey, setachievementKey] = useState<number>(0);
    const [langKey, setlangKey] = useState<number>(0);
    const [refKey, setRefKey] = useState<number>(0);
    const [projectKey, setProjectKey] = useState<number>(0);

  return ( 
    <>

        <div>
            <div className="container">
            <div className="cv-entry">
                <div className="personal-details-entry">
                <div
                    className="selector-top"
                    onClick={()=> setPerosnalInfoActive(!personalInfoActive)}
                > 
                    Personal Info
                </div>
                <div className={ personalInfoActive? 'personal-info': 'none-display'}>
                    <div className="form-group-header">
                    <h3>Personal Information</h3>
                    </div>
                    <hr />
                    <div className="form-group">
                        <span>
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Ntandoyenkosi"

                                onChange={(e) => stateHook.setUserName(e.target.value)}
                            />
                        </span>
                        <span>
                            <label htmlFor="surname">Surname</label>
                            <input
                                type="text"
                                id="surname"
                                name="surname"
                                placeholder="Zungu"

                                onChange={(e) => stateHook.setSurname(e.target.value)}
                            />
                        </span>
                    </div>

                    <div className="form-group">  
                        <span>      
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="ntandoyenkosi@gmail.com"

                                onChange={(e) => stateHook.setEmail(e.target.value)}
                            />
                        </span>    
                        <span>
                            <label htmlFor="phone">Phone</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder="0812 3456 7890"

                                onChange={(e) => stateHook.setPhone(e.target.value)}
                            />
                        </span>
                    </div>

                    <div className="form-group">
                        <span>
                            <label htmlFor="address">Address</label>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                placeholder="City, Street, 4000"

                                onChange={(e) => stateHook.setAddress(e.target.value)}
                            />
                        </span>
                        <span>
                            <label htmlFor="role">Role</label>
                            <input
                                type="text" 
                                id="role" 
                                name="role" 
                                
                                onChange={(e) => stateHook.setRole(e.target.value)}
                            />
                        </span>
                    </div>
                    <div className="form-group">
                        <span>
                            <label htmlFor="highschool"> Highschool Name</label>
                            <input type="text" name="highschool" id="highschool" placeholder="Matriculated at - Highschool"  onChange={(e) => matric.setSchool(e.target.value)}/>
                        </span>
                        <span>
                            <label htmlFor="matric-date">Matriculation Date</label>
                            <input type="text" name="matric-date" id="matric-date" placeholder="January 2021"  onChange={(e) => matric.setMatricDate(e.target.value)}/>
                        </span>
                    </div>
                        <div className="form-group-one">
                            <span>
                                <label htmlFor="summary">Summary</label>
                                <textarea id="summary" name="summary" rows={5} cols={63} placeholder="Describe yourself, briefly" value={stateHook.summary} onChange={(e)=>stateHook.setSummary(e.target.value)}></textarea>
                            </span>
                        </div>
                </div>
                </div>
                <div className="education-entry">
                    <div className="selector" onClick={()=> setEducationActive(!educationActive)}>Tertiary Education</div>
                    <div className={educationActive? 'education' : 'none-display'}>
                        <div className="form-group-header">
                            <h3>Education</h3>
                            {
                                eduSetters.slice(0,eduKey).map((setter, index) => (
                                    <EducationEntry
                                        key={index}
                                        institution={setter.institution}
                                        location={setter.location}
                                        course={setter.course}
                                        level={setter.level}
                                        startDate={setter.startDate}
                                        graduationDate={setter.graduationDate}

                                        setInstitution={setter.setInstitution}
                                        setLocation={setter.setLocation}
                                        setCourse={setter.setCourse}
                                        setLevel={setter.setLevel}
                                        setStartDate={setter.setStartDate}
                                        setGraduationDate={setter.setGraduationDate}
                                    />
                                ))
                            }
                        </div>
                        <hr />
                        <div className="form-group">
                            <span>
                                <button className="add-value" onClick={()=> eduKey < 9 ? setEduKey(eduKey + 1) : {}}> Add</button>
                            </span>
                            <span>
                                <button className="add-value" onClick={()=> eduKey > 0 ? setEduKey(eduKey - 1) : {}}> Delete</button>
                            </span>
                        </div>
                    </div>
                    <div className="selector" onClick={() => setExperienceActive(!experienceActive)}>Experience</div>
                    <div className= {experienceActive ? 'experience' : 'none-display'}>
                        <div className="form-group-header">
                            <h3>Experience</h3>
                            {
                            expSetters.slice(0, expKey).map((setter, index) => (
                                <ExperienceEntry 
                                    key={index} 

                                    workplace={setter.workplace}
                                    address={setter.address}
                                    role={setter.role}
                                    description={setter.description}
                                    telephone={setter.telephone}
                                    startDate={setter.startDate}
                                    endDate={setter.endDate} 
                                    
                                    setWorkplace={setter.setWorkplace}
                                    setAddress={setter.setAddress}
                                    setRole={setter.setRole}
                                    setDescription={setter.setDescription}
                                    setTelephone={setter.setTelephone}
                                    setStartDate={setter.setStartDate}
                                    setEndDate={setter.setEndDate}
                                />
                            ))
                            }
                        </div>
                        <hr />
                        <div className="form-group">
                            <span>
                                <button className="add-value" onClick={() => expKey < 9 ? setExpKey(expKey+1) : {}}> Add</button>
                            </span>
                            <span>
                                <button className="add-value" onClick={() => expKey > 0 ? setExpKey(expKey-1) : {}}> Remove</button>
                            </span>
                        </div>

                        
                    </div>
                    <div className="selector" onClick={()=> setSkillActive(!skillsActive)}>Skills</div>
                    <div className={skillsActive ? 'experience' : 'none-display'}>
                        <div className="form-group-header">
                            <h3>Skills</h3>
                                {
                                    skillSetters.slice(0, skillKey).map((setter, index) =>
                                        <SkillEntry 
                                            key={index}
                                            skill={setter.skill}
                                            setSkill={setter.setSkill}
                                        />
                                    )
                                }
                        </div>
                        <hr />
                        <div className="form-group">
                            <span>
                                <button className="add-value" onClick={() => skillKey < 9 ? setSkillKey(skillKey+1) : {}}> Add</button>
                            </span>
                            <span>
                                <button className="add-value" onClick={() => skillKey > 0 ? setSkillKey(skillKey-1) : {}}> Remove</button>
                            </span>
                        </div>
                    </div>

                    <div className="selector" onClick={()=> setProjectActive(!projectActive)}>Projects</div>
                    <div className={projectActive ? 'experience' : 'none-display'}>
                        <div className="form-group-header">
                            <h3>Projects</h3>
                            {
                                projectSetters.slice(0, projectKey).map((project, index) => 
                                    <ProjectEntry 
                                        key={index}
                                        projectName={project.projectName}
                                        description={project.description}
                                        tools={project.tools}
                                        link={project.link}

                                        setProjectName={project.setProjectName}
                                        setDescription={project.setDescription}
                                        setTools={project.setTools}
                                        setLink={project.setLink}
                                    />
                                )
                            }
                        </div>
                        <hr />
                        <div className="form-group">
                            <span>
                                <button className="add-value" onClick={() => projectKey < 4 ? setProjectKey(projectKey+1) : {}}> Add</button>
                            </span>
                            <span>
                                <button className="add-value" onClick={() => projectKey > 0 ? setProjectKey(projectKey-1) : {}}> Remove</button>
                            </span>
                        </div>
                    </div>

                    <div className="selector" onClick={()=> setAchievementsActive(!achievementsActive)}>Achievements</div>
                    <div className={achievementsActive ? 'experience' : 'none-display'}>
                        <div className="form-group-header">
                            <h3>Achievements</h3>
                                {
                                    achievementSetters.slice(0, achievementKey).map((setter, index) =>
                                        <AchievementEntry 
                                            key={index}
                                            achievement={setter.achievement}
                                            setAchievement={setter.setAchievement}
                                            achievementDate={setter.achievementDate}
                                            setAchievementDate={setter.setAchievementDate}
                                        />
                                    )
                                }
                        </div>
                        
                        <hr />
                        <div className="form-group">
                            <span>
                                <button className="add-value" onClick={() => achievementKey < 9 ? setachievementKey(achievementKey+1) : {}}> Add</button>
                            </span>
                            <span>
                                <button className="add-value" onClick={() => achievementKey > 0 ? setachievementKey(achievementKey-1) : {}}> Remove</button>
                            </span>
                        </div>
                    </div>
                    <div className="selector-bottom" onClick={()=> setLanguageActive(!languageActive)}>Languages</div>
                    <div className={languageActive ? 'experience' : 'none-display'}>
                        <div className="form-group-header">
                            <h3>Language</h3>
                                {
                                    languageSetter.slice(0, langKey).map((setter, index) =>
                                        <LanguageEntry 
                                            key={index}
                                            language={setter.language}
                                            setLanguage={setter.setLanguage}
                                        />
                                    )
                                }
                        </div>
                        
                        <hr />
                        <div className="form-group">
                            <span>
                                <button className="add-value" onClick={() => langKey < 9 ? setlangKey(langKey+1) : {}}> Add</button>
                            </span>
                            <span>
                                <button className="add-value" onClick={() => langKey > 0 ? setlangKey(langKey-1) : {}}> Remove</button>
                            </span>
                        </div>
                    </div>
                    <div className="selector-bottom" onClick={()=> setReferenceActive(!referenceActive)}>References</div>
                    <div className={referenceActive ? 'experience' : 'none-display'}>
                        <div className="form-group-header">
                            <h3>Reference</h3>
                                {
                                    referenceSetters.slice(0, refKey).map((setter, index) => 
                                        <ReferenceEntry
                                            key={index}
                                            reference={setter.reference}
                                            workplace={setter.workplace}
                                            role={setter.role}
                                            cellNumber={setter.cellNumber}
                                            email={setter.email}
                                            
                                            setReference={setter.setReference}
                                            setWorkplace={setter.setWorkplace}
                                            setRole={setter.setRole}
                                            setCellNumber={setter.setCellNumber}
                                            setEmail={setter.setEmail}
                                        />
                                    )
                                }
                        </div>
                        
                        <hr />
                        <div className="form-group">
                            <span>
                                <button className="add-value" onClick={() => refKey < 4 ? setRefKey(refKey+1) : {}}> Add</button>
                            </span>
                            <span>
                                <button className="add-value" onClick={() => refKey > 0 ? setRefKey(refKey - 1) : {}}> Remove</button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={true ? "container-2": 'none-display'}>
                <div className={navState.tempZero == true ? '': 'none-display'}>
                    <TemplateZero
                        userInfo={userData}
                        educationInfo={educationData.slice(0,eduKey)}
                        experienceInfo={experienceData.slice(0, expKey)}
                        skills={skills.slice(0, skillKey)}
                        achievements={achievements.slice(0, achievementKey)}
                        languages={languages.slice(0, langKey)}
                        matric={matricData}
                        projects={projectData.slice(0, projectKey)}
                        references={referenceData.slice(0, refKey)}
                    />
                </div>
                <div className={navState.tempOne == true ? '': 'none-display'}>
                    <TemplateOne
                        userInfo={userData}
                        educationInfo={educationData.slice(0,eduKey)}
                        experienceInfo={experienceData.slice(0, expKey)}
                        skills={skills.slice(0, skillKey)}
                        achievements={achievements.slice(0, achievementKey)}
                        languages={languages.slice(0, langKey)}
                        matric={matricData}
                        projects={projectData.slice(0, projectKey)}
                        references={referenceData.slice(0, refKey)}
                    />
                </div>
                <div className={navState.tempTwo == true ? '': 'none-display'}>
                    <TemplateTwo
                        userInfo={userData}
                        educationInfo={educationData.slice(0,eduKey)}
                        experienceInfo={experienceData.slice(0, expKey)}
                        skills={skills.slice(0, skillKey)}
                        achievements={achievements.slice(0, achievementKey)}
                        languages={languages.slice(0, langKey)}
                        matric={matricData}
                        projects={projectData.slice(0, projectKey)}
                        references={referenceData.slice(0, refKey)}
                    />
                </div>
                <div className={ navState.tempThree == true ? '': 'none-display'}>
                    <TemplateThree
                        userInfo={userData}
                        educationInfo={educationData.slice(0,eduKey)}
                        experienceInfo={experienceData.slice(0, expKey)}
                        skills={skills.slice(0, skillKey)}
                        achievements={achievements.slice(0, achievementKey)}
                        languages={languages.slice(0, langKey)}
                        matric={matricData}
                        projects={projectData.slice(0, projectKey)}
                        references={referenceData.slice(0, refKey)}
                    />
                </div>
            </div>
            </div>
            <div className="controller">
                <TemplateNavigation
                setTemplateZero={navState.setTemplateteZero}
                setTemplateOne={navState.setTemplateOne}
                setTemplateTwo={navState.setTemplateTwo}
                setTemplateThree={navState.setTemplateThree}
                />
            </div>  
        </div>
    </>
  );
};


export default MainCVPage;