import { ProfileTab } from "./ProfileTab";
import { Link } from "react-router-dom";


export const Posts = ()=>{
    return(
        <>
            <ProfileTab />
            <div className="instagram-posts text-center mt-5 pt-5">
                <Link to="" style={{color:"var(--text)"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" height="48" width="48"><g><path d="M13.5,5a1,1,0,0,0-1-1h-2L9,2H5L3.5,4h-2a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1h11a1,1,0,0,0,1-1Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><circle cx="7" cy="7.5" r="2.25" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></circle></g></svg>
                </Link>
                <br />
                <br />
                <h2>Share Photos</h2>
                <div className="mx-auto" style={{width:"350px"}}>
                    <p>When you share photos, they will appear on your profile.</p>
                </div>
                <Link to="">Share your first photo</Link>
            </div>
        </>
    )
}
