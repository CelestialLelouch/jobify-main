import { useState, useRef } from "react";


interface Props {
    workplace: string;
    address: string;
    role: string;
    description: string[];
    telephone: string;
    startDate: string;
    endDate: string;

    setWorkplace : (value: string) => void;
    setAddress : (value: string) => void;
    setRole : (value: string) => void;
    setDescription : (value: string[]) => void;
    setTelephone : (value: string) => void;
    setStartDate : (value: string) => void;
    setEndDate : (value: string) => void;
}
export const ExperienceEntry: React.FC<Props> = ({workplace, address, role, description, telephone, startDate, endDate, setAddress, setDescription, setEndDate, setRole, setStartDate, setTelephone, setWorkplace}) => {
    const [experienceActive, setExperienceActive] = useState<boolean>(false);
    const [isDisabled, setIsDisabled] = useState<boolean>(false);


    const inputRef = useRef<HTMLInputElement>(null);
    const handleAddEvent = () => {
        if (inputRef.current){
            const value : string = inputRef.current.value;
            setDescription([...description, value])
            inputRef.current.value =''
        }else{
            alert("Failed to set description")
        }
        
    };

    const handleDeleteEvent = () => {
       description.pop();
       setDescription(description)
    }
    return (
        <>
            <div className="value-header" onClick={() => setExperienceActive(!experienceActive)}>{ workplace.length > 0 ? workplace : "Workplace/ Company Name"}</div>
            <div className={experienceActive ? 'experience' : 'none-display'}>
                <div className="form-group">
                    <span>
                        <label htmlFor="company">Company Name</label>
                        <input type="text" id="company" name="company" value={workplace} onChange={(e) => setWorkplace(e.target.value)} placeholder="ABC Corp." />
                    </span>
                    <span>
                        <label htmlFor="job">Job Title</label>
                        <input type="text" id="job" name="job" placeholder="Software Engineer" value={role} onChange={(e) => setRole(e.target.value)} />
                    </span>
                </div>
                <div className="form-group">
                    <span>
                        <label htmlFor="address">Address</label>
                        <input type="text" id="address" name="address" value={address} onChange={(e) => setAddress(e.target.value)}/>
                    </span>
                    <span>
                        <label htmlFor="telephone">Telephone</label>
                        <input type="tel" name="telephone" id="telephone" value={telephone} onChange={(e) => setTelephone(e.target.value)}/>
                    </span>
                </div>
                <div className="form-group">
                    <span>
                        <label htmlFor="startYear">Start Month/Year</label>
                        <input type="text" id="startYear" name="startYear" placeholder="January 2021" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                    </span>
                    <span>
                        <label htmlFor="endYear">End Month/Year</label>
                        <input type="text" id="endYear" name="endYear" placeholder="Present" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                    </span>
                </div>
                <div className="form-group-one">
                    <span>
                        <label htmlFor="desrciption">Job Description</label> <br />
                        <input type="text" id="description" name="description"  placeholder="Job Description" ref={inputRef} />
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
                            setDescription(description.slice(0, -1));
                        }}
                    >
                        Delete
                    </button>
                </div>

            </div>
        </>
    );
};
