import { Props } from './Props';
import { MatricContent } from './Template Components/Display-Componets';
import './template-styles/TemplateTwo.css'

const TemplateTwo : React.FC<Props> = ({educationInfo, achievements, skills, languages, userInfo, experienceInfo, matric, references, projects}) => {
    return (
        <>
            <div className="page-two">
                <div className="page-two-user-info">
                    <td>
                        <div className="p2-names">
                            <div>
                                {userInfo.name || 'Name'}
                            </div>
                            <div>
                                {userInfo.surname || 'Surname'}
                            </div>
                            <div className='role'>
                                {userInfo.role}
                            </div>
                        </div>

                    </td>
                    <td>
                        <div className="p2-contact-info">
                            <ul>
                                <li className={userInfo.phone.length > 0 ? '':'none-display'}>
                                    {userInfo.phone.substring(0,3) + '-'+userInfo.phone.substring(3, 6) + '-' + userInfo.phone.substring(6, 10)}
                                </li>
                                <li className={userInfo.email.length > 0 ? '':'none-display'}>
                                    {userInfo.email}
                                </li>
                                <li className={userInfo.address.length > 0 ? '':'none-display'}>
                                    {userInfo.address}
                                </li>
                            </ul>
                        </div>
                    </td>
                </div>
                <div className={userInfo.summary.length > 0 ? 'p2-summary' : 'none-display'}>
                    <h4>ABOUT ME</h4>
                    <strong>
                        <p>
                            {userInfo.summary}
                        </p>
                    </strong>
                </div>
                <hr className={userInfo.summary.length > 0 ? '': 'none-display'}/>
                <div className="p2-content">
                    <td>
                        <div className="p2-content-one">
                            <div className={skills.length > 0 ? 'p2-skills' : 'none-display'}>
                                <h3>PROFESSIONAL SKILLS: </h3>
                                <ul>
                                    {
                                        skills.map((skill) => (
                                            <li key={skill.key}>
                                                <b>
                                                    {skill.skill}
                                                </b>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                            <div className={languages.length > 0 ? "p2-languages" : 'none-display'}>
                                <h3>LANGUAGES</h3>
                                <ul>
                                    {
                                        languages.map((language) => (
                                            <li key={language.key}>
                                                <b>
                                                    {language.language}
                                                </b>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div className="p2-content-two">
                            <div className={experienceInfo.length > 0 ? 'p2-experience' : 'none-display'}>
                                <h3>EXPERIENCE</h3>
                                {
                                    experienceInfo.map ((experience, index) =>
                                        <Experience 
                                            key={index}
                                            workplace={experience.workplace}
                                            role={experience.role}
                                            description={experience.description}
                                            startDate={experience.startDate}
                                            endDate={experience.endDate}
                                        />
                                    )
                                }
                            </div>

                            <hr className={experienceInfo.length > 0 ? 'achievements' : 'none-display'}/>

                            <div className={achievements.length > 0 ? 'achievements' : 'none-display'}>
                                <h3>ACHIEVEMENTS</h3>
                                <ul>
                                    {
                                        achievements.map((achievement) => (
                                            <li key={achievement.key}>
                                                <div className='info-group'
                                                    style={{
                                                        width: '85%',
                                                        fontSize: '14px'
                                                    }}
                                                >
                                                    <span>
                                                        <b>
                                                            {achievement.achievement}
                                                        </b>
                                                    </span>
                                                    <span style={{justifySelf:'end'}}>
                                                        <b>
                                                            {achievement.achievementDate}
                                                        </b>
                                                    </span>
                                                </div>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>

                            <hr className={achievements.length > 0 || experienceInfo.length > 0 ? '' : 'none-display'}/>

                            <div className={(matric.school.length > 0 || matric.matricDate.length > 0|| educationInfo.length > 0)? 'p2-education' : 'none-display'}>
                                <h3>EDUCATION</h3>
                                <MatricContent 
                                    className='page-two-education-info'
                                    school={matric.school}
                                    matricDate={matric.matricDate} 
                                />
                                {
                                    educationInfo.map((educationInfo, index) => (
                                        <Education 
                                            key={index}
                                            institution={educationInfo.institution}
                                            course={educationInfo.course}
                                            level={educationInfo.level}
                                            startDate={educationInfo.startDate}
                                            graduationDate={educationInfo.graduationDate}
                                            address={educationInfo.location}
                                        />
                                    ))
                                }
                            </div>
                        </div>
                    </td>
                </div>
                <hr  className={projects  && projects.length > 0 ? '':'none-display'}/>
                <div className={projects  && projects.length > 0 ? 'generic':'none-display'}>
                    <h3>PROJECTS</h3>
                    <div className="p2-projects">
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
                </div>
                <hr  className={references.length > 0 ? '':'none-display'}/>
                <div className={references.length > 0 ? 'generic':'none-display'}>
                    <h3>REFERENCES</h3>
                    <div className="p2-references">
                        {
                            references.map((reference, index) => 
                                <Refrence
                                    key={index}
                                    workplace={reference.workplace}
                                    role={reference.role}
                                    reference={reference.reference}
                                    cellNumber={reference.cellNumber}
                                    email={reference.email}
                                />
                            )
                        }
                    </div>
                </div>
                <div className="block">

                </div>
            </div>
        </>
    )
}

export default TemplateTwo;




interface EduProps {
    institution: string,
    course: string,
    level: string,
    startDate: string,
    graduationDate: string
    address: string
}


export const Education : React.FC<EduProps> = ({institution, course, level, startDate, graduationDate, address}) => {
    
    let duration : string = "";
    if ( graduationDate != 'Present' ) {
        duration = startDate.substring(0, 3)+' '+ startDate.substring(startDate.length-4) + ' - ' + graduationDate.substring(0, 3) + ' ' + graduationDate.substring(graduationDate.length-4)
    }else {
        duration = startDate.substring(0, 3)+' '+ startDate.substring(startDate.length-4) + ' - ' + graduationDate;
    }

    return (
        <>
            <div className="page-two-education-info"
                style={{
                    marginTop: '15px',
                }}
            >
                <span>
                    <b>
                        { level + '  ' + course}
                    </b>
                </span>
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '1.5fr 1fr',
                        width: '85%',
                    }}
                >
                    <span>
                        <b>
                            {institution}
                        </b> <br />
                        <p style={{marginTop:'-0px'}}>
                            {address}
                        </p>
                    </span>
                    <span style={{justifySelf: 'end'}}>
                        <b>
                            {duration}
                        </b>
                    </span>
                </div>
            </div>
        </>
    )

}



interface ExpProps {
    workplace: string;
    role: string;
    description: string[];
    startDate: string;
    endDate: string;
}

const Experience : React.FC<ExpProps> = ({startDate, endDate, role, workplace, description}) => {
    let duration : string = "";
    if ( endDate != 'Present' ) {
        duration = startDate.substring(0, 3)+' '+ startDate.substring(startDate.length-4) + ' - ' + endDate.substring(0, 3) + ' ' + endDate.substring(endDate.length-4)
    }else {
        duration = startDate.substring(0, 3)+' '+ startDate.substring(startDate.length-4) + ' - ' + endDate;
    }

    return (
        <>
            <div className="page-two-education-info">
                <h4>
                    { role }
                </h4>
                <div className='edu-info'>
                    <span
                        style={{fontSize:'15px'}}
                    >
                        <b>
                            {workplace}
                        </b>
                    </span>
                    <span 
                        style={{justifySelf: 'end'}}
                    >
                        <b>
                            {duration}
                        </b>
                    </span>
                </div>
                <div className={description.length > 0 ? 'description': 'none-display'}
                    style={{
                        fontSize: '15px'
                    }}
                >
                
                    <h5>Description</h5>
                    <b>
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
                    </b>
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
    email: string;
}

const Refrence : React.FC<RefProps> = ({workplace, role, reference, cellNumber, email})=> {
    return (
        <div className='page-two-reference-info' >
            <span className={reference.length > 0? '':'none-display'}>
                <h4>
                    <b>  
                        {reference}   
                    </b>
                </h4>
            </span>
            <span className={workplace.length > 0 ? 'ref-item-1': 'none-display'}>
                <h5>{workplace + '/' + role}</h5>
            </span>
            <span className={cellNumber.length > 0? 'ref-item-2':'none-display'} >
               <h5> <b>Phone: </b> {cellNumber} </h5>
            </span>
            <span  className={email && email.length > 0? 'ref-item-3':'none-display' }>
                <h5><b>Email: </b> {email} </h5>
            </span>
        </div>
    )
}


interface ProjectProps {
    projectName: string;
    description: string;
    tools: string[];
    link: string;
}


const Project : React.FC<ProjectProps> = ({projectName, description, link, tools})=> {
    return (
        <div className='page-two-project-info' 
            style={{
                overflow: 'unset',
                width: '95%',
            }}
        >
            <span className={projectName.length > 0? '':'none-display'}>
                <h4>
                    <b>
                        {projectName} 
                    </b>
                    <b className={link.length > 0? '':'none-display'} > | </b>
                    <a 
                        href={link}
                        target='_blank'
                        style={{textDecoration: 'none',
                            color:'blue'
                        }}

                        className={link.length > 0? '':'none-display'}
                    > 
                        LINK
                    </a>
                </h4>
            </span>
            <span className={description.length > 0 ? '': 'none-display'}
                style={{
                    marginLeft: '15px',
                    marginTop: '-25px',
                    fontSize: '14px'
                }}
            >
                <pre
                    style={{
                        whiteSpace: 'pre-wrap'
                    }}
                >
                    <b>{description}</b>
                </pre>
            </span>
            <span className={tools.length > 0? 'ref-item-2':'none-display'} 
                style={{marginTop: '-20px', fontSize: '14px'}}
            >
                <ul>
                    {
                        tools.map((item, index) =>
                            <li key={index}>
                                <b>
                                    {item}
                                </b>
                            </li>
                        )   
                    }
                </ul>
            </span>
        </div>
    )
}

