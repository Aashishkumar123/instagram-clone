import { Sidebar } from "../../components/sidebar/Sidebar";
import "../../components/profile/profile.css";
import { ProfileSection } from "../../components/profile/ProfileSection";
import { Taggedposts } from "../../components/profile/Taggedposts";
import { Footer } from "../../components/Footer";


export const Tagged = ()=>{
    return(
        <>
            <Sidebar />
            <main className="main-content p-4" style={{height:"100vh"}}>
                <ProfileSection />
                <Taggedposts />
                <Footer />
            </main>
        </>
    )
}
