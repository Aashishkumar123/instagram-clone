import { Link } from "react-router-dom";


export const Footer = ()=>{
    return(
        <>
            <footer className="my-5 pt-3 mx-auto">
                <Link to="" className="text-muted px-3">Meta</Link>
                <Link to="" className="text-muted px-2">About</Link>
                <Link to="" className="text-muted px-2">Blog</Link>
                <Link to="" className="text-muted px-2">Jobs</Link>
                <Link to="" className="text-muted px-2">Help</Link>
                <Link to="" className="text-muted px-2">API</Link>
                <Link to="" className="text-muted px-2">Privacy</Link>
                <Link to="" className="text-muted px-2">Terms</Link>
                <Link to="" className="text-muted px-2">Top Accounts</Link>
                <Link to="" className="text-muted px-2">Locations</Link>
                <Link to="" className="text-muted px-2">Instagram Lite</Link>
                <Link to="" className="text-muted px-2">Contact Uploading & Non-Users</Link>
                <div className="text-center mt-3">
                    <span className="text-muted px-2">© 2023 Instagram from Meta</span>
                </div>
            </footer>
        </>
    )
}
