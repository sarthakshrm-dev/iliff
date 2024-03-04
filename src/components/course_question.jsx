import React, { useState } from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Modal from '@mui/material/Modal';
import { Box, Typography, TextField, Button } from '@mui/material';

function CourseQuestion({ number, question }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editedQuestion, setEditedQuestion] = useState(question);

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

  const handleQuestionChange = (event) => {
    setEditedQuestion(event.target.value);
  };

  return (
    <div className='w-full rounded-2xl mt-5 flex gap-2 h-10 p-5 items-center border border-gray-200 border-solid'>
      <div>Q{number}.</div>
      <div className='line-clamp-1'>{question}</div>
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
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4, borderRadius: '20px' }}>
          <Typography variant="h5" id="modal-title" gutterBottom fontWeight="bold">
            Edit Question
          </Typography>
          <Typography variant="body1" gutterBottom>
            Enter Question:
          </Typography>
          <TextField
  id="editedQuestion"
  label=""
  value={editedQuestion}
  onChange={handleQuestionChange}
  fullWidth
  sx={{ backgroundColor: 'primary.grey' }}
/>

          <Button variant="contained" color="primary" onClick={handleEditModalClose} sx={{ mt: 2, width:"100%"}}>Save</Button>
        </Box>
      </Modal>
    </div>
  );
}

export default CourseQuestion;
