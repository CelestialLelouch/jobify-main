import './template-styles/templateThree.css'

import {Props} from "./Props";


import { useState } from "react";


const  TemplateThree : React.FC<Props> = ({educationInfo, achievements, skills, languages, userInfo, experienceInfo, matric, projects, references}) => {
    return (
        <>
            <div className="page-three">
                <div className="page-three-content-one">
                    <div className='content-one-value-one'>
                        <div className="page-three-names">
                            <h2>
                                {userInfo.name}
                            </h2>
                            <h2>
                                {userInfo.surname}
                            </h2>
                        </div>
                        <div className="page-three-role">
                            <p>
                                {userInfo.role}
                            </p>
                        </div>
                    </div>
                    <div className='content-one-value-two'>
                        <div className= {userInfo.summary.length > 0 ? 'page-three-summary' : 'none-display'}>
                            <div className='page-three-header'>
                                <h3>ABOUT ME</h3>
                            </div>
                            <div className='summary'
                                style={{fontSize:'14px'}}
                            >
                                <b>{userInfo.summary}</b>
                            </div>
                        </div>
                        <div className={experienceInfo.length > 0 ? 'page-three-experience' : 'none-display'}>
                            <div className="page-three-header">
                                <h3>EXPERIENCE</h3>
                            </div>
                            {
                                experienceInfo.map((experience, index) => 
                                    <Experience 
                                        key={index}
                                        workplace={experience.workplace}
                                        role={experience.role}
                                        startDate={experience.startDate}
                                        endDate={experience.endDate}
                                        description={experience.description}
                                    />
                                )
                            }
                        </div>
                        <div className={projects && projects.length > 0 ? "pg-3-projects" : 'none-display'}>
                            <div className="page-three-header">
                                <h3>PROJECTS</h3>
                            </div>
                            {
                                projects?.map((project, index) => 
                                    <Project 
                                        key={index}
                                        projectName={project.projectName}
                                        description={project.description}
                                        tools={project.tools}
                                        link={project.link}
                                    />
                                )
                            }
                        </div>
                        <div className={references.length > 0 ? "pg-3-references" : 'none-display'}>
                            <div className="page-three-header">
                                <h3>REFERENCES</h3>
                            </div>
                            <div className="pg-3-reference-values">
                                {
                                    references.map((reference, index) => 
                                        <Reference 
                                            key={index}
                                            reference={reference.reference}
                                            role={reference.role}
                                            workplace={reference.workplace}
                                            cellNumber={reference.cellNumber}
                                            email={reference.email}
                                        />
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="page-three-content-two">
                    <div className='content-two-value-one'>
                        <div className='pg-3-profile-image'>
                            
                        </div>
                        <div className='pg-3-contact-info'>
                            <ul>
                                <li className={userInfo.phone.length > 0 ? '':'none-display'}>
                                    <b>{userInfo.phone}</b>
                                </li>
                                <li className={userInfo.email.length > 0 ? '':'none-display'}>
                                    <b>{userInfo.email}</b>
                                </li>
                                <li className={userInfo.address.length > 0 ? '':'none-display'}>
                                    <b>{userInfo.address}</b>
                                </li>
                            </ul>
                        </div>

                    </div>
                    <div className='content-two-value-two'>
                        <div className={matric.school.length > 0 || matric.matricDate.length > 0 || educationInfo.length > 0 ? "pg-3-education" : 'none-display'}>
                            <div className='page-three-header'>
                                <h3>EDUCATION</h3>
                            </div>
                            <div className= {matric.school.length > 0? 'pg-3-matric-info' : 'none-display'}>
                                <h4>Matriculated:</h4>
                                <div className='pg-3-matric'>
                                    <span>
                                        <b>
                                            {matric.school}
                                        </b>
                                    </span>
                                    <span>
                                        {matric.matricDate}
                                    </span>
                                </div>
                            </div>
                            {
                                educationInfo.map((education, index) =>
                                    <Education 
                                        key={index}
                                        institution={education.institution}
                                        course={education.course}
                                        level={education.level}
                                        startDate={education.startDate}
                                        endDate={education.graduationDate}
                                    />
                                )
                            }
                        </div>
                        <div className={skills.length > 0 ? "pg-3-skills" : 'none-display'}>
                            <div className='page-three-header'>
                                <h3>SKILLS</h3>
                            </div>
                            <div className='pg-3-skill-values'>
                                <ul>
                                    {
                                        skills.map((skill) =>
                                            <li key={skill.key}>
                                            <b>{skill.skill}</b> 
                                            </li>
                                        )
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className={achievements.length > 0 ? "pg-3-achievements" :  'none-display'}>
                            <div className="page-three-header">
                                <h3>ACHIEVEMENTS</h3>
                            </div>
                            <ul>
                                {
                                    achievements.map(achievement => 
                                        <li key={achievement.key}>
                                            <b>
                                                {achievement.achievement}
                                            </b>
                                            <p style={{fontSize: 'small', marginTop: '-3px'}}>
                                                <u>
                                                    <b>{achievement.achievementDate}</b>
                                                </u>
                                            </p>
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                        <div className={languages.length > 0 ? "pg-3-languages" : 'none-display'}>
                            <div className="page-three-header">
                                <h3>LANGUAGES</h3>
                            </div>
                            <ul>
                                {
                                    languages.map(language => 
                                        <li key={language.key}>
                                            <b>{language.language}</b>
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                    <div className='block'>

                    </div>
                </div>
            </div>
        </>
    )
}

export default TemplateThree;


interface ExpProps {
    workplace: string;
    role: string;
    description: string[];
    startDate: string;
    endDate: string;
}

const Experience : React.FC<ExpProps> = ({workplace, role, description, startDate, endDate})=> {
    let duration : string = "";
    if ( endDate != 'Present' ) {
        duration = startDate.substring(0, 3)+' '+ startDate.substring(startDate.length-4) + ' - ' + endDate.substring(0, 3) + ' ' + endDate.substring(endDate.length-4)
    }else {
        duration = startDate.substring(0, 3)+' '+ startDate.substring(startDate.length-4) + ' - ' + endDate;
    }
    return (
        <>
            <div className="page-three-experience">
                <div className="pg-3-role">
                    <span>
                        <b><u>{role}</u></b>
                    </span> 
                    <span>
                        {duration}
                    </span>
                </div>
                <div className="pg-3-workplace">
                    <b>{workplace}</b>
                </div>
                <div className={description.length > 0 ? "pg-3-descripton": 'none-display'}>
                    <u>
                        <h5>Description</h5>
                    </u>
                    <b>
                        <i>
                            <ul>
                                {
                                    description.map((value, index)=>(
                                        <li key={index} className='bullet'>
                                            <h5>
                                                {value}
                                            </h5>
                                        </li>
                                    ))
                                }
                            </ul>
                        </i>
                    </b>
                </div>
            </div>
        </>
    )
}

interface EduProps {
    institution: string;
    level: string;
    course: string;
    startDate: string;
    endDate: string;
}

const Education : React.FC<EduProps> = ({institution, level, course, startDate, endDate}) => {
    let duration : string = "";
    if ( endDate != 'Present' ) {
        duration = startDate.substring(0, 3)+' '+ startDate.substring(startDate.length-4) + ' - ' + endDate.substring(0, 3) + ' ' + endDate.substring(endDate.length-4)
    }else {
        duration = startDate.substring(0, 3)+' '+ startDate.substring(startDate.length-4) + ' - ' + endDate;
    }
    return (
        <>
            <div className="page-three-education">
                <div className="pg-3-institution">
                    <b>{institution}</b>
                </div>
                <div className= "pg-3-course">
                    {level + ' ' +course}
                </div>
                <div className="pg-3-duration">
                    {duration}
                </div>
            </div>
        </>
    )
}


interface RefProps {
    reference: string;
    role: string;
    workplace: string;
    cellNumber: string
    email?: string;
}

export const Reference : React.FC<RefProps> = ({reference, role, workplace, cellNumber, email}) => {
    return (
        <div className='pg-3-reference' >
            <div className={reference.length > 0? '':'none-display'}>
                <b>
                    <u>
                        {reference}
                    </u>
                </b>
            </div>
            <div className={workplace.length > 0 ? 'ref-item-1': 'none-display'}>
                <h5>{workplace + '/' + role}</h5>
            </div>
            <div className={cellNumber.length > 0? 'ref-item-2':'none-display'} >
                <b>Phone: </b>
                <br />
                <i>{cellNumber}</i>
            </div>
            <div  className={email && email.length > 0? 'ref-item-3':'none-display' }>
                <b>Email: </b>
                <br />
                <i>{email}</i>
            </div>
        </div>
    )
}


interface ProjectProps {
    projectName: string;
    description: string;
    tools: string[];
    link: string;
}

const Project : React.FC<ProjectProps> = ({projectName, description, tools, link}) => {
    return (
        <div className="pg-3-project">
            <div>
                <span>
                    <b>{projectName}</b>
                </span>
                <span> | </span>
                <span>
                    <a href={link}>Link</a>
                </span>
            </div>
            <div className='pg-3-project-description'>
                <h4>
                    <u>
                        Description
                    </u>
                </h4>
                <div className='pg-3-project-description-value'>
                    {description}
                </div>
            </div>
            <div className='pg-3-project-tools'>
                <h4>
                    <u>
                        Tools
                    </u>
                </h4>
                <ul>
                    {
                        tools.map((tool, index) => 
                            <li key={index}>
                                <b>{tool}</b>
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
    )
}