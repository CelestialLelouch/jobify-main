import { useState } from 'react';
import './navigation.css'


interface Props {
    setTemplateZero: (value: boolean) => void;
    setTemplateOne: (value: boolean) => void;
    setTemplateTwo: (value: boolean) => void;
    setTemplateThree: (value: boolean)=> void;
}
const TemplateNavigation : React.FC<Props> = ({setTemplateOne, setTemplateZero, setTemplateTwo, setTemplateThree}) => {
    const [showTemplate, setShowTemplate] = useState<boolean>(true);
    const [showSaveOptions, setShowSaveOptions] = useState<boolean>(false);

    //NAV ACTIVE BUTTONS 
    const [navButtonOne, setNavButtonOne] = useState<boolean>(true);
    const [navButtonTwo, setNavButtonTwo] = useState<boolean>(false);
    const [navButtonThree, setNavButtonThree] = useState<boolean>(false);

    //TEMPLATE ACTIVE BUTTONS
    const [btnOne, setBtnOne] = useState<boolean>(true);
    const [btnTwo, setBtnTwo] = useState<boolean>(false);
    const [btnThree, setBtnThree] = useState<boolean>(false);
    const [btnFour, setBtnFour] = useState<boolean>(false);


    const onButtonOneClick = () => {
        setTemplateZero(true);
        setTemplateOne(false);
        setTemplateTwo(false);
        setTemplateThree(false);

        setBtnOne(true);
        setBtnTwo(false);
        setBtnThree(false);
        setBtnFour(false);
    }

    const onButtonTwoClick = () =>{
        setTemplateOne(true);
        setTemplateZero(false);
        setTemplateTwo(false);
        setTemplateThree(false);

        setBtnOne(false);
        setBtnTwo(true);
        setBtnThree(false);
        setBtnFour(false);
    }

    const onButtonThreeClick = () =>{
        setTemplateTwo(true);
        setTemplateZero(false);
        setTemplateOne(false);
        setTemplateThree(false);

        setBtnOne(false);
        setBtnTwo(false);
        setBtnThree(true);
        setBtnFour(false);
    }

    const onButtonFourClick = () =>{
        setTemplateZero(false);
        setTemplateOne(false);
        setTemplateTwo(false);
        setTemplateThree(true);

        setBtnOne(false);
        setBtnTwo(false);
        setBtnThree(false);
        setBtnFour(true);
    }

    const onButtoFiveClick = () =>{

    }

    const onNavButtonOneClick = () =>{
        setShowTemplate(true);
        setShowSaveOptions(false); 

        setNavButtonOne(true);
        setNavButtonTwo(false);
        setNavButtonThree(false); 
    }

    const onNavButtonTwoClick = () =>{
        setShowSaveOptions(true);
        setShowTemplate(false);

        setNavButtonOne(false);
        setNavButtonTwo(true);
        setNavButtonThree(false); 

    }

    return (
        <>
            <div className="navigation-controller" >

                <div className='nav-doc'>
                    <button onClick={onNavButtonOneClick} className={navButtonOne? 'btn-active': ''}>Templates </button>
                    <button onClick={onNavButtonTwoClick} className={navButtonTwo? 'btn-active': ''}>Save Options</button>
                    <button>nav space</button>

                </div>
                <hr />
                <div  className={ showTemplate ? 'controls-nav' : 'none-display'} >
                    <button onClick={onButtonOneClick}  className={btnOne? 'btn-active': ''}>Template 1</button>
                    <button onClick={onButtonTwoClick}  className={btnTwo? 'btn-active': ''}>Template 2</button>
                    <button onClick={onButtonThreeClick} className={btnThree? 'btn-active': ''}>Template 3</button>
                    <button onClick={onButtonFourClick}  className={btnFour? 'btn-active': ''}>Template 4</button>
                    <button onClick={onButtoFiveClick}>Template 5</button>
                </div>

                <div className={showSaveOptions ? 'controls-nav': 'none-display'}>
                    <button>Download</button>
                    <button>Save Online</button>
                    <button>Share</button>
                    <button>Do Some</button>
                    <button>Do Some</button>
                </div>
            </div>
        </>
    )
}


export default TemplateNavigation;