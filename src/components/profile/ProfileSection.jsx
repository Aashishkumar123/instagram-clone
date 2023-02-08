import { ProfileImg } from "./ProfileImg";
import { ProfileInfo } from "./ProfileInfo";


export const ProfileSection = ()=>{
    return(
        <>
            <div className="instagram-profile-section px-5 mx-auto">
                <div className="row">
                    <div className="col-sm-3 text-center mt-5">
                        <ProfileImg />
                    </div>
                    <div className="col-sm-9 px-5 mt-2">
                        <ProfileInfo />
                    </div>
                    <div className="mt-4"></div>
                    <hr />
                </div>
            </div>
        </>
    )
}
