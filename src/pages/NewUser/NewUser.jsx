import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Alert,
  Avatar,
} from '@mui/material';

import './NewUser.css'

export default function NewUser() {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    profilePicture: null,
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setForm({ ...form, profilePicture: file });
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!form.username || !form.email || !form.password || !form.confirmPassword) {
      setError('Please Fill All Sections');
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError('Password and Confirm Pass is not Same!');
      return;
    }

    await fetch('https://dashboard-118f3-default-rtdb.firebaseio.com/users.json', {
      method: "POST",
      body: JSON.stringify(form)
    }).then(response => console.log(response))

    setSuccess('Registered Successfuly');
    console.log('Form Data:', form);
  };

  return (
    <div className='newUserContainer'>
      <Box
        component="form"

        onSubmit={handleSubmit}
        sx={{
          maxWidth: '50%',
          mx: 'auto',
          mt: 4,
          p: 3,
          border: '1px solid #ccc',
          borderRadius: 2,
          boxShadow: 2,
        }}
      >
        <Typography variant="h5" mb={2}>Register</Typography>

        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
        {success && <Alert severity="success" sx={{ mb: 2 }}>{success}</Alert>}

        <Box display="flex" flexDirection="column" alignItems="center" mb={2}>
          <Avatar
            src={preview}
            sx={{ width: 80, height: 80, mb: 1 }}
          />
          <Button variant="outlined" component="label">
            Choose Profile Photo
            <input
              type="file"
              accept="image/*"
              hidden
              onChange={handleFileChange}
            />
          </Button>
        </Box>

        <TextField
          fullWidth
          label="User Name"
          name="username"
          value={form.username}
          onChange={handleChange}
          margin="normal"
        />

        <TextField
          fullWidth
          label="Email"
          name="email"
          value={form.email}
          onChange={handleChange}
          margin="normal"
          type="email"
        />

        <TextField
          fullWidth
          label="Password"
          name="password"
          value={form.password}
          onChange={handleChange}
          margin="normal"
          type="password"
        />

        <TextField
          fullWidth
          label="Confirm Password"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={handleChange}
          margin="normal"
          type="password"
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          Sign up
        </Button>
      </Box>
    </div>
  );
}
