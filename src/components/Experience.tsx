interface experienceProps {
    key: number;
    workplace: string;
    address: string;
    telephone: string;
    role: string;
    description: string[];
    startDate: string;
    endDate: string;
}
const Experience: React.FC<experienceProps> = ({ workplace, address, telephone, role, description, startDate, endDate }) => {
    return (
        <>
            <hr />
            <div className="experience-info">
                <div className="info-group">
                    <span>
                        {workplace}
                    </span>
                    <span>
                        {address}
                    </span>
                </div>
                <div className="info-group">
                    <span>
                        {role}
                    </span>
                    <span>
                        {startDate + " - " +endDate}
                    </span>
                </div>
                <div className="info-group">
                    <span>
                        {telephone.substring(0,3) + " " + telephone.substring(3, 6) + " " + telephone.substring(6, telephone.length)}
                    </span>
                </div>
                <div className="info-group-description">
                    <h4>Description</h4>
                    <p>
                        <ul>
                        {description.map((info, index) => 
                            <li key={index}>
                                {info}
                            </li>
                        )}
                        </ul>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Experience