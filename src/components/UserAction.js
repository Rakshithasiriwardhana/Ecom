import * as React from 'react';
import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
import { AiOutlineUserAdd } from "react-icons/ai";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function UserAction() {
  const [age, setAge] = React.useState('');
  

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  

  return (
    <Box sx={{ minWidth: 100 }}>
      <FormControl fullWidth>
        <AiOutlineUserAdd id="demo-simple-select-label">Profile</AiOutlineUserAdd>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="User"
          onChange={handleChange}
        >
          <MenuItem value={10}>My Profile</MenuItem>
          <MenuItem value={20}>Logout</MenuItem>
          <MenuItem value={30}>My Orders</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

