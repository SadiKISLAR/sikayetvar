import React from "react";
import user from "../assets/user.svg";
import course from "../assets/pink_course.svg";
import student from "../assets/blue-student.svg";
import business from "../assets/business.svg";
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


                </div>
                <div style={{ width: "255px", height: "157px", borderRadius: "8px", marginLeft: "30px", marginTop: "30px", backgroundColor: "#FEF6FB" }}></div>
                <div style={{ width: "255px", height: "157px", borderRadius: "8px", marginLeft: "30px", marginTop: "30px", backgroundColor: "#FEFBEC" }}></div>
                <div style={{ width: "255px", height: "157px", borderRadius: "8px", marginLeft: "30px", marginTop: "30px", backgroundImage: "linear-gradient(to right, #FEAF00, #F8D442)" }}></div>

            </div>

        </div>
    );
};

export default Home;
