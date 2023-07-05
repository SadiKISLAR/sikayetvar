import React, { useState } from 'react'
import avatar from "../assets/avatar.png"
import home from "../assets/home-lg-alt 1.png"
import course from "../assets/course.png"
import students from "../assets/graduation-cap 1.png"
import dolar from "../assets/usd-square 1.png"
import report from "../assets/file-chart-line 1.png"
import setting from "../assets/sliders-v-square 1.png"
import logout from "../assets/logout.png"
import Home from '../components/Home'
import Students from '../components/Students'
import { useNavigate } from 'react-router-dom'

// import { FontAwesomeIcon } from '@fortawesome/free-solid-svg-icons'


const HomePage = () => {
    const [showComponent, setShowHComponent] = useState(true)
    const [activeButton, setActiveButton] = useState("home");
    const showHomeComp = () => {
        setShowHComponent(true)
    }

    const storedUser = sessionStorage.getItem("user");
    const user = JSON.parse(storedUser);
    const username = user.split("@")[0]
    const navigate = useNavigate();

    const showStudentsComp = () => {
        setShowHComponent(false)
    }

    const handleClick = (button) => {
        setActiveButton(button);
        if (button === "home") {
            showHomeComp();
        } else if (button === "students") {
            showStudentsComp();
        } else if (button === "logout") {
            navigate("/")
        }
    };

    return (
        <div style={{ width: "1440px", height: "900px", display: "flex" }}>
            <div style={{ width: "270px", height: "900px", backgroundColor: "#F2EAE1" }}>
                <div style={{ width: "213.5px", height: "24px", display: "flex", justifyContent: "center", alignItems: "center", margin: "18px 12.5px 36px 25px" }}>
                    <div style={{ borderLeft: "6px solid #F8D442", width: "12.5px", height: "24px" }}></div>
                    <div style={{ width: "201px", height: "24px", fontSize: "20px", fontWeight: "bold", marginBottom: "4px" }}>
                        MANAGE COURSES</div>
                </div>
                <div style={{ width: "219px", height: "150px", margin: "auto" }}>
                    <img style={{ margin: "10px 40px 10px 40px", borderRadius: "100%" }} src={avatar} alt="" />
                </div>
                <h3 style={{ width: "85px", height: "21px", margin: "16px 92px 10px 93px", fontSize: "17px" }}>{username}</h3>
                <p style={{ width: "48px", height: "17px", fontSize: "14px", color: "#FEAF00", margin: "auto" }}>Admin</p>
                <div style={{ width: "193px", height: "497px", margin: "80px 38px 31px 39px " }}>
                    <button
                        onClick={() => handleClick("home")}
                        style={{
                            width: "193px",
                            height: "41px",
                            marginBottom: "10px",
                            backgroundColor: activeButton === "home" ? "#FEAF00" : "#F2EAE1",
                            border: "none",
                            color: "black",
                            fontSize: "14px"
                        }}
                    >

                        <img style={{ marginRight: "20px" }} width={"19px"} height={"17px"} src={home} alt="" /> Home

                    </button>
                    <button
                        onClick={() => handleClick("course")}
                        style={{
                            width: "193px",
                            height: "41px",
                            marginBottom: "10px",
                            backgroundColor: activeButton === "course" ? "#FEAF00" : "#F2EAE1",
                            border: "none",
                            color: "black",
                            fontSize: "14px"
                        }}
                    >
                        <img style={{ marginRight: "19px" }} width={"12px"} height={"15px"} src={course} alt="" /> Course
                    </button>
                    <button
                        onClick={() => handleClick("students")}
                        style={{
                            width: "193px",
                            height: "41px",
                            marginBottom: "10px",
                            backgroundColor: activeButton === "students" ? "#FEAF00" : "#F2EAE1",
                            border: "none",
                            color: "black",
                            fontSize: "14px"
                        }}
                    >
                        <img style={{ marginRight: "10px" }} width={"20px"} height={"16px"} src={students} alt="" /> Students
                    </button>
                    <button
                        onClick={() => handleClick("payment")}
                        style={{
                            width: "193px",
                            height: "41px",
                            marginBottom: "10px",
                            backgroundColor: activeButton === "payment" ? "#FEAF00" : "#F2EAE1",
                            border: "none",
                            color: "black",
                            fontSize: "14px"
                        }}
                    >
                        <img style={{ marginRight: "10px" }} width={"15px"} height={"17px"} src={dolar} alt="" /> Payment
                    </button>
                    <button
                        onClick={() => handleClick("report")}
                        style={{
                            width: "193px",
                            height: "41px",
                            marginBottom: "10px",
                            backgroundColor: activeButton === "report" ? "#FEAF00" : "#F2EAE1",
                            border: "none",
                            color: "black",
                            fontSize: "14px"
                        }}
                    >
                        <img style={{ marginRight: "20px" }} src={report} alt="" /> Report
                    </button>
                    <button
                        onClick={() => handleClick("settings")}
                        style={{
                            width: "193px",
                            height: "41px",
                            marginBottom: "10px",
                            backgroundColor: activeButton === "settings" ? "#FEAF00" : "#F2EAE1",
                            border: "none",
                            color: "black",
                            fontSize: "14px"
                        }}
                    >
                        <img style={{ marginRight: "10px" }} src={setting} alt="" /> Settings
                    </button>
                    <button
                        onClick={() => handleClick("logout")}
                        style={{
                            width: "193px",
                            height: "41px",
                            backgroundColor: activeButton === "logout" ? "#FEAF00" : "#F2EAE1",
                            border: "none",
                            color: "black",
                            fontSize: "14px",
                            marginTop: "40px"

                        }}
                    >
                        Logout<img style={{ marginLeft: "20px" }} src={logout} alt="" />
                    </button>


                </div>

            </div>
            <div style={{ width: "1170px", height: "900px" }}>
                {showComponent ? <Home /> : <Students />}


            </div>

        </div>
    )
}

export default HomePage