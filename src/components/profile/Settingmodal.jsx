import { Link } from "react-router-dom"


export const Settingmodal = ()=>{
    return(
        <>
            <div className="modal fade" id="settingModel" tabindex="-1" aria-labelledby="settingModelLabel" aria-hidden="true">
                <div className="modal-dialog modal-sm modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content setting-modal-content">
                        <div className="setting-modal-body text-center">
                            <div class="list-group">
                                <SettingItem link="" title="Change password" />
                                <SettingItem link="" title="QR Code" />
                                <SettingItem link="" title="Apps and Websites" />
                                <SettingItem link="" title="Notifications" />
                                <SettingItem link="" title="Privacy and Security" />
                                <SettingItem link="" title="Supervision" />
                                <SettingItem link="" title="Login activity" />
                                <SettingItem link="" title="Emails from Instagram" />
                                <SettingItem link="" title="Report a problem" />
                                <SettingItem link="" title="Log Out" />
                                <Link to="" data-bs-dismiss="modal" class="list-group-item list-group-item-action">Cancel</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


const SettingItem = ({title, link})=>{
    return(
        <>
            <Link to={link} class="list-group-item list-group-item-action">{title}</Link>
        </>
    )
}
