import { Link } from "react-router-dom"


export const ProfileInfo = ()=>{
    return(
        <>
            <div className="profile-info px-2">
                <div className="d-flex align-items-center profile-info-1">
                    <h5 className="px-3 pt-2">aashishkumar12376</h5>
                    <a href="" className="btn px-3 py-1">Edit profile</a>
                    <svg className="mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" height="25" width="25"><path d="M5.23,2.25l.43-1.11A1,1,0,0,1,6.59.5h.82a1,1,0,0,1,.93.64l.43,1.11,1.46.84,1.18-.18a1,1,0,0,1,1,.49l.4.7a1,1,0,0,1-.08,1.13L12,6.16V7.84l.75.93a1,1,0,0,1,.08,1.13l-.4.7a1,1,0,0,1-1,.49l-1.18-.18-1.46.84-.43,1.11a1,1,0,0,1-.93.64H6.59a1,1,0,0,1-.93-.64l-.43-1.11-1.46-.84-1.18.18a1,1,0,0,1-1-.49l-.4-.7a1,1,0,0,1,.08-1.13L2,7.84V6.16l-.75-.93A1,1,0,0,1,1.17,4.1l.4-.7a1,1,0,0,1,1-.49l1.18.18ZM5,7A2,2,0,1,0,7,5,2,2,0,0,0,5,7Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </div>
                <div className="d-flex align-items-center profile-info-2 mt-4">
                    <div className="px-3">
                        <span className="numbers">0</span> 
                        <span className="px-2">posts</span>
                    </div>
                    <div className="px-3">
                        <span className="numbers">590</span> 
                        <span className="px-2">followers</span>
                    </div>
                    <div className="px-3">
                        <span className="numbers">350</span> 
                        <span className="px-2">following</span>
                    </div>   
                </div>
                <div className="profile-info-3 mt-4 px-3">
                    <h6>Aashish | Software Engineer 🇮🇳</h6>
                    <p>
                        Building <Link to="">@locosub_in</Link> <br />
                        Content creator👨‍🎓 <br />
                        A man behind <Link to="">@_pythonworld_</Link> <br />
                        📍Delhi🇮🇳 <br />
                        Website👇 <br />
                        <Link to="" className="web-link">www.pythonworld.io</Link>
                    </p>
                </div>
            </div>
        </>
    )
}
