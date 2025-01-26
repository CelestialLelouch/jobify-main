interface EducationInfo {
    institution: string;
    location: string;
    course: string;
    level: string;
    startDate: string;
    graduationDate: string;
}
interface MatricInfo {
    school: string;
    matricDate: string;
}
interface ExperienceInfo {
    workplace: string;
    role: string;
    description: string[];
    startDate: string;
    endDate: string;

}
interface ReferenceInfo {
    workplace: string;
    role: string;
    reference: string;
    cellNumber: string;
    email: string;
}
interface PersonalInfo {
    name: string;
    surname: string;
    address: string;
    role: string;
    email: string;
    phone: string;
    matric: string;
    highschoolAddress: string;
    summary: string;
}
interface SkillsInfo {
    key: number;
    skill: string;
}
interface achievementsInfo {
    key: number;
    achievement: string;
    achievementDate: string;
}
interface LanguagesInfo {
    key: number;
    language: string;
}

interface ProjectInfo {
    projectName: string;
    tools:  string[];
    description: string;
    link:string;
}

export interface Props {
    userInfo: PersonalInfo;
    educationInfo: EducationInfo[];
    experienceInfo: ExperienceInfo[];
    skills: SkillsInfo[];
    achievements: achievementsInfo[];
    languages: LanguagesInfo[];
    matric: MatricInfo;
    references: ReferenceInfo[];
    projects : ProjectInfo[];
}
