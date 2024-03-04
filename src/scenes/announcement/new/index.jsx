import React, { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import { tokens } from '../../../theme';

function New_Announcement() {
    const colors = tokens();
  const [announcementTitle, setAnnouncementTitle] = useState('');
  const [announcementDate, setAnnouncementDate] = useState('');
  const [announcementDescription, setAnnouncementDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can handle form submission here
    console.log({
      title: announcementTitle,
      date: announcementDate,
      description: announcementDescription
    });
  };

  return (
    <div
      style={{
        padding: "1.5rem",
        margin: "1rem 3rem",
        backgroundColor: "white",
        boxShadow: "0px 0px 12px -6px rgba(0,0,0,0.3)",
        borderRadius: "25px",
        height:"80vh"
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h5" gutterBottom fontWeight="bold" style={{ marginBottom: '1rem' }}>
          Create New Announcement
        </Typography>

        <div style={{ marginBottom: '0.5rem' }}>
          <Button
            variant="contained"
            color="secondary"
            className='classic_btn'
          >
            Back
          </Button>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '400px' }}>
          <div style={{ marginBottom: '1rem' }}>
            <Typography variant="body1" gutterBottom fontWeight="bold">
              Announcement Title
            </Typography>
            <TextField
              label=""
              variant="standard"
              fullWidth
              margin="normal"
              value={announcementTitle}
              onChange={(e) => setAnnouncementTitle(e.target.value)}
              InputProps={{ disableUnderline: true }}
              sx={{ borderRadius: "12px", background: colors.bgGrey, padding: "10px" ,marginTop:"0px" }}
            />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <Typography variant="body1" gutterBottom fontWeight="bold">
              Announcement Date
            </Typography>
            <TextField
              label=""
              variant="standard"
              fullWidth
              margin="normal"
              type="date"
              value={announcementDate}
              onChange={(e) => setAnnouncementDate(e.target.value)}
              InputLabelProps={{ shrink: true }}
              InputProps={{ disableUnderline: true }}
              sx={{ borderRadius: "12px", background: colors.bgGrey, padding: "10px" ,marginTop:"0px"}}
            />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <Typography variant="body1" gutterBottom fontWeight="bold">
              Description
            </Typography>
            <TextField
              label=""
              variant="standard"
              fullWidth
              margin="normal"
              multiline
              rows={4}
              value={announcementDescription}
              onChange={(e) => setAnnouncementDescription(e.target.value)}
              InputProps={{ disableUnderline: true }}
              sx={{ borderRadius: "12px", background: colors.bgGrey, padding: "10px",marginTop:"0px"  }}
            />
          </div>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ marginTop: '1rem', width: '100%' }}
          >
            Create Announcement
          </Button>
        </form>
      </div>
    </div>
  );
}

export default New_Announcement;
