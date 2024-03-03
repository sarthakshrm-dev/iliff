import React, { useState } from "react";
import {
  Select,
  MenuItem,
  Avatar,
  Button,
  Container,
  Grid,
  Typography,
  TextField,
  FormControlLabel,
  Switch,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { tokens } from "../../../theme";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { AlignHorizontalCenter, AlignHorizontalLeft, AlignHorizontalRight } from "@mui/icons-material";

const NewCourse2 = () => {
  const colors = tokens();
  const navigate = useNavigate();
  const [currentSession, setCsession] = useState([]);
  const [question, setQuestion] = useState(false);

  return (
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
        <h3>Create New Courses</h3>
        <Button
          onClick={() => navigate("/courses")}
          variant="contained"
          color="secondary"
          className="classic_btn"
        >
          Back
        </Button>
      </div>
      <div role="new courses session">
        <h3>All Session</h3>
        <div className="flex">
          <div className="w-4/12 flex flex-col">
            <div
              role="session_button_component"
              key={1}
              onClick={() => {
                currentSession == 1 ? setCsession(0) : setCsession(1);
              }}
              className="w-full flex justify-around items-center gap-2 rounded-lg flex shadow-md p-2 bg-white"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 14.625C18 15.2925 17.8021 15.945 17.4312 16.5C17.0604 17.0551 16.5333 17.4876 15.9166 17.7431C15.2999 17.9985 14.6213 18.0654 13.9666 17.9351C13.3119 17.8049 12.7105 17.4835 12.2385 17.0115C11.7665 16.5395 11.4451 15.9381 11.3149 15.2834C11.1846 14.6287 11.2515 13.9501 11.5069 13.3334C11.7624 12.7167 12.1949 12.1896 12.75 11.8188C13.305 11.4479 13.9575 11.25 14.625 11.25C15.5201 11.25 16.3786 11.6056 17.0115 12.2385C17.6444 12.8714 18 13.7299 18 14.625Z"
                  fill="#792CB5"
                />
                <g opacity="0.4">
                  <path
                    opacity="0.55"
                    d="M11.25 2.25C11.25 1.65326 11.4871 1.08097 11.909 0.65901C12.331 0.237053 12.9033 0 13.5 0L15.75 0C16.3467 0 16.919 0.237053 17.341 0.65901C17.7629 1.08097 18 1.65326 18 2.25V4.5C18 5.09674 17.7629 5.66903 17.341 6.09099C16.919 6.51295 16.3467 6.75 15.75 6.75H13.5C12.9033 6.75 12.331 6.51295 11.909 6.09099C11.4871 5.66903 11.25 5.09674 11.25 4.5V2.25Z"
                    fill="#792CB5"
                  />
                  <path
                    opacity="0.55"
                    d="M0 2.25C0 1.65326 0.237053 1.08097 0.65901 0.65901C1.08097 0.237053 1.65326 0 2.25 0L4.5 0C5.09674 0 5.66903 0.237053 6.09099 0.65901C6.51295 1.08097 6.75 1.65326 6.75 2.25V4.5C6.75 5.09674 6.51295 5.66903 6.09099 6.09099C5.66903 6.51295 5.09674 6.75 4.5 6.75H2.25C1.65326 6.75 1.08097 6.51295 0.65901 6.09099C0.237053 5.66903 0 5.09674 0 4.5V2.25Z"
                    fill="#792CB5"
                  />
                  <path
                    opacity="0.55"
                    d="M0 13.5C0 12.9033 0.237053 12.331 0.65901 11.909C1.08097 11.4871 1.65326 11.25 2.25 11.25H4.5C5.09674 11.25 5.66903 11.4871 6.09099 11.909C6.51295 12.331 6.75 12.9033 6.75 13.5V15.75C6.75 16.3467 6.51295 16.919 6.09099 17.341C5.66903 17.7629 5.09674 18 4.5 18H2.25C1.65326 18 1.08097 17.7629 0.65901 17.341C0.237053 16.919 0 16.3467 0 15.75V13.5Z"
                    fill="#792CB5"
                  />
                </g>
              </svg>
              <span>Title Here</span>
              <div className={`grow flex justify-end p-2 `}>
                <ArrowForwardIosIcon
                  sx={{
                    transform: currentSession === 1 ? "rotate(90deg)" : "",
                  }}
                />
              </div>
            </div>
          </div>
          <div role="Edit_Area" className="w-full ml-5">
            <div role="button_new2">
              <Button
                style={{
                  background: question ? "grey" : colors.yellow,
                  borderRadius: "20px",
                  fontSize: "9px",
                  fontWeight: "900",
                  color: "black",
                  opacity: question ? 0.5 : 1,
                  padding: "10px 20px 10px 20px",

                  marginRight: "4px",
                  "&:hover": {
                    background: colors.yellowHover,
                  },
                }}
                onClick={() => {
                  setQuestion(!question);
                }}
              >
                Course Content
              </Button>
              <Button
                style={{
                  background: question ? colors.yellow : "grey",
                  borderRadius: "20px",
                  fontSize: "9px",
                  fontWeight: "900",
                  color: "black",
                  padding: "10px 20px 10px 20px",
                  opacity: question ? 1 : 0.5,
                  "&:hover": {
                    background: colors.yellowHover,
                  },
                }}
                onClick={() => {
                  setQuestion(!question);
                }}
              >
                Questions
              </Button>
            </div>
            <div role="edit field" className="flex flex-col gap-3 mt-3">
            <Typography variant="subtitle1" fontWeight="bold">
        Session Title
      </Typography>
      <TextField
        id="sessionTitle"
        fullWidth
        variant="standard"
 InputProps={{
        disableUnderline: true,
      }}
        style={{background:colors.bgGrey,
        borderRadius:"25px", padding:"20px"}}
      />

   
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default NewCourse2;
