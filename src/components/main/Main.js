import React, {useState} from 'react'
import "./Main.css"
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
// div = Box
import Box from '@mui/material/Box';
/// select
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// input
import TextField from '@mui/material/TextField';

function Main() {
    const [age, setAge] = React.useState('');
    const [name, setName] = useState('');
    const ageData = [
        {
            title: "O'n",
            value: 10
        },
        {
            title: "Yigirma",
            value: 20
        },
        {
            title: "O'ttiz",
            value: 30
        },
    ]
    console.log(name);
  return (
    <div className='main'>
        <h2>Main</h2>
        <Button variant="contained">Assalomu Alaykum</Button>
        <Checkbox/>

        <Box sx={{ width: 120, marginLeft: "30px", marginTop: "20px" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Yoshingiz</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Yoshingiz"
          onChange={e=>setAge(e.target.value)}
        >
            {
                ageData?.map((item, inx)=><MenuItem key={inx} value={item.value}>{item.title}</MenuItem>)
            }
        </Select>
      </FormControl>
        </Box>

        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      className='input__wrapper'
    >
      <TextField onChange={e=>setName(e.target.value)} id="outlined-basic" label="Ismingiz" variant="outlined" />
      <TextField id="filled-basic" label="Familiyangiz" variant="outlined" />
      <TextField id="standard-basic" label="Ochestva" variant="outlined" />
    </Box>
    </div>
  )
}

export default Main