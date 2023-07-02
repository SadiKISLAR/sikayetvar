import React from 'react'
import "./loginpage.css"

const LoginPage = () => {
    return (
        <div className='loginPageBody' >
            <div className='loginCard'>
                <div style={{ display: "flex", alignItems: "center", width: "334.5px", height: "39px", margin: "40px 70px 45px 64px", paddingTop: "40px" }}>
                    <div style={{ borderLeft: "6px solid #F8D442", width: "12.5px", height: "39px" }}></div>
                    <div style={{ width: "322px", height: "39px", padding: "auto", fontSize: "32px", fontWeight: "bold" }}> MANAGE COURSES</div>
                </div>
                <h3 style={{ width: "87px", height: "27px", margin: "40px 192px 10px 192px", fontSize: "22px" }}>SING IN</h3>
                <p></p>

            </div>

        </div>
    )
}

export default LoginPage