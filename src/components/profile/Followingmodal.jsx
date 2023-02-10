import { Link } from "react-router-dom"
import profile from "../../static/images/profile.png"


export const Followingmodal = ()=>{
    return(
        <>
            <div className="modal fade" id="followingModel" tabindex="-1" aria-labelledby="followingModelLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content followers-modal-content" style={{height:"50vh",overflow:"scroll"}}>
                        <div className="text-center followers-modal-header">
                            <div class="border-bottom pt-2 pb-1">
                                <h6 style={{fontFamily:"proximanNova-bold"}}>Followers</h6>
                            </div>
                        </div>
                        <div className="followers-modal-body text-center">
                            <FollowingProfile img={profile} username="joslcbnd-36" name="joullsj" />
                            <FollowingProfile img={profile} username="joslcbnd-36" name="joullsj" />
                            <FollowingProfile img={profile} username="joslcbnd-36" name="joullsj" />
                            <FollowingProfile img={profile} username="joslcbnd-36" name="joullsj" />
                            <FollowingProfile img={profile} username="joslcbnd-36" name="joullsj" />
                            <FollowingProfile img={profile} username="joslcbnd-36" name="joullsj" />
                            <FollowingProfile img={profile} username="joslcbnd-36" name="joullsj" />
                            <FollowingProfile img={profile} username="joslcbnd-36" name="joullsj" />
                            <FollowingProfile img={profile} username="joslcbnd-36" name="joullsj" />
                            <FollowingProfile img={profile} username="joslcbnd-36" name="joullsj" />
                            <FollowingProfile img={profile} username="joslcbnd-36" name="joullsj" />
                            <FollowingProfile img={profile} username="joslcbnd-36" name="joullsj" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


const FollowingProfile = ({img, username, name})=>{
    return(
        <>
            <div className="followers-profile px-3 my-3">
                <div className="d-flex justify-content-between">
                    <div className="followers-profile-info d-flex align-items-center">
                        <div className="followers-profile-img">
                            <img src={img} alt={name} className="img-fluid" style={{borderRadius:"50%",width:"50px"}} />
                        </div>
                        <div className="followers-profile-name px-2 text-start">
                            <div className="d-flex">
                                <h6 style={{fontFamily:"proximanNova-bold"}}>{username}</h6>
                                <Link to="" className="px-2" style={{textDecoration:"none",fontFamily:"proximanNova-bold",fontSize:"14px"}}>Follow</Link>
                            </div>
                            <p className="text-muted" style={{lineHeight:"0"}}>{name}</p>
                        </div>
                    </div>
                    <div className="followers-profile-remove-btn">
                        <button className="btn btn-light" style={{fontFamily:"proximanNova-bold",fontSize:"14px"}}>Remove</button>
                    </div>
                </div>
            </div>
        </>
    )
}
