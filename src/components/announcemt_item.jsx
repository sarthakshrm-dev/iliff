import React, { useState } from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { AccessTimeOutlined } from '@mui/icons-material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Modal from '@mui/material/Modal';
import { Box, Typography, TextField, Button } from '@mui/material';

function AnnouncementItem({ title, text, date }) {
    // i have gut feeling that below i should use useEffect so check it once
  const [anchorEl, setAnchorEl] = useState(null);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedText, setEditedText] = useState(text);
  const [editedDate, setEditedDate] = useState(date); 


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEdit = () => {
    setEditModalOpen(true);
    handleClose();
  };

  const handleDelete = () => {
    // Implement delete functionality
    handleClose();
  };

  const handleEditModalClose = () => {
    setEditModalOpen(false);
  };

  const handleTitleChange = (event) => {
    setEditedTitle(event.target.value);
  };

  const handleTextChange = (event) => {
    setEditedText(event.target.value);
  };

  return (
    <div className='w-full rounded-2xl mt-5 p-5 border border-gray-200 border-solid flex'>
      <div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h5" gutterBottom fontWeight="bold">
            {editedTitle}
          </Typography>
          <AccessTimeOutlined style={{ marginLeft: '8px', opacity: 0.7 }} />
       
        <Typography variant="body1" gutterBottom>
          {editedDate}
        </Typography>
        </div>
        <div className='line-clamp-3'>{editedText}</div>
      </div>

      <MoreHorizIcon className='ml-auto' onClick={handleClick} />
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        sx={{ borderRadius: "50px" }}
      >
        <MenuItem onClick={handleEdit} className='px-4'>Edit</MenuItem>
        <MenuItem onClick={handleDelete} sx={{ color: "red" }}>Delete</MenuItem>
      </Menu>
      <Modal
        open={editModalOpen}
        onClose={handleEditModalClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          borderRadius: '20px'
        }}>
          <Typography variant="h5" id="modal-title" gutterBottom fontWeight="bold">
            Edit Announcement
          </Typography>
          <Typography variant="body1" gutterBottom>
            Enter Title:
          </Typography>
          <TextField
            id="editedTitle"
            label=""
            value={editedTitle}
            onChange={handleTitleChange}
            fullWidth
            sx={{ mb: 2 }}
          />
          <Typography variant="body1" gutterBottom>
            Enter Text:
          </Typography>
          <TextField
            id="editedText"
            label=""
            value={editedText}
            onChange={handleTextChange}
            fullWidth
            multiline
            rows={4}
            sx={{ backgroundColor: 'primary.grey', mb: 2 }}
          />
          <Button variant="contained" color="primary" onClick={handleEditModalClose} sx={{ width: "100%" }}>
            Save
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

export default AnnouncementItem;
