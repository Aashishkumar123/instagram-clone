import { Sidebar } from "../components/sidebar/Sidebar";
import "../components/profile/profile.css";
import { ProfileSection } from "../components/profile/ProfileSection";
import { Posts } from "../components/profile/Posts";


export const Profile = ()=>{
    return(
        <>
            <Sidebar />
            <main className="main-content p-4">
                <ProfileSection />
                <Posts />
            </main>
        </>
    )
}
