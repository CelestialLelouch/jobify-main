import { useState } from "react";

interface Props {
    skill: string;
    setSkill:(value: string)=> void;
}
const SkillEntry : React.FC<Props> =({skill, setSkill})=> {
    const  [skillActive, setSkillActive] =useState<boolean>(false);
    return (
        <>
            <div className="value-header" onClick={() => setSkillActive(!skillActive)}>{skill.length > 0 ? skill: "Your Skill"}</div>
            <div className={skillActive ? 'experience' : 'none-display'}>
                <div className="form-group-one">
                    <label htmlFor="skill">Skill</label>
                    <input type="text" name="skill" id="skill" value={skill} onChange={(e) => setSkill(e.target.value)}/>
                </div>
            </div>
        </>
    )
}

export default SkillEntry;

interface achieveProps {
    achievement : string[];
    setAchievement: (value : string) => void;
    achievementDate : string;
    setAchievementDate: (value : string) => void;
}


export const AchievementEntry: React.FC<achieveProps> =({achievement ,setAchievement, achievementDate, setAchievementDate}) => {
    const  [active, setActive] =useState<boolean>(false);
    return (
        <>
            <div className="value-header" onClick={() => setActive(!active)}>{achievement.length > 0 ? achievement: "Achievement/Certification"}</div>
            <div className={active ? 'experience' : 'none-display'}>
                <div className="form-group">
                    <span>
                        <label htmlFor="achievement">Achievement/Certification</label>
                        <input type="text" name="achievement" id="achievement"  value={achievement}  onChange={(e) => setAchievement(e.target.value)}/>
                    </span>
                    <span>
                        <label htmlFor="date">Date</label>
                        <input type="text"  name="date" id="date"  value={achievementDate} onChange={(e) => setAchievementDate(e.target.value)} placeholder="June 2024"/>
                    </span>
                </div>
            </div>
        </>
    )

}



interface languageProps {
    language: string;
    setLanguage: (value: string) => void;
}
export const LanguageEntry: React.FC<languageProps> =({language ,setLanguage}) => {
    const  [active, setActive] =useState<boolean>(false);
    return (
        <>
            <div className="value-header" onClick={() => setActive(!active)}>{language.length > 0 ? language: "Spoken Language"}</div>
            <div className={active ? 'experience' : 'none-display'}>
                <div className="form-group-one">
                    <label htmlFor="language">Spoken Language</label>
                    <input type="text" name="langugae" id="langugae"  value={language}  onChange={(e) => setLanguage(e.target.value)}/>
                </div>
            </div>
        </>
    )

}