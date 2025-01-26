import MainCVPage from "./components/MainPage";

import React, { useState } from "react";
import { Context } from "./Contexts/CVContext";


const sharedState = () => {
    const [username, setUserName] = useState<string>('Name');
    const [surname, setSurname] = useState<string>('Surname');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [role, setRole] = useState<string>('');
    const [summary, setSummary] = useState<string>('');
    return {
        username,
        setUserName,
        surname,
        setSurname,
        email,
        setEmail,
        phone,
        setPhone,
        address,
        setAddress,
        role,
        setRole,
        summary,
        setSummary
    }
}
const eduState = () => {
    const [institution, setInstitution] = useState<string>('');
    const [course, setCourse] = useState<string>('');
    const [location, setLocation] = useState<string>('');
    const [level, setLevel] = useState<string>('');
    const [startDate, setStartDate] = useState<string>('');
    const [graduationDate, setGraduationDate] = useState<string>('');


    return {
      institution,
      setInstitution,
      course,
      setCourse,
      location,
      setLocation,
      level,
      setLevel,
      startDate,
      setStartDate,
      graduationDate,
      setGraduationDate
    }
  }
const expState = () => {
    const [workplace, setWorkplace] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [telephone, setTelephone] = useState<string>('');
    const [role, setRole] = useState<string>('');
    const [startDate, setStartDate] = useState<string>('');
    const [endDate, setEndDate] = useState<string>('');
    const [description, setDescription] = useState<string[]>([]);

    return {
      workplace,
      setWorkplace,
      address,
      setAddress,
      telephone,
      setTelephone,
      role,
      setRole,
      startDate,
      setStartDate,
      endDate,
      setEndDate,
      description,
      setDescription,
    }
  }
const skillState = ()=> {
  const [skill, setSkill] = useState<string>('');

  return {
    skill,
    setSkill
  }
}

const achievementState = () => {
  const [achievement, setAchievement] = useState<string>('');
  const [achievementDate, setAchievementDate] = useState<string>('');

  return {
    achievement,
    setAchievement,
    achievementDate,
    setAchievementDate,
  }
}   

const languageState = () => {
  const [language, setLanguage] = useState<string>('');

  return {
    language,
    setLanguage
  }
}

const projectState = () => {
  const [projectName, setProjectName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [link, setLink] = useState<string>('');
  const [tools, setTools] = useState<string[]>([]);

  return {
    projectName,
    setProjectName,
    description,
    setDescription,
    tools,
    setTools,
    link,
    setLink
  }
}
const referenceState =() => {
  const [reference, setReference] = useState<string>('');
  const [role, setRole] = useState<string>('');
  const [cellNumber, setCellNumber] = useState<string>('');
  const [workplace, setWorkplace] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  return {
    reference,
    setReference,
    role,
    setRole,
    cellNumber,
    setCellNumber,
    workplace,
    setWorkplace,
    email,
    setEmail
  }

}
const matricState = () => {
  const [school, setSchool] = useState<string>('');
  const [matricDate, setMatricDate] = useState<string>('');

  return {
    school,
    setSchool,
    matricDate,
    setMatricDate
  }
}

const navigationState = () => {
  const [tempZero, setTemplateteZero] = useState<boolean>(true);
  const [tempOne, setTemplateOne] = useState<boolean>(false);
  const [tempTwo, setTemplateTwo] = useState<boolean>(false);
  const [tempThree, setTemplateThree] = useState<boolean>(false);

  return {
    tempZero,
    setTemplateteZero,
    tempOne,
    setTemplateOne,
    tempTwo,
    setTemplateTwo,
    tempThree,
    setTemplateThree
  }
}
const HomePage : React.FC = () => {
    return (
        <Context.Provider value={{sharedState, eduState, expState, skillState, achievementState, languageState, matricState, referenceState, projectState, navigationState}}>
            <MainCVPage />
        </Context.Provider>
    )
}

export default HomePage;