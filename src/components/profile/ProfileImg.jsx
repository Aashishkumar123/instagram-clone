import profile_img from "../../static/images/profile.png";


export const ProfileImg = ()=>{
    return(
        <>
            <div className="profile-img">
                <img src={profile_img} alt="profile" />
            </div>
        </>
    )
}
