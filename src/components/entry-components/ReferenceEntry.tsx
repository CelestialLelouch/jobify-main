import { useState } from "react";


interface Props {
    workplace: string;
    role: string;
    reference: string
    cellNumber: string;
    email: string;

    setWorkplace: (value: string) => void;
    setRole: (value: string) => void;
    setReference: (value: string) => void;
    setCellNumber: (value: string) => void;
    setEmail: (value: string) => void;
}

export const ReferenceEntry: React.FC<Props> = ({workplace, role, cellNumber, reference, email, setEmail, setWorkplace, setRole, setCellNumber, setReference}) => {
        const [isActive, setActive] = useState<boolean>(false);;
    return (
        <>
        <div className="value-header" onClick={() => setActive(!isActive)}>{ reference.length > 0 ? reference : "Reference Name"}</div>
        <div className={isActive? 'experience' : 'none-display'}>
            <div className="form-group">
                <span>
                    <label htmlFor="reference">Refrence Name</label>
                    <input type="text" id="reference" name="reference" placeholder="John Doe" value={reference} onChange={(e) => setReference(e.target.value)}/>
                </span>
                <span>
                    <label htmlFor="job">Job Title</label>
                    <input type="text" id="job" name="job" placeholder="Software Engineer" value={role} onChange={(e) => setRole(e.target.value)} />
                </span>
            </div>
            <div className="form-group">
                <span>
                    <label htmlFor="cellnumber">Telephone</label>
                    <input type="tel" name="cellnumber" id="cellnumber" value={cellNumber} onChange={(e) => setCellNumber(e.target.value)}/>
                </span>
                <span>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="ABC Corp." />
                </span>
            </div>
            <div className="form-group-one">
                <span>
                    <label htmlFor="company">Company Name</label>
                    <input type="text" id="company" name="company" value={workplace} onChange={(e) => setWorkplace(e.target.value)} placeholder="ABC Corp." />
                </span> 
            </div>
        </div>
    </>
    )
}
