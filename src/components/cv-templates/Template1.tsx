import './template-styles/templateOne.css'

import { MatricContent } from './Template Components/Display-Componets';
import { Reference } from './Template Components/ZeroComponents';
import { Props } from './Props';
import { Project } from './Template Components/ZeroComponents';

const stylesCollection = [
    {
        fontWeight: "bold",
        fontSize: "large"
    }
]




const TemplateOne : React.FC<Props> = ({userInfo, educationInfo, experienceInfo, skills, projects, achievements, languages, matric, references}) => {

    return (
        <>
            <div className="page-one" >
                <div className="t1-user-header-info">
                    <div className="names">
                        <div className="first-name">
                            {userInfo.name}
                        </div>
                        <div className="surname">
                            {userInfo.surname}
                        </div>
                        <div className="role">
                           {userInfo.role}
                        </div>
                    </div>
                    <div className="user-image">
                    </div>
                </div>
                <hr />
                <div className='contact-summary'>
                    <div className="contact">
                        <h3>Contact</h3>
                        <b>
                        <ul>
                            <li className={userInfo.phone.length > 0 ? '': 'none-display'}>
                                
                                {userInfo.phone.substring(0,3) + '-'+userInfo.phone.substring(3, 6) + '-' + userInfo.phone.substring(6, 10)}
                            </li>
                            <li className={userInfo.email.length > 0 ? '':'none-display'}>
                                {userInfo.email}
                            </li>
                            <li className={userInfo.address.length > 0 ? '':'none-display'}>
                                {userInfo.address}
                            </li>
                        </ul>
                        </b>
                    </div>
                    <div className="summary">
                        <h3>Summary</h3>
                        <p>
                            <b>
                            
                                {userInfo.summary}
                            
                            </b>
                        </p>
                    </div>
                </div>
                <hr />
                <div className='page-one-content-conatainer'>
                    <div className='page-one-content-container-2'>
                        <div className="skills-education">
                            <div className={skills.length > 0 ? 'skills-val' : 'none-display'}>
                                <div
                                    style={stylesCollection[0]}
                                >
                                    Professional Skills
                                </div>
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
                            <div className={(matric.school.length > 0 || matric.matricDate.length > 0|| educationInfo.length > 0)? "education-val" : 'none-display'}>
                                <div
                                    style={stylesCollection[0]}
                                >
                                    Education
                                </div>
                                <div >
                                   <p>
                                        <b>Matriculated</b>
                                   </p>
                                   <div style={{marginTop: '-10px', fontWeight:'bold', fontSize: '14px', display: 'grid', gridTemplateColumns: '3fr 1fr', gap: '20px'}}>
                                        <span>
                                            {matric.school}
                                        </span>
                                        <span>
                                            {matric.matricDate.substring(0,3) + ' ' + matric.matricDate.substring(matric.matricDate.length-4)}
                                        </span>
                                   </div>
                                </div>
                                {
                                    educationInfo.map((education, index) => (
                                        <EducationVal 
                                            key={index}
                                            institution={education.institution}
                                            location={education.location}
                                            course={education.course}
                                            level={education.level}
                                            startDate={education.startDate}
                                            graduationDate={education.graduationDate}
                                        />
                                    ))
                                }
                            </div>
                        </div>
                    </div>

                    <div className='page-one-content-container-2'>
                        <div className={experienceInfo.length > 0 ? "work-experience-val" : 'none-display'}>
                                <div
                                    style={stylesCollection[0]}
                                >
                                    Work Experience
                                </div>
                                {experienceInfo.map((experience, index) => 
                                    <ExperienceVal 
                                        key={index}
                                        workplace={experience.workplace}
                                        role={experience.role}
                                        description={experience.description}
                                        startDate={experience.startDate}
                                        endDate={experience.endDate}
                                    />
                                )}
                        </div>
                        <div className={ projects.length > 0 ? '' : 'none-display'}>
                            <div
                                style={stylesCollection[0]}
                            >
                                Projects
                            </div>
                            {
                                projects?.map((project, index) => 
                                    <Project 
                                        key={index}
                                        projectName={project.projectName}
                                        description={project.description}
                                        tools={project.tools}
                                        link={project.link}
                                        size='50%'
                                    />
                                )
                            }
                        </div>
                    </div>
                </div>

                <hr  className={ references.length > 0 ? '': 'none-display'}/>
                <div className='page-one-container-3'>
                        <div  
                            style={{
                                paddingBottom: '30px',
                            }}
                            className={ references.length > 0 ? '': 'none-display' } 
                        >
                            <div 
                                style={{
                                    fontWeight: "bold",
                                    fontSize: "large", 
                                    justifySelf: "center"
                                }}
                            >References </div>

                            <div 
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fit,minmax(230px, 270px))',
                                    columnGap: '10px',
                                    rowGap: '30px',
                                    marginTop: '20px',
                                }}
                            >
                                {
                                    references.map((ref, index) => 
                                        <Reference 
                                            key={index}
                                            reference={ref.reference}
                                            role={ref.role}
                                            workplace={ref.workplace}
                                            email={ref.email}
                                            cellNumber={ref.cellNumber}
                                        />
                                    )
                                }
                            </div>
                        </div>
                </div>
            </div>
        </>
    )
}



interface ExperienceProps {
    workplace: string,
    role: string,
    description: string[],
    startDate: string,
    endDate: string,

}

const ExperienceVal : React.FC<ExperienceProps> = ({workplace, role, description, startDate, endDate}) => {

    let duration : string = "";
    if ( endDate != 'Present' ) {
        duration = startDate.substring(0, 3)+' '+ startDate.substring(startDate.length-4) + ' - ' + endDate.substring(0, 3) + ' ' + endDate.substring(endDate.length-4)
    }else {
        duration = startDate.substring(0, 3)+' '+ startDate.substring(startDate.length-4) + ' - ' + endDate;
    }

    return (
        <>
            <div className='page-one-experience-info'>
                    <h4>{role}</h4>
                <div className='work-place-info'>
                    <span>
                        <b>    
                            {workplace}    
                        </b>
                    </span>
                    <span>
                        <b>
                            { duration }
                        </b>
                    </span>
                </div>
                <div className={description.length > 0 ? 'description': 'none-display'}>
                    <b>
                    
                        <ul style={{marginLeft:"10px"}}>
                            {
                                description.map((value, index)=>(
                                    <li key={index}>
                                        {value}
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


interface EducationProps {
    institution: string;
    location: string;
    course: string;
    level: string;
    startDate: string;
    graduationDate: string;
}

const EducationVal : React.FC<EducationProps> =({institution, location, course, level, startDate, graduationDate})=>{
    let duration : string = "";
    if ( graduationDate != 'Present' ) {
        duration = startDate.substring(0, 3)+' '+ startDate.substring(startDate.length-4) + ' - ' + graduationDate.substring(0, 3) + ' ' + graduationDate.substring(graduationDate.length-4)
    }else {
        duration = startDate.substring(0, 3)+' '+ startDate.substring(startDate.length-4) + ' - ' + graduationDate;
    }
    return (
        <>
            <div className="page-one-education-info">
                <h4>
                    {level + ' : ' + course}
                </h4>
                <div className='edu-info'  style={{fontSize: '14px'}}>
                    <span>
                        <b>
                            {institution}
                        </b>
                    </span>
                    <span>
                        <b>
                            {duration}
                        </b>
                    </span>
                </div>
            </div>
        </>
    )
}


export default TemplateOne;
