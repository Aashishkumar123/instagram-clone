import { NavLink } from "react-router-dom";
import "./accounts.css";


export const Sidemenu = ()=>{
    return(
        <>
            <div className="account-sidemenu pb-5">
                <div className="list-group">
                    <SidemenuItem title="Edit profile" link="/accounts/edit" />
                    <SidemenuItem title="Change password" link="/" />
                    <SidemenuItem title="Apps and websites" link="/" />
                    <SidemenuItem title="Email notifications" link="/" />
                    <SidemenuItem title="Push notifications" link="/" />
                    <SidemenuItem title="Manage contacts" link="/" />
                    <SidemenuItem title="Privacy and security" link="/" />
                    <SidemenuItem title="Ads" link="/" />
                    <SidemenuItem title="Supervison" link="/" />
                    <SidemenuItem title="Login activity" link="/" />
                    <SidemenuItem title="Emails from Instagram" link="/" />
                    <SidemenuItem title="Help" link="/" />
                    <SidemenuItem title="Digital collectibles" link="/" />
                </div>
            </div>
        </>
    )
}


const SidemenuItem = ({title, link})=>{
    return(
        <>
            <NavLink 
            end 
            to={link}
            className={
                ({isActive})=>(
                isActive 
                ? 
                'account-list-item-active list-group-item list-group-item-action px-4' 
                : 
                'account-list-item-active list-group-item list-group-item-action px-4'
                )}
            style={
                ({isActive})=>(
                isActive 
                ? 
                {borderLeft:"2px solid var(--text)",fontFamily:"proximanNova-bold"} 
                : 
                {}
                )}>
                {title}
            </NavLink>
        </>
    )
}
