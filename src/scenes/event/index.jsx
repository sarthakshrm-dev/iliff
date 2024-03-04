import React from 'react'
import { Button,IconButton,InputBase } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { tokens } from '../../theme';
import { useNavigate } from "react-router-dom";



function Events() {
    const colors = tokens();
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
        <h3>All Events</h3>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "0.5rem",
           
          }}
        >
          <Button
            
            variant="contained"
            color="secondary"
            sx={{borderRadius:"12px"}}
            onClick={() => navigate("/Events/new")}
            
          >
          <AddCircleIcon sx={{bgcolor:"secondary", color:"white",  marginLeft:"0.2rem"}}  />
           <span> Create New Event</span>
          </Button>
        </div>
        
     </div>
     <div role=' search and announcement list' className='flex flex-col'>
        <div role='search' style={{background:colors.bgGrey, width:"30%", borderRadius:"20px", padding:"6px"}}>
        <IconButton aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase
        placeholder="Search..."
        inputProps={{ 'aria-label': 'search' }}
        sx={{background:colors.bgGrey}}
      />
        </div>
        <div role='Events list'>
          
        </div>
        
     </div>
   
     </div>
    
  )
}

export default Events;