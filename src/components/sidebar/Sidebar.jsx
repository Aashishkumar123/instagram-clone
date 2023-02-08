import "./sidebar.css";
import instagram_black_logo from "../../static/images/instagram-black.png";
import instagram_white_logo from "../../static/images/instagram-white.png";
import profile from "../../static/images/profile.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Postmodal } from "../profile/Postmodal";


export const Sidebar = ()=>{

    var theme = window.localStorage.getItem('theme');
    if(theme === null){
        document.body.classList = 'light';
    }
    else{
        var default_mode = theme;
    }

    const [mode,setMode] = useState(default_mode);

    const ChangeTheme = ()=>{
        var theme = window.localStorage.getItem('theme');
        if(theme === 'light'){
            window.localStorage.setItem('theme','dark');
            setMode('dark');
        }
        else if(theme === 'dark'){
            window.localStorage.setItem('theme','light');
            setMode('light');
        }
    }

    useEffect(()=>{
        document.body.classList = mode;
    })
    return(
        <>
            <div className="instagram-sidebar py-4">
                <div className="lnsta-logo px-4 pt-3">
                    <img {...(localStorage.getItem('theme') === 'light' ? {src : instagram_black_logo} : {src : instagram_white_logo})} className="img-fluid" alt="instagram-logo" />
                </div>
                <div className="insta-menu mt-5">
                    <Link to="/" className="d-flex align-items-center px-3 py-2 mx-2 mt-3">
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
                    <Link to="" className="d-flex align-items-center px-3 py-2 mx-2 mt-3" data-bs-toggle="modal" data-bs-target="#postModel">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" height="22" width="22"><g><g><line x1="7" y1="4" x2="7" y2="10" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></line><line x1="4" y1="7" x2="10" y2="7" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></line></g><rect x="0.5" y="0.5" width="13" height="13" rx="3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></rect></g></svg>
                        <span className="px-3">Create</span>
                    </Link>
                    <Link to="/aashishkumar12376/" className="d-flex align-items-center px-3 py-2 mx-2 mt-3">
                        <img src={profile} alt="" style={{width:"25px",borderRadius:"50%"}} />
                        <span className="px-3" {...(window.location.pathname === '/aashishkumar12376' ? {style : {fontFamily:"proximanNova-bold"}} : {})}>Profile</span>
                    </Link>
                    <div className="dropup" style={{position:"absolute",bottom:"35px",width:"100%"}}>
                        <Link to="" className="d-flex align-items-center px-3 py-2 mx-2" data-bs-toggle="dropdown" aria-expanded="false" id="more-dropdown">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" height="22" width="22"><g><line x1="13.5" y1="2" x2="0.5" y2="2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></line><line x1="13.5" y1="7" x2="0.5" y2="7" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></line><line x1="13.5" y1="12" x2="0.5" y2="12" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></line></g></svg>
                            <span className="px-3">More</span>
                        </Link>
                        <ul class="dropdown-menu mb-2 py-1 shadow">
                            <li className="d-flex align-items-center py-1">
                                <a class="dropdown-item" href="#">
                                    Settings
                                </a>
                                <svg className="mx-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" height="25" width="25"><path d="M5.23,2.25l.43-1.11A1,1,0,0,1,6.59.5h.82a1,1,0,0,1,.93.64l.43,1.11,1.46.84,1.18-.18a1,1,0,0,1,1,.49l.4.7a1,1,0,0,1-.08,1.13L12,6.16V7.84l.75.93a1,1,0,0,1,.08,1.13l-.4.7a1,1,0,0,1-1,.49l-1.18-.18-1.46.84-.43,1.11a1,1,0,0,1-.93.64H6.59a1,1,0,0,1-.93-.64l-.43-1.11-1.46-.84-1.18.18a1,1,0,0,1-1-.49l-.4-.7a1,1,0,0,1,.08-1.13L2,7.84V6.16l-.75-.93A1,1,0,0,1,1.17,4.1l.4-.7a1,1,0,0,1,1-.49l1.18.18ZM5,7A2,2,0,1,0,7,5,2,2,0,0,0,5,7Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            </li>
                            <li className="d-flex align-items-center py-1">
                                <a class="dropdown-item" href="#">Saved</a>
                                <svg className="mx-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" height="25" width="25"><path d="M11,13.5l-4-4-4,4V1.5a1,1,0,0,1,1-1h6a1,1,0,0,1,1,1Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            </li>
                            <li className="d-flex align-items-center py-1" onClick={ChangeTheme}>
                                <a class="dropdown-item" href="#">Switch appearance</a>
                                <svg className="mx-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" height="25" width="25"><path d="M12,10.48A6.55,6.55,0,0,1,6.46.5a6.55,6.55,0,0,0,1,13A6.46,6.46,0,0,0,13,10.39,6.79,6.79,0,0,1,12,10.48Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            </li>
                            <li className="d-flex align-items-center py-1">
                                <a class="dropdown-item" href="#">Your activity</a>
                                <svg className="mx-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" height="25" width="25"><g><path d="M13.5,6.92a7.62,7.62,0,0,1-.74,3.21" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7,13.42A6.5,6.5,0,0,1,.5,6.92" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><polyline points="9 8.92 7 6.42 4 6.42" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></polyline><circle cx="12" cy="11.42" r="1.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></circle><path d="M.92,4.52A6.31,6.31,0,0,1,1.79,3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3.72,1.28A6.3,6.3,0,0,1,5.53.58" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M13.08,4.52A6.31,6.31,0,0,0,12.21,3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10.28,1.28A6.3,6.3,0,0,0,8.47.58" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>
                            </li>
                            <li className="d-flex align-items-center py-1">
                                <a class="dropdown-item" href="#">Report a problem</a>
                                <svg className="mx-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" height="25" width="25"><g><line x1="7" y1="5" x2="7" y2="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></line><circle cx="7" cy="11" r="0.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></circle><path d="M7.89,1.05a1,1,0,0,0-1.78,0l-5.5,11A1,1,0,0,0,1.5,13.5h11a1,1,0,0,0,.89-1.45Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>
                            </li>
                            <li className="d-flex align-items-center py-1"><a class="dropdown-item" href="#">Switch account</a></li>
                            <li className="d-flex align-items-center py-1"><a class="dropdown-item" href="#">Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <Postmodal />
        </>
    )
}
