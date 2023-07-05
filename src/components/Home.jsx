import React from "react";
import user from "../assets/user2.png";
import course from "../assets/course2.png";
import student from "../assets/students2.png";
import payments from "../assets/dolar2.png";
import leftarrow from "../assets/Vector.png";
import bell from "../assets/bell 1.png";


const Home = () => {
    return (
        <div>
            <div style={{ width: "1170px", height: "60px", display: "flex", justifyContent: "space-between" }}>
                <img width={"17.44px"} height={"17.44px"} style={{ margin: "21.28px 1054.28px 21.28px 30.28px" }} src={leftarrow} alt="" />
                <img width={"17.44px"} height={"20px"} style={{ margin: "21.28px 1054.28px 21.28px 30.28px" }} src={bell} alt="" />
            </div>
            <div style={{ display: "flex" }}>
                <div style={{ width: "255px", height: "157px", borderRadius: "8px", marginLeft: "30px", marginTop: "30px", backgroundColor: "#F0F9FF" }}>
                    <img src={student} color="red" style={{ width: "48px", height: "28.5px", margin: "24.75px 187px -5px 20px" }} alt="" />
                    <p style={{ font: "14px", marginLeft: "15px" }}>Students</p>
                    <h4 style={{ width: "56px", height: "37px", fontSize: "30px", color: "black", margin: "-5px 20px 20px 179px " }}>243</h4>


                </div>
                <div style={{ width: "255px", height: "157px", borderRadius: "8px", marginLeft: "30px", marginTop: "30px", backgroundColor: "#FEF6FB" }}>
                    <img src={course} color="red" style={{ width: "28px", height: "35px", margin: "24.75px 187px -5px 20px" }} alt="" />
                    <p style={{ font: "14px", marginLeft: "15px" }}>Course</p>
                    <h4 style={{ width: "56px", height: "37px", fontSize: "30px", color: "black", margin: "-5px 20px 20px 179px " }}>13</h4>
                </div>
                <div style={{ width: "255px", height: "157px", borderRadius: "8px", marginLeft: "30px", marginTop: "30px", backgroundColor: "#FEFBEC" }}>
                    <img src={payments} color="red" style={{ width: "35px", height: "35px", margin: "24.75px 187px -5px 20px" }} alt="" />
                    <p style={{ font: "14px", marginLeft: "15px" }}>Payments</p>
                    <h4 style={{ width: "156px", height: "37px", fontSize: "30px", color: "black", margin: "-5px 20px 20px 99px " }}>556,000 ₺</h4>
                </div>
                <div style={{ width: "255px", height: "157px", borderRadius: "8px", marginLeft: "30px", marginTop: "30px", backgroundImage: "linear-gradient(to right, #FEAF00, #F8D442)" }}>
                    <img src={user} color="red" style={{ width: "34px", height: "34px", margin: "24.75px 187px -5px 20px" }} alt="" />
                    <p style={{ font: "14px", marginLeft: "15px" }}>Users</p>
                    <h4 style={{ width: "56px", height: "37px", fontSize: "30px", color: "black", margin: "-5px 20px 20px 219px " }}>3</h4>
                </div>

            </div>

        </div>
    );
};

export default Home;
