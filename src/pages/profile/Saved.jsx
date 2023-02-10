import { Sidebar } from "../../components/sidebar/Sidebar";
import "../../components/profile/profile.css";
import { ProfileSection } from "../../components/profile/ProfileSection";
import { Savedposts } from "../../components/profile/Savedposts";
import { Footer } from "../../components/Footer";


export const Saved = ()=>{
    return(
        <>
            <Sidebar />
            <main className="main-content p-4" style={{height:"100vh"}}>
                <ProfileSection />
                <Savedposts />
                <Footer />
            </main>
        </>
    )
}
