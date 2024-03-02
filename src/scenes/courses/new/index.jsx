import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { tokens } from "../../../theme";

const NewCourse = () => {
    const navigate = useNavigate();

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
          alignItems: "center"
        }}
      >
        <h3>Create New Courses</h3>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "0.5rem",
          }}
        >
          <Button
            onClick={() => navigate("/courses")}
            variant="contained"
            color="secondary"
          >
            Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NewCourse;
