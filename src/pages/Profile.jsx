import { Sidebar } from "../components/sidebar/Sidebar";
import "../components/profile/profile.css";
import { ProfileSection } from "../components/profile/ProfileSection";


export const Profile = ()=>{
    return(
        <>
            <Sidebar />
            <main className="main-content p-4">
                <ProfileSection />
            </main>
        </>
    )
}
