import { Link } from "react-router-dom"


export const ProfileTab = ()=>{
    return(
        <>
            <div className="profile-tab">
                <div className="text-center">
                    <Link to="" className="px-4 mx-2">
                        <svg className="mx-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" height="12" width="12"><g><rect x="0.5" y="0.5" width="13" height="13" rx="1" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></rect><line x1="5" y1="0.5" x2="5" y2="13.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></line><line x1="9" y1="0.5" x2="9" y2="13.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></line><line x1="13.5" y1="5" x2="0.5" y2="5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></line><line x1="13.5" y1="9" x2="0.5" y2="9" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></line></g></svg>
                        POSTS
                    </Link>
                    <Link to="" className="px-4 mx-2 text-muted">
                        <svg className="mx-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" height="12" width="12"><path d="M11,13.5l-4-4-4,4V1.5a1,1,0,0,1,1-1h6a1,1,0,0,1,1,1Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        SAVED
                    </Link>
                    <Link to="" className="px-4 mx-2 text-muted">
                        <svg className="mx-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" height="12" width="12"><g><circle cx="7" cy="5.5" r="2.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></circle><path d="M10.31,10.75a5,5,0,0,0-6.62,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M13.5,10.5v2a1,1,0,0,1-1,1h-2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10.5.5h2a1,1,0,0,1,1,1v2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M.5,3.5v-2a1,1,0,0,1,1-1h2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3.5,13.5h-2a1,1,0,0,1-1-1v-2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>
                        TAGGED
                    </Link>
                </div>
            </div>
        </>
    )
}
