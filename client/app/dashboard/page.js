import {JD} from "./components/jd.js"
import { RD } from "./components/rd.js";
const Dashboard = () =>{

    return(
        <div>
            <h1>Your Dashboard!</h1>
            <p>Please put your job description here.</p>
            <JD/>

            <hr/>
            <h2>Please put your copied resume here.</h2>
            <RD/>
        </div>

    )
}

export default Dashboard;
