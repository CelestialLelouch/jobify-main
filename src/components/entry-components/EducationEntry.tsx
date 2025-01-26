import { useState } from "react";

interface Props{
    institution: string;
    location: string;
    course: string;
    level: string;
    startDate: string;
    graduationDate: string;

    setInstitution : (value: string) => void;
    setLocation : (value: string) => void;
    setCourse : (value: string) => void;
    setLevel: (value: string) => void;
    setStartDate : (value: string)=> void;
    setGraduationDate : (value: string)=> void;
}
export const EducationEntry: React.FC<Props> = ({institution, location, startDate, graduationDate, course,level, setInstitution, setLocation, setCourse, setLevel, setStartDate, setGraduationDate}) => {
    const [educationActive, setEducationActive] = useState<boolean>(false);

    return (
        <>
                <div className="value-header" onClick={() => setEducationActive(!educationActive)}>{institution.length > 1 ? institution : 'College/University'}</div>
                <div className={educationActive ? 'education' : 'none-display'}>
                    <div className="form-group">
                        <span>
                            <label htmlFor="institution">Institution</label>
                            <input type="text" id="institution" name="institution" value={institution} onChange={(e) => { setInstitution(e.target.value); }} placeholder="University of KwaZulu Natal" />
                        </span>
                        <span>
                            <label htmlFor="location">Location/Address</label>
                            <input type="text" id="location" name="location" placeholder="UKZN, Westville, Durban, 3629" value={location} onChange={(e) => setLocation(e.target.value)} />
                        </span>
                    </div>
                    <div className="form-group">
                        <span>
                            <label htmlFor="level">Degree Level</label>
                            <input type="text" name="level" id="level" placeholder="Bachelors"  value={level} onChange={(e) => setLevel(e.target.value)}/>
                        </span>
                        <span>
                            <label htmlFor="degree">Field Of Study</label>
                            <input type="text" id="degree" name="degree" placeholder="Computer Science & I.T" value={course} onChange={(e) => setCourse(e.target.value)} />
                        </span>
                    </div>
                    <div className="form-group">
                        <span>
                            <label htmlFor="startYear">Start Month/Year</label>
                            <input type="text" id="startYear" name="startYear" placeholder="February 2023" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                        </span>
                        <span>
                            <label htmlFor="graduationYear">Graduation Month/Year</label>
                            <input type="text" id="graduationYear" name="graduationYear" placeholder="Present" value={graduationDate} onChange={(e) => setGraduationDate(e.target.value)} />
                        </span>
                    </div>
                </div>
        </>
    );
};
