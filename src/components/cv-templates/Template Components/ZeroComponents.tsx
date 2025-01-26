import React, { useContext } from "react";

interface educationProps {
    institution: string;
    location: string;
    startDate: string;
    graduationDate: string;
    level: string;
    course: string;
    displayLine?: string;
}
export const Education: React.FC<educationProps> = ({ institution, location, startDate, graduationDate, level, course , displayLine}) => {
    return (
        <>
            <hr  className={displayLine? "none-display": ""}/>
            <div 
                className="education-info"
                style={{
                    width: "800px",
                    marginTop: "20px"
                }} 
            >
                <div className="info-group">
                    <span
                        style={{fontWeight: "bold"}}
                    >
                        {institution}
                    </span>
                    <span
                        style={{justifySelf:"end"}}
                    >
                        {location}
                    </span>
                </div>
                <div className="info-group">
                    <span 
                        style={{
                        }}
                    >
                        {level + "  " + course}
                    </span>
                    <span 
                        style={{
                            fontWeight: "bold",
                            justifySelf:"end"
                        }}
                    >
                        {startDate + "  -  " + graduationDate}
                    </span>
                </div>
            </div>
        </>
    );
};


interface experienceProps {
    workplace: string;
    role: string;
    description: string[];
    startDate: string;
    endDate: string;
}


export const Experience : React.FC<experienceProps> = ({workplace, role, description, startDate, endDate}) => {
    return (
        <> 
            <div>
                <div 
                    style={{
                        fontWeight: 'bold',
                        display: 'flex',
                        width:'800px',
                        justifyContent:'space-between'
                    }}
                >
                    <span>{role + " | "+workplace}</span>
                    <span>{startDate + " - " + endDate}</span>
                </div>
            </div>
            <div>
                <ul 
                    style={{
                        fontSize:'small',
                        fontWeight:'bold',
                    }}
                >
                    {
                        description.map((description, index) => 
                            <li key={index}>
                                {description}
                            </li>
                        )
                    }
                </ul>
            </div>
        </>
    )
}

interface projectProps {
    projectName: string;
    tools:  string[];
    description: string;
    link:string;
    size?: string;
}

export const Project : React.FC<projectProps> = ({projectName, tools, description, link, size}) => {
    return (
        <>
            <div
                style={{
                    fontWeight: 'bold',
                    fontSize:'15px',
                    display: 'flex',
                    justifyContent:'space-between'
                }}
            >
                <span>
                    {projectName} 
                    <span className={link.length > 0 ? '': 'none-display'} > | </span>
                    <a className={link.length > 0 ? '': 'none-display'} href={link}>LINK</a>
                </span>
            </div>
            <div
                style={{
                    fontSize:"medium",
                    fontWeight:"bold",
                    marginLeft:"15px",
                    overflow:"hidden",
                }}
            >
                <pre style={{ 
                    overflowWrap: "break-word",
                    whiteSpace: "pre-wrap",
                    wordWrap: "break-word",
                    width: "94%",
                    fontSize: '13.5px'
                    }}
                >
                    {description}
                </pre>
            </div>
            <div

            >
                <ul
                    style={{
                        fontSize:'small',
                        fontWeight:'bold',
                        display: "grid",
                        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 200px))'
                    }}
                >
                    {
                        tools.map((tool, index)=> 
                            <li key={index}>
                                {tool}
                            </li>
                        )
                    }
                </ul>
            </div>
        </>
    )
}

interface referenceProps {
    reference: string;
    workplace: string;
    role: string;
    cellNumber: string;
    email: string;
}

export const Reference : React.FC<referenceProps> = ({reference, workplace, role, cellNumber, email}) => {
    return (
        <>
            <div style= {{
                marginLeft: '30px',
            }}>
                <div 
                    className={reference.length > 0 ? '': 'none-display'}
                >
                    <b>{reference}</b>
                </div>
                <div 
                    className={workplace.length > 0  || role.length > 0 ? '': 'none-display'}
                    style={{fontSize: "small"}}
                >
                    <b>
                        <i>
                            {workplace +"/"+role}
                        </i>
                    </b>
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginTop: '10px',
                    fontSize: 'small',
                }}>
                    <span className={cellNumber.length > 0 ? '': 'none-display'}>
                        <span>Phone: </span> 
                        <span style={{marginLeft:'10px'}} ><b>{cellNumber}</b> </span>
                    </span>

                    <span className={email.length > 0 ? '': 'none-display'}>
                        <span>Email:</span>
                        <span style={{marginLeft:'10px'}}><b>{email}</b></span> 
                    </span>
                </div>
            </div>
        </>
    )
}


interface achievementsProps {
    achievement: string;
    achievementDate: string;
}

export const Achievement : React.FC<achievementsProps> = ({achievement, achievementDate}) => {
    return (
        <>
            <div
                style={{
                    
                    width: '800px'
                }}
            >
                <div 
                    
                    className="info-group"
                >
                    <span className={achievement.length  > 0 ? '' : 'none-display'}>
                        <b>&bull;{achievement}</b>
                    </span>
                    <span 
                        className={achievementDate.length  > 0 ? '' : 'none-display'}
                        style={{
                            justifySelf: 'end'
                        }}
                    >
                        <b>{achievementDate}</b>
                    </span>
                </div>
            </div>
        </>
    )
}