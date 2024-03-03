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
import { tokens } from "../../theme";

const UserDataTable = () => {
  const navigate = useNavigate();
  const colors = tokens();
  // Dummy user data for demonstration
  const [searchText, setSearchText] = useState("");
  const [userData, setUserData] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      phone: "123-456-7890",
      status: "Active",
      creationDate: "2024-02-26",
    },
    {
      id: 2,
      name: "Jane Doe",
      email: "jane@example.com",
      phone: "987-654-3210",
      status: "Inactive",
      creationDate: "2024-02-25",
    },
    // Add more user data as needed
  ]);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // State for modal
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleOpenDeleteModal = (userId) => {
    setSelectedUserId(userId);
    setDeleteModalOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setSelectedUserId(null);
    setDeleteModalOpen(false);
  };

  const handleDeleteUser = () => {
    // Perform delete action here...
    // For example, filter out the user with the selectedUserId
    setUserData((prevData) =>
      prevData.filter((user) => user.id !== selectedUserId)
    );
    handleCloseDeleteModal();
  };

  const renderPageNumbers = () => {
    const totalPages = Math.ceil(userData.length / rowsPerPage);
    const pages = [];

    if (totalPages <= 5) {
      // Display all page numbers if there are less than or equal to 5 pages
      for (let i = 0; i < totalPages; i++) {
        pages.push(
          <button
            key={i}
            style={{
              fontSize: "0.8rem",
              width: "2rem",
              height: "2rem",
              minWidth: "unset",
              backgroundColor: i === page ? colors.purple : "transparent",
              color: i === page ? "#fff" : "#000",
              cursor: "pointer",
              borderRadius: "10px",
            }}
            onClick={() => handleChangePage(i)}
          >
            {i + 1}
          </button>
        );
      }
    } else {
      // Display first 2 pages, '...', current page, '...', last page
      pages.push(
        <button
          style={{
            fontSize: "0.8rem",
            width: "2rem",
            height: "2rem",
            minWidth: "unset",
            backgroundColor: "transparent",
            color:  "#000",
            cursor: "pointer",
            borderRadius: "10px",
          }}
          onClick={() => handleChangePage(1)}
        >
          1
        </button>
      );

      if (page >= 3) {
        pages.push(
          <Button key="ellipsis-start" disabled>
            ...
          </Button>
        );
      }

      for (
        let i = Math.max(1, page - 1);
        i <= Math.min(page + 1, totalPages - 2);
        i++
      ) {
        pages.push(
          <button
            key={i}
            style={{
              fontSize: "0.8rem",
              width: "2rem",
              height: "2rem",
              minWidth: "unset",
              backgroundColor: i === page ? colors.purple : "transparent",
              color: i === page ? "#fff" : "#000",
              cursor: "pointer",
              borderRadius: "10px",
            }}
            onClick={() => handleChangePage(i)}
          >
            {i + 1}
          </button>
        );
      }

      if (page <= totalPages - 4) {
        pages.push(
          <Button key="ellipsis-end" disabled>
            ...
          </Button>
        );
      }

      pages.push(
        <button
          style={{
            fontSize: "0.8rem",
            width: "2rem",
            height: "2rem",
            minWidth: "unset",
            backgroundColor: page === totalPages-1 ? colors.purple : "transparent",
            color: page === totalPages-1 ? "#fff" : "#000",
            cursor: "pointer",
            borderRadius: "10px",
          }}
          onClick={() => handleChangePage(totalPages - 1)}
        >
          {totalPages}
        </button>
      );
    }

    return pages;
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
          alignItems: "center",
          marginBottom: "0.5rem",
        }}
      >
        <h3>User List</h3>
        <div style={{ position: "relative", width: "30%" }}>
          <SearchIcon
            style={{
              position: "absolute",
              left: "10px",
              top: "22%",
              color: "#555", // Change the color as needed
            }}
          />
          <input
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "20px",
              border: "1px solid #ccc",
              backgroundColor: "#f0f0f0", // Grey background color
              paddingLeft: "30px", // Adjusted for the icon
            }}
          />
        </div>
      </div>
      <Grid item xs={12}>
        <TableContainer
          component={Paper}
          sx={{ boxShadow: "none", border: "none" }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Email</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Phone</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Status</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Creation Date</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <Avatar
                          alt={user.name}
                          src={`https://api.adorable.io/avatars/40/${user.id}`}
                          sx={{
                            width: 40,
                            height: 40,
                            borderRadius: 2,
                            marginRight: 2,
                          }}
                        />
                        {user.name}
                      </div>
                    </TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.phone}</TableCell>
                    <TableCell>{user.status}</TableCell>
                    <TableCell>{user.creationDate}</TableCell>
                    <TableCell>
                      <IconButton
                        onClick={() => navigate("/user/profile")}
                        sx={{
                          borderRadius: "10px",
                          backgroundColor: colors.purple,
                          marginRight: "5px",
                          width: "35px",
                          height: "35px",
                        }}
                      >
                        <img
                          src={require("../../assets/view-icon.png")}
                          alt=""
                        />
                      </IconButton>

                      <IconButton
                        onClick={() => console.log("Lock clicked")}
                        sx={{
                          borderRadius: "10px",
                          backgroundColor: colors.olive,
                          marginRight: "5px",
                          width: "35px",
                          height: "35px",
                        }}
                      >
                        <img
                          src={require("../../assets/lock-closed-icon.png")}
                          alt=""
                        />
                      </IconButton>

                      <IconButton
                        onClick={() => handleOpenDeleteModal(user.id)}
                        sx={{
                          borderRadius: "10px",
                          backgroundColor: colors.red,
                          width: "35px",
                          height: "35px",
                        }}
                      >
                        <img
                          src={require("../../assets/delete-icon.png")}
                          alt=""
                        />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid item xs={12} style={{ textAlign: "left", marginTop: "0.5rem" }}>
        <Button
          disabled={page === 0}
          onClick={() => handleChangePage(page - 1)}
        >
          Previous
        </Button>
        {renderPageNumbers()}
        <Button
          disabled={page === Math.ceil(userData.length / rowsPerPage) - 1}
          onClick={() => handleChangePage(page + 1)}
        >
          Next
        </Button>
      </Grid>
      <Modal open={deleteModalOpen} onClose={handleCloseDeleteModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h6" component="div">
            Confirm Deletion
          </Typography>
          <Typography sx={{ mb: 2 }}>
            Are you sure you want to delete this user?
          </Typography>
          <Button onClick={handleCloseDeleteModal} sx={{ mr: 2 }}>
            Cancel
          </Button>
          <Button onClick={handleDeleteUser} variant="contained" color="error">
            Delete
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default UserDataTable;
