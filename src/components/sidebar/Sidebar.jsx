import "./sidebar.css";
import instagram_black_logo from "../../static/images/instagram-black.png";
import instagram_white_logo from "../../static/images/instagram-white.png";
import { Link } from "react-router-dom";


export const Sidebar = ()=>{
    return(
        <>
            <div className="instagram-sidebar py-5">
                <div className="lnsta-logo px-4">
                    <img src={instagram_white_logo} className="img-fluid" alt="instagram-logo" />
                </div>
                <div className="insta-menu mt-4">
                    <Link to="" className="d-flex align-items-center px-3 py-2 mx-2 mt-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" height="22" width="22"><g><polyline points="0.5 7 7 0.5 13.5 7" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></polyline><polyline points="2.5 8.5 2.5 13.5 11.5 13.5 11.5 8.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></polyline></g></svg>
                        <span className="px-3">Home</span>
                    </Link>
                    <Link to="" className="d-flex align-items-center px-3 py-2 mx-2 mt-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" height="22" width="22"><g><circle cx="5.92" cy="5.92" r="5.42" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></circle><line x1="13.5" y1="13.5" x2="9.75" y2="9.75" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></line></g></svg>
                        <span className="px-3">Search</span>
                    </Link>
                    <Link to="" className="d-flex align-items-center px-3 py-2 mx-2 mt-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" height="22" width="22"><g><circle cx="7" cy="7" r="6.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></circle><polygon points="7.5 10.5 9.5 4.5 3.5 6.5 6 8 7.5 10.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></polygon></g></svg>
                        <span className="px-3">Explore</span>
                    </Link>
                    <Link to="" className="d-flex align-items-center px-3 py-2 mx-2 mt-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" height="22" width="22"><g><rect x="0.5" y="0.5" width="13" height="13" rx="1" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></rect><path d="M5.49,10.56V6.73A.36.36,0,0,1,6,6.42L9.32,8.33a.37.37,0,0,1,0,.63L6,10.88A.37.37,0,0,1,5.49,10.56Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><line x1="0.5" y1="4" x2="13.5" y2="4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></line><line x1="4" y1="4" x2="5.5" y2="0.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></line><line x1="8.5" y1="4" x2="10" y2="0.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></line></g></svg>
                        <span className="px-3">Reels</span>
                    </Link>
                    <Link to="" className="d-flex align-items-center px-3 py-2 mx-2 mt-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" height="22" width="22"><g><circle cx="3.5" cy="7" r="0.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></circle><circle cx="6.75" cy="7" r="0.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></circle><circle cx="10" cy="7" r="0.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></circle><path d="M7,.5A6.5,6.5,0,0,0,1.59,10.6L.5,13.5l3.65-.66A6.5,6.5,0,1,0,7,.5Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>
                        <span className="px-3">Messages</span>
                    </Link>
                    <Link to="" className="d-flex align-items-center px-3 py-2 mx-2 mt-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" height="22" width="22"><path d="M7,12.45l-5.52-5c-3-3,1.41-8.76,5.52-4.1,4.11-4.66,8.5,1.12,5.52,4.1Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        <span className="px-3">Notifications</span>
                    </Link>
                    <Link to="" className="d-flex align-items-center px-3 py-2 mx-2 mt-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" height="22" width="22"><g><g><line x1="7" y1="4" x2="7" y2="10" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></line><line x1="4" y1="7" x2="10" y2="7" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></line></g><rect x="0.5" y="0.5" width="13" height="13" rx="3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></rect></g></svg>
                        <span className="px-3">Create</span>
                    </Link>
                    <Link to="" className="d-flex align-items-center px-3 py-2 mx-2 mt-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" height="22" width="22"><g><circle cx="7" cy="5.5" r="2.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></circle><path d="M10.31,10.75a5,5,0,0,0-6.62,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M13.5,10.5v2a1,1,0,0,1-1,1h-2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10.5.5h2a1,1,0,0,1,1,1v2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M.5,3.5v-2a1,1,0,0,1,1-1h2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3.5,13.5h-2a1,1,0,0,1-1-1v-2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>
                        <span className="px-3">Profile</span>
                    </Link>
                    <Link to="" className="d-flex align-items-center px-3 py-2 mx-2" style={{position:"absolute",bottom:"35px",width:"16%"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" height="22" width="22"><g><line x1="13.5" y1="2" x2="0.5" y2="2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></line><line x1="13.5" y1="7" x2="0.5" y2="7" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></line><line x1="13.5" y1="12" x2="0.5" y2="12" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></line></g></svg>
                        <span className="px-3">More</span>
                    </Link>
                </div>
            </div>
        </>
    )
}
