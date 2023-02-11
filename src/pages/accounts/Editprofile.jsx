import { Sidebar } from "../../components/sidebar/Sidebar";
import { Footer } from "../../components/Footer";
import "../../components/accounts/accounts.css";
import { Sidemenu } from "../../components/accounts/Sidemenu";


export const Editprofile = ()=>{
    return(
        <>
            <Sidebar />
            <div className="main-content">
                <div className="accounts mx-auto mt-4">
                    <div className="row">
                        <div className="col-sm-3">
                            <Sidemenu />
                        </div>
                        <div className="col-sm-9">
                            
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}
