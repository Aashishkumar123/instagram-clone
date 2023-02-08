import { ProfileTab } from "./ProfileTab";
import { Link } from "react-router-dom";
import { Postmodal } from "./Postmodal";


export const Posts = ()=>{
    return(
        <>
            <ProfileTab />
            <div className="instagram-posts text-center mt-5 pt-4">
                <Link to="" style={{color:"var(--text)"}} data-bs-toggle="modal" data-bs-target="#postModel">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0.25 0.25 13.5 13.5" height="48" width="48" stroke-width="0.5"><g><path d="M13.5,5a1,1,0,0,0-1-1h-2L9,2H5L3.5,4h-2a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1h11a1,1,0,0,0,1-1Z" fill="none" stroke="#616161" stroke-linecap="round" stroke-linejoin="round"></path><circle cx="7" cy="7.5" r="2.25" fill="none" stroke="#616161" stroke-linecap="round" stroke-linejoin="round"></circle></g></svg>    
                </Link>
                <br />
                <br />
                <h2>Share Photos</h2>
                <div className="mx-auto" style={{width:"350px"}}>
                    <p>When you share photos, they will appear on your profile.</p>
                </div>
                <Link to="" data-bs-toggle="modal" data-bs-target="#postModel">Share your first photo</Link>
            </div>
            <Postmodal />
        </>
    )
}
