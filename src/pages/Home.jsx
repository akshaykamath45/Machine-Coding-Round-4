import {useContext} from "react";
import { DataContext } from "../contexts/DataContext";

export const Home=()=>{
const {data}=useContext(DataContext)
console.log(data);
    return (
        <div>
            <h4>Home Page</h4>
        </div>
    )
}