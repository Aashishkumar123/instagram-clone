import { Sidebar } from "../sidebar/Sidebar"
import "./home.css";


export const HomeMain = ()=>{
    return(
        <>
            <Sidebar />
            <main className="main-content p-5"></main>
        </>
    )
}
