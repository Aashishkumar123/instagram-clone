import { ProfileTab } from "./ProfileTab"
import { Link } from "react-router-dom"


export const Savedposts = ()=>{
    return(
        <>
            <ProfileTab />
            <div className="saved-posts mt-5 mx-auto">
                <div className="d-flex justify-content-between">
                    <p>Only you can see what you have saved</p>
                    <Link to="">New Collection</Link>
                </div>
                <div className="mt-5 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0.25 0.25 13.5 13.5" height="48" width="48" stroke-width="0.5"><g><path d="M13.5,5a1,1,0,0,0-1-1h-2L9,2H5L3.5,4h-2a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1h11a1,1,0,0,0,1-1Z" fill="none" stroke="#616161" stroke-linecap="round" stroke-linejoin="round"></path><circle cx="7" cy="7.5" r="2.25" fill="none" stroke="#616161" stroke-linecap="round" stroke-linejoin="round"></circle></g></svg>
                    <br /><br />
                    <h4>No saved posts yet</h4> 
                </div>
            </div>
        </>
    )
}
