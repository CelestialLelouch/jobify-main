
interface matricContentProps {
    school: string;
    matricDate: string;
    className: string;
    subclassName?: string;
}

export const MatricContent: React.FC<matricContentProps> = ({ school, matricDate, className, subclassName }) => {
    return (
        <span className={(school.length > 0 || matricDate.length > 0) ? '' : 'none-display'}>
            <div className={className}>
                <span>
                    <b>
                        Matriculated
                    </b>
                </span>
                <div className={subclassName || ''}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '1.5fr 1fr',
                        width: '85%',
                    }}
                >
                    <span>
                        <b>
                            {school}
                        </b>
                    </span>
                    <span style={{justifySelf:'end'}}>
                        <b>
                            {matricDate.substring(0, 3) + '  ' + matricDate.substring(matricDate.length - 4)}
                        </b>
                    </span>
                </div>
            </div>
        </span>
    );
};
