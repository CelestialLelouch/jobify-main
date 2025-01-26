import { Props } from "./Props";

import './template-styles/templateZero.css'


import { useRef, useState } from 'react';
import html2pdf from "html2pdf.js";

import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

import {Education, Experience,Project, Reference, Achievement} from "./Template Components/ZeroComponents";
import { borderRightStyle } from "html2canvas/dist/types/css/property-descriptors/border-style";

const TemplateZero : React.FC<Props> = ({userInfo, educationInfo, experienceInfo, references, projects, languages, achievements, matric, skills}) => {
    let phone = userInfo.phone.substring(0,3) + ' '+userInfo.phone.substring(3, 6) + ' ' + userInfo.phone.substring(6, 10)
    const [downloadButton, setdownloadButton] = useState<boolean>(false)
    const [loadButtton, setLoadButton] = useState<boolean>(true)


    const contentRef = useRef<HTMLDivElement | null>(null);

    const changeHeght = () => {
        if (contentRef.current){
            contentRef.current.style.height = '1000px';
            contentRef.current.style.maxHeight = '1000px';
            setLoadButton(false);
            setdownloadButton(true);
        }
    }
    const handleDownloadPDF = async () => {
        if (!contentRef.current) {
          console.error("Content ref is not defined.");
          return;
        }
    
        try {
          // Capture the content as a canvas
          const canvas = await html2canvas(contentRef.current);
    
          // Convert the canvas to an image
          const imgData = canvas.toDataURL("image/png");
    
          // Initialize jsPDF
          const pdf = new jsPDF();
    
          // Define image dimensions for the PDF
          const imgWidth = 190; // A4 width in mm
          const imgHeight = (canvas.height * imgWidth) / canvas.width; // Maintain aspect ratio
    
          // Add the image to the PDF
          pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);
    
          // Save the PDF file
          pdf.save("content.pdf");
        } catch (error) {
          console.error("Failed to generate PDF:", error);
        }
      };
    return (
        <>
                <div
                    style={{
                        position: 'fixed',
                        right: 0,
                        top: 0,
                        zIndex:1000,
                        maxWidth: '100px',
                        overflow: 'hidden',
                    }}
                >
                    <button onClick={changeHeght} className={loadButtton? '': 'none-display'}>
                        Load
                    </button>
                    <button
                        onClick={handleDownloadPDF}
                        className={downloadButton? '': 'none-display'}
                    >
                        Download
                    </button>
                </div>
            
            <div className="page-zero" >
                <div className="page-zero-user-info"  ref = {contentRef}>
                    <div className="page-zero-names-role">
                        <span className="pg-0-names">
                            <span>
                                {userInfo.name}
                            </span>
                            <span>
                                {" "+userInfo.surname}
                            </span>
                        </span>
                        <br />
                        <span>
                            {userInfo.role}
                        </span>
                    </div>
                    <div className="page-zero-contact">
                        <span className={userInfo.email.length > 0 ? '': 'none-display'}>
                            Email: <span className="pg-0-email">{userInfo.email}</span>
                        </span>
                        <span className={userInfo.phone.length > 0 ? '': 'none-display'}>
                            Phone: <span className="pg-0-phone">{phone}</span>
                        </span>
                        <span className={userInfo.address.length > 0 ? '': 'none-display'}>
                            Address: <span className="pg-zero-address">{userInfo.address}</span>
                        </span>
                    </div>
                </div>
                <hr  className={educationInfo.length > 0 || matric.matricDate.length > 0 || matric.school.length > 0 ? "" : 'none-display'}/>
                <div className={educationInfo.length > 0 || matric.matricDate.length > 0 || matric.school.length > 0 ? "page-zero-education" : 'none-display'}>
                    <div className="pg-zero-header">
                        <span>EDUCATION</span>
                    </div>
                    <div className="pg-0-values">
                        <div
                            style={{
                                fontWeight: 'bold',
                                display: 'flex',
                                justifyContent:'space-between',
                                width: '800px',
                            }}
                        >
                            <span>Maticulated At {"  " + matric.school}</span>
                            <span>{matric.matricDate}</span>
                        </div>
                    {
                        educationInfo.map((education, index)=> 
                            <Education 
                                key={index}
                                institution={education.institution}
                                course={education.course}
                                level={education.level}
                                startDate={education.startDate}
                                graduationDate={education.graduationDate}
                                location={education.location}
                                displayLine="none-display"
                            />
                        )
                    }
                    </div>
                </div>
                <hr className={experienceInfo.length > 0 ? "page-zero-work-experience" : 'none-display'} />
                <div className={experienceInfo.length > 0 ? "page-zero-work-experience" : 'none-display'}>
                    <div className="pg-zero-header">
                        <span>EXPERIENCE</span>
                    </div>
                    <div className="pg-0-values">
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
                </div>
                <hr className={projects != undefined && projects.length > 0? "page-zero-projects" : 'none-display'} />
                <div className={projects != undefined && projects.length > 0? "page-zero-projects" : 'none-display'}>
                    <div className="pg-zero-header">
                        <span>PROJECTS</span>
                    </div>
                    <div className="pg-0-values">
                        {
                            projects?.map((project, index) => 
                                <Project 
                                    key={index}
                                    projectName = {project.projectName}
                                    tools = {project.tools}
                                    description = {project.description}
                                    link={project.link}
                                />
                            )
                        }
                    </div>
                </div>
                <hr className={achievements.length > 0 ? "page-zero-certificates" : 'none-display'} />
                <div className={achievements.length > 0 ? "page-zero-certificates" : 'none-display'}>
                    <div className="pg-zero-header">
                        <span>ACHIEVEMENTS</span>
                    </div>
                    <div
                        style={{
                            width: '100%',
                            overflow: 'hidden',
                            wordWrap: 'break-word'
                        }}
                    >
                        <ul
                            style={{
                                marginLeft: '-20px',
                                fontWeight: 'bold',
                                fontSize: '15px',
                                gap: '50px'
                            }}
                        >
                            {
                                achievements.map((achie, index) => 
                                    <Achievement 
                                        key={index}
                                        achievement={achie.achievement}
                                        achievementDate={achie.achievementDate}
                                    />
                                )
                            }
                        </ul>
                    </div>
                </div>
                <hr  className={skills.length > 0 ? "page-zero-skills" : 'none-display'}/>
                <div className={skills.length > 0 ? "page-zero-skills" : 'none-display'}>
                    <div className="pg-zero-header">
                        <span>SKILLS SUMMARY</span>
                    </div>
                    <div>
                        <ul
                            style={{
                                marginLeft: '5px',
                                fontWeight: 'bold',
                                fontSize: '15px',
                                display: "grid",
                                gridTemplateColumns: "repeat(auto-fit, minmax(50px, 200px))",
                                columnGap: '20px',
                            }}
                        >
                            {
                                skills.map((sk) => 
                                    <li key={sk.key}>
                                        {sk.skill}
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                </div>
                <hr className={references.length > 0 ? "page-zero-references" : 'none-display'} />
                <div className={references.length > 0 ? "page-zero-references" : 'none-display'}>
                    <div className="pg-zero-header">
                        <span>REFERENCES</span>
                    </div>
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
        </>
    )
}



export default TemplateZero;

