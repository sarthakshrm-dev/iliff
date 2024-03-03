import React, { useState } from 'react';
import { Select, MenuItem, Avatar, Button, Container, Grid, Typography, TextField, FormControlLabel, Switch } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { tokens } from "../../../theme";

const NewCourse = () => {
  const colors = tokens();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    paidCourse: false,
    courseAmount: '',
    description: '',
    totalDuration: '',
    totalSession: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handlePaidCourseToggle = () => {
    setFormData({
      ...formData,
      paidCourse: !formData.paidCourse
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

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
      <Container maxWidth="md">
        <div className='flex justify-center'>
          <Avatar sx={{ width: 56, height: 56 }}> {/* Adjust Avatar properties as needed */}
            {/* Add Avatar content here */}
          </Avatar>
        </div>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1" style={{ fontWeight: 'bold', color: '#333' }}>Course Title</Typography>
              <TextField
                fullWidth
                placeholder="Course Title"
                name="courseTitle"
                value={formData.courseTitle}
                onChange={handleChange}
                style={{ backgroundColor: '#f0f0f0' }} // Background color for input field
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1" style={{ fontWeight: 'bold', color: '#333' }}>Course Category</Typography>
              <Select
                fullWidth
                name="courseCategory"
                value={formData.courseCategory}
                onChange={handleChange}
                style={{ backgroundColor: '#f0f0f0' }} // Background color for input field
              >
                <MenuItem value="Fundraising">Fundraising</MenuItem>
                <MenuItem value="Financial Proficiency">Financial Proficiency</MenuItem>
                <MenuItem value="Organizational Leadership">Organizational Leadership</MenuItem>
                <MenuItem value="Diversity, Equity, Inclusion, Belonging & Justice">Diversity, Equity, Inclusion, Belonging & Justice</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1" style={{ fontWeight: 'bold', color: '#333' }}>Total Duration</Typography>
              <Select
                fullWidth
                name="totalDuration"
                value={formData.totalDuration}
                onChange={handleChange}
                style={{ backgroundColor: '#f0f0f0' }} // Background color for input field
              >
                <MenuItem value="6 Weeks">6 Weeks</MenuItem>
                <MenuItem value="8 Weeks">8 Weeks</MenuItem>
                <MenuItem value="10 Weeks">10 Weeks</MenuItem>
                <MenuItem value="12 Weeks">12 Weeks</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1" style={{ fontWeight: 'bold', color: '#333' }}>Course Language</Typography>
              <TextField
                fullWidth
                placeholder="Course Language"
                name="courseLanguage"
                value={formData.courseLanguage}
                onChange={handleChange}
                style={{ backgroundColor: '#f0f0f0' }} // Background color for input field
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1" style={{ fontWeight: 'bold', color: '#333' }}>Course Instructor</Typography>
              <Select
                fullWidth
                name="courseInstructor"
                value={formData.courseInstructor}
                onChange={handleChange}
                style={{ backgroundColor: '#f0f0f0' }} // Background color for input field
              >
                <MenuItem value="Amanda Henderson">Amanda Henderson</MenuItem>
                <MenuItem value="Linda Newell">Linda Newell</MenuItem>
                <MenuItem value="Dr. Baranda Fermin">Dr. Baranda Fermin</MenuItem>
                <MenuItem value="Dr. Jason Warr">Dr. Jason Warr</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1" style={{ fontWeight: 'bold', color: '#333' }}>Total Session</Typography>
              <Select
                fullWidth
                name="totalSession"
                value={formData.totalSession}
                onChange={handleChange}
                style={{ backgroundColor: '#f0f0f0' }} // Background color for input field
              >
                <MenuItem value="6 Sessions">6 Sessions</MenuItem>
                <MenuItem value="7 Sessions">7 Sessions</MenuItem>
                <MenuItem value="8 Sessions">8 Sessions</MenuItem>
                <MenuItem value="9 Sessions">9 Sessions</MenuItem>
                <MenuItem value="10 Sessions">10 Sessions</MenuItem>
                <MenuItem value="11 Sessions">11 Sessions</MenuItem>
                <MenuItem value="12 Sessions">12 Sessions</MenuItem>
                <MenuItem value="13 Sessions">13 Sessions</MenuItem>
                <MenuItem value="14 Sessions">14 Sessions</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12}>
              <div className='flex justify-between items-center'>
                <div>  <Typography variant="subtitle1" style={{ fontWeight: 'bold', color: '#333' }}>Paid Course</Typography>
                <p>Lorem Ipsum is simply dummy text of the printing is simply dummy text of the printing</p>
              </div>
                <FormControlLabel
                  control={<Switch checked={formData.paidCourse} onChange={handlePaidCourseToggle} />}
                  label={formData.paidCourse ? 'Yes' : 'No'}
                />
              </div>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" style={{ fontWeight: 'bold', color: '#333' }}>Description</Typography>
              <TextField
                fullWidth
                placeholder="Description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                multiline
                rows={4}
                style={{ backgroundColor: '#f0f0f0' }} // Background color for input field
              />
            </Grid>
           
          </Grid>
        </form>
      </Container>
      <div className='flex justify-center mt-8'> <Button style={{
        padding: "10px 120px 10px 120px",
        background: colors.darkOlive,
        color: "white",
        fontSize: "10px",
        fontWeight: "600",
      }}> Next</Button></div>
    </div>
  );
};

export default NewCourse;
