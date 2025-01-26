import { useState, useRef } from "react";


interface Props {
    projectName: string;
    description: string;
    tools: string[];
    link: string;

    setProjectName: (projectName: string) => void;
    setDescription: (description: string) => void;
    setTools: (tools: string[]) => void;
    setLink: (link: string) => void;
}
export const ProjectEntry: React.FC<Props> = ({projectName, description, tools, link, setProjectName, setDescription, setTools, setLink})=> {
    const [isActive, setActive] = useState<boolean>(false);

    const inputRef = useRef<HTMLInputElement>(null);
    const handleAddEvent  = () =>{
        if (inputRef.current){
            let value = inputRef.current.value;
            setTools([...tools, value]);
            inputRef.current.value = '';
        }else {
            {}
        }
    }
    return (
        <>
            <div className="value-header" onClick={() => setActive(!isActive)}>{ projectName.length > 0 ? projectName : "Project Name"}</div>
            <div className={isActive ? 'experience' : 'none-display'}>
                <div className="form-group">
                    <span>
                        <label htmlFor="project-name">Project Name</label>
                        <input type="text" id="project-name" name="project-name" value={projectName} onChange={(e) => setProjectName(e.target.value)} placeholder="My Project..." />
                    </span>
                    <span>
                        <label htmlFor="project-link">Project Link</label>
                        <input type="text" id="project-link" name="project-link" value={link} onChange={(e) => setLink(e.target.value)} placeholder="My Project..." />
                    </span>
                </div>
                <div className="form-group-one">
                    <span>
                        <label htmlFor="project-description" >Project Description</label>
                        <textarea name="project-description" id="project-description" cols={30} rows={10} value={description} onChange={ e => setDescription(e.target.value)} placeholder="Describe your project, briefly..."></textarea>
                    </span>
                </div>
                <div className="form-group-one">
                    <span>
                        <label htmlFor="tools">Project Tools</label> <br />
                        <input type="text" id="tools" name="tools"  placeholder="Java Springboot" ref={inputRef} />
                    </span>
                </div>
                <div className="form-group">
                    <button
                        className={"btn"}
                        onClick={handleAddEvent}
                    >
                        Add
                    </button>
                    <button 
                        className="btn"
                        onClick={() => {
                            setTools(tools.slice(0, -1));
                        }}
                    >
                        Delete
                    </button>
                </div>

            </div>
        </>
    )
}
