import React, { useState } from 'react'
import "./loginpage.css"
import { useNavigate } from 'react-router';

const LoginPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        sessionStorage.setItem("user", JSON.stringify(email));
        sessionStorage.setItem("password", JSON.stringify(password));
        console.log(password);
        navigate("/home");
    };
    return (
        <div className='loginPageBody' >
            <div className='loginCard'>
                <div style={{ display: "flex", color: "#000000", alignItems: "center", width: "334.5px", height: "39px", margin: "40px 70px 35px 64px", paddingTop: "40px" }}>
                    <div style={{ borderLeft: "6px solid #F8D442", width: "12.5px", height: "39px" }}></div>
                    <div style={{ width: "322px", height: "39px", padding: "auto", fontSize: "32px", fontWeight: "bold" }}> MANAGE COURSES</div>
                </div>
                <h3 style={{ width: "87px", height: "27px", margin: "20px 192px 10px 192px", fontSize: "22px", color: "#000000" }}>SING IN</h3>
                <p style={{ width: "318px", height: "17px", margin: "0px 75px 10px 75px", fontSize: "14px", lineHeight: "17.07px", color: "#6C6C6C", paddingLeft: "20px" }}>Enter your credentials to access your account</p>
                <form onSubmit={handleSubmit}>
                    <div style={{ width: "410px", height: "71px", margin: "50px 30px 20px 30px " }}>
                        <label style={{ width: "41px", height: "17px", color: "#6C6C6C" }} htmlFor="">Email</label>
                        <input
                            style={{ width: "415px", height: "44px", marginTop: "10px" }}
                            type="email"
                            placeholder='Enter your email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div style={{ width: "410px", height: "71px", margin: "20px 30px 20px 30px " }}>
                        <label style={{ width: "41px", height: "17px", color: "#6C6C6C" }} htmlFor="">Password</label>
                        <input
                            style={{ width: "415px", height: "44px", marginTop: "10px" }}
                            type="password"
                            placeholder='Enter your password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button
                        type='submit'
                        style={{ width: "423px", height: "44px", margin: "15px 30px 27px 30px", backgroundColor: "#FEAF00", border: "none", borderRadius: "4px", color: "white", fontSize: "14px" }}>SIGN IN
                    </button>
                    <p style={{ margin: "0 99px 41px 99px", fontWeight: "400px", fontSize: "14px", color: "#6C6C6C" }}>Forgot your password? <span style={{ color: "#FEAF00" }}>Reset Password</span></p>


                </form>

            </div>

        </div>
    )
}

export default LoginPage