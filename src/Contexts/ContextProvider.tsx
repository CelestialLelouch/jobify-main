import { useContext } from "react"
import { Context } from "./CVContext"

const Test : React.FC = () => {
    const {setValue1} = useContext(Context)
    return (
        <>
            <div>
                <label>Test Main Comp</label>
                <input type="text" onChange={(e) => setValue1(e.target.value)}/>
                <a>

                </a>
            </div>

            <TestComponent/>
            <TestComponent2/>
        </>
    )
}



const TestComponent : React.FC = () => {
    const {value1} = useContext(Context);
    return (
        <div>
            <label>Test Comp 1</label>
            <input type="text" />
            <strong>
                {value1}
            </strong>
        </div>
    )
}

const TestComponent2 : React.FC = () => {
    return (
        <div>
            <label>Test Comp 2</label>
            <input type="text" />
            <i>

            </i>
        </div>
    )
}
export default Test;