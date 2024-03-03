import React, { useState } from 'react';
import { tokens } from "../../../theme";
import { useNavigate } from "react-router-dom";
import { Grid, TextField, Button, Typography, Container, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

function Edit_Profile() {
    
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: 'Jane Doe',
    dateOfBirth: '2022-05-20',
    bio: 'Lorem ipsum is simple dummy text that can help you until that can be tor op be on inpsom lorem poldo untill that on simple dummy text that can help you until that can be tor op be on inpsom simple dummy text that can help you until that simple dummy text that can help you until that can be tor op be on inpsom lorem poldo untill poldo untill',
    genderIdentity: 'Male',
    racialIdentity: 'Native American',
    sexualOrientation: 'Heterosexual',
    selectIdentity: 'University of Texas'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to server
    console.log(formData);
  };

  const [editp, setEditp] = useState(false);
  const colors = tokens();

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
          marginBottom: "0.5rem",
        }}
      >
        <h3>Edit User</h3>
        <Button
          className="classic_btn"
          style={{
            background: colors.purple,
          }}
          onClick={()=>{navigate("/user/profile")}}
        >
          Back
        </Button>
      </div>

      <div role="edit_button" className='flex items-center justify-center'>
        <Button
          style={{
            background: editp ? "grey" : colors.yellow,
            borderRadius: "20px",
            fontSize: "9px",
            fontWeight: "900",
            color: "black",
            opacity: editp ? 0.5 : 1,
            padding: "10px 20px 10px 20px",
            marginRight: "4px",
            '&:hover': {
              background: colors.yellowHover,
            }
          }}
          onClick={() => { setEditp(!editp) }}
        >
          Edit Profile
        </Button>
        <Button
          style={{
            background: editp ? colors.yellow : "grey",
            borderRadius: "20px",
            fontSize: "9px",
            fontWeight: "900",
            color: "black",
            padding: "10px 20px 10px 20px",
            opacity: editp ? 1 : 0.5,
            '&:hover': {
              background: colors.yellowHover,
            }
          }}
          onClick={() => { setEditp(!editp) }}
        >
          Edit Address
        </Button>
      </div>
      <div role="edit_form">
        {editp ? (
          <div className='mt-5'>
      <Container maxWidth="md">
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1" gutterBottom>Address</Typography>
              <TextField
                fullWidth
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1" gutterBottom>City</Typography>
              <TextField
                fullWidth
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1" gutterBottom>State</Typography>
              <TextField
                fullWidth
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1" gutterBottom>Country</Typography>
              <TextField
                fullWidth
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1" gutterBottom>Zip Code</Typography>
              <TextField
                fullWidth
                id="zipCode"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        </form>
      </Container>
    </div>
        ) : (
          <div className='mt-5'>
          <Container maxWidth="md" >
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <div>
                      <Typography variant="subtitle1" gutterBottom>
                        Name *
                      </Typography>
                      <TextField
                        fullWidth
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        style={{
                          backgroundColor: "#F0F0F0",
                          borderRadius: "10px",
                         
                        }}
                      />
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <div>
                      <Typography variant="subtitle1" gutterBottom>
                        Date of Birth *
                      </Typography>
                      <TextField
                        fullWidth
                        type="date"
                        id="dateOfBirth"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                        required
                        style={{
                          backgroundColor: "#F0F0F0",
                          borderRadius: "10px",
                        
                        }}
                      />
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <div>
                      <Typography variant="subtitle1" gutterBottom>
                        Bio *
                      </Typography>
                      <TextField
                        fullWidth
                        multiline
                        rows={4}
                        id="bio"
                        name="bio"
                        value={formData.bio}
                        onChange={handleChange}
                        required
                        style={{
                          backgroundColor: "#F0F0F0",
                          borderRadius: "10px",
                        
                        }}
                      />
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <div>
                      <Typography variant="subtitle1" gutterBottom>
                        Gender Identity *
                      </Typography>
                      <TextField
                        fullWidth
                        id="genderIdentity"
                        name="genderIdentity"
                        value={formData.genderIdentity}
                        onChange={handleChange}
                        required
                        style={{
                          backgroundColor: "#F0F0F0",
                          borderRadius: "10px",
                       
                        }}
                      />
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <div>
                      <Typography variant="subtitle1" gutterBottom>
                        Racial Identity *
                      </Typography>
                      <TextField
                        fullWidth
                        id="racialIdentity"
                        name="racialIdentity"
                        value={formData.racialIdentity}
                        onChange={handleChange}
                        required
                        style={{
                          backgroundColor: "#F0F0F0",
                          borderRadius: "10px",
                       
                        }}
                      />
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <div>
                      <Typography variant="subtitle1" gutterBottom>
                        Sexual Orientation *
                      </Typography>
                      <TextField
                        fullWidth
                        id="sexualOrientation"
                        name="sexualOrientation"
                        value={formData.sexualOrientation}
                        onChange={handleChange}
                        required
                        style={{
                          backgroundColor: "#F0F0F0",
                          borderRadius: "10px",
                         
                        }}
                      />
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <div>
                      <Typography variant="subtitle1" gutterBottom>
                        Select who you are *
                      </Typography>
                      <FormControl fullWidth>
                        <Select
                          id="selectIdentity"
                          name="selectIdentity"
                          value={formData.selectIdentity}
                          onChange={handleChange}
                          required
                          style={{
                            backgroundColor: "#F0F0F0",
                            borderRadius: "10px",
                            
                          }}
                        >
                          <MenuItem value="">Select...</MenuItem>
                          <MenuItem value="Heterosexual">Heterosexual</MenuItem>
                          <MenuItem value="Student">Student</MenuItem>
                          <MenuItem value="Church or Demonination">Church or Denomination</MenuItem>
                          <MenuItem value="Your Company">Your Company</MenuItem>
                          <MenuItem value="N/A">N/A</MenuItem>
                          <MenuItem value="School">School</MenuItem>
                          <MenuItem value="University of Texas">University of Texas</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </Grid>
                </Grid>
              </form>
            </Container>
          </div>
        )}
    
      </div>
      <div className='flex justify-center mt-8'> <Button style={{
            padding:"10px 120px 10px 120px",
            background:colors.darkOlive,
            color:"white",
            fontSize:"10px",
            fontWeight:"600",
        }}> Update</Button></div>
     
    </div>
  )
}

export default Edit_Profile;
