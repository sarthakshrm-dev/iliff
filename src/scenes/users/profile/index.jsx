import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Grid,
  InputAdornment,
  Button,
  Avatar,
  Modal,
  Box,
  Typography,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { tokens } from "../../../theme";

const CoursesTable = () => {
  const navigate = useNavigate();
  const colors = tokens();

  // Dummy user data for demonstration
  const [cCourse, setCcourse] = useState(false);
  const [userData, setUserData] = useState({   
    name: "John Doe",
    email: "jonathanwill@gmail.com",
    mobileNo: "888-5584-5668",
    dob: "05/16/2022",
    gender: "Male",
    racialIdentity: "Native American",
    whoYouAre: "Student",
    school: "University of taxes",
    address: "25, Lorem ipsom is simple dummy text",
    city: "Taxes",
    state: "Taxes",
    country: "USA",
    zipCode: "40085"
  });
  const formattedKeys = {
    mobileNo: "Mobile no",
    dob: "DOB",
    gender: "Gender",
    racialIdentity: "Racial Identity",
    whoYouAre: "Who you are",
    school: "School",
    address: "Address",
    city: "City",
    state: "State",
    country: "Country",
    zipCode: "Zip Code",
    email: "Email"
  };
  
  const coursesData = [
    { courseName: 'Course 1', category: 'Category 1', completed: '15/05/2023', cost: '$160' },
    { courseName: 'Course 2', category: 'Category 2', completed: '15/05/2023', cost: '$160' },
    { courseName: 'Course 3', category: 'Category 3', completed: '15/05/2023', cost: '$160' },
    { courseName: 'Course 4', category: 'Category 4', completed: '15/05/2023', cost: '$160' },
    { courseName: 'Course 5', category: 'Category 5', completed: '15/05/2023', cost: '$160' }
  ];
  
  
  return (
    <>
    <div
      style={{
        padding: "1.5rem",
        margin: "1rem 3rem",
        backgroundColor: "white",
        boxShadow: "0px 0px 12px -6px rgba(0,0,0,0.3)",
        borderRadius: "25px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h3>User Details</h3>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "0.5rem",
          }}
        >
          <div
            name="top_buttons"
            style={{
              display: "flex",
              gap: "10px",
            }}
          >
            <Button
              className="classic_btn"
              style={{
                background: colors.olive,
              }}
              onClick={() => navigate("/user/profile/edit")}
            >
             <img
                          src={require("../../../assets/edit-icon.png")}
                          alt=""
                        />
              Edit
            </Button>
            <Button
              className="classic_btn"
              style={{
                background: colors.red,
              }}
            >
                    <img
                          src={require("../../../assets/delete-icon.png")}
                          alt=""
                        />
              
              
              Delete
            </Button>
            <Button
              className="classic_btn"
              style={{
                background: colors.purple,
              }}
            >
            
              Back
            </Button>
          </div>
        </div>
      </div>


      <div role="profile_section" className="flex flex-wrap gap-4 items-center">
        <div className="flex justify-around items-center gap-2 mr-10">
          <Avatar></Avatar>
         <h4> {userData.name}</h4>
        </div>

        {Object.entries(userData).map(([key, value]) => (
    key !== 'name' && // Exclude the 'name' field
    <div key={key} className="flex justify-between flex-col gap-2 min-w-40">
      <span className="font-bold text-sm">{formattedKeys[key]}</span>
      <span className="font-thin text-xs">{value}</span>
    </div>
  ))}
      </div>
      
    </div>
    <div role="course_section"
       style={{
        padding: "1.5rem",
        margin: "1rem 3rem",
        backgroundColor: "white",
        boxShadow: "0px 0px 12px -6px rgba(0,0,0,0.3)",
        borderRadius: "25px",
      }}>
<div role="courses_button"  >
<Button
        style={{
          background:cCourse? "grey": colors.yellow ,
          borderRadius: "20px",
          fontSize: "9px",
          fontWeight: "900",
          color:"black",
          opacity:cCourse? 0.5:1,
          padding:"10px 20px 10px 20px",
          
          marginRight:"4px",
          '&:hover': {
            background: colors.yellowHover,
          }
        }}
        onClick={()=>{setCcourse(!cCourse)}}
       
      >
        Purchased Courses
      </Button>
      <Button
        style={{
          background:cCourse? colors.yellow: "grey",
          borderRadius: "20px",
          fontSize: "9px",
          fontWeight: "900",
          color:"black",
          padding:"10px 20px 10px 20px",
          opacity:cCourse?1:0.5,
          '&:hover': {
            background: colors.yellowHover,
          }
        }}
        onClick={()=>{setCcourse(!cCourse)}}
        
      >
        Completed Courses
      </Button>

</div>
<div role="course_table">
<div >
      {coursesData.map((course, index) => (
        <div key={index} style={{ display:"flex",boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', margin: '20px', padding: '20px', borderRadius: '10px' }}>
          <div style={{ flex: 1,fontWeight:"700"}}>{course.courseName}</div>
          <div style={{ flex: 1,fontWeight:"400" }}>{course.category}</div>
          <div style={{ flex: 1, fontWeight:"400"}}>{course.completed}</div>
          <div style={{ flex: 2,fontWeight:"400", alignItems:"flex-end", display:"flex",flexDirection:"column", fontWeight:"700" }}>{course.cost}</div>
        </div>
      ))}
    </div>


</div>

    </div>
    </>
  );
};

export default CoursesTable;
