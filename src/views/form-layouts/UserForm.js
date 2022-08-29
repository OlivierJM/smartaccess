/* eslint-disable react/display-name */
// ** React Imports
import { forwardRef, useState } from 'react'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import Select from '@mui/material/Select'

import CustomDatePicker from '../date-picker'

const UserForm = () => {
  // ** States
  const [language, setLanguage] = useState([])
  const [date, setDate] = useState(null)

  // Handle Select
  const handleSelectChange = event => {
    setLanguage(event.target.value)
  }

  return (
      <form onSubmit={e => e.preventDefault()}>
        <CardContent>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <Typography variant='body2' sx={{ fontWeight: 600 }}>
                Account Details
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Full Name' placeholder='Full Name' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth type='email' label='Email' placeholder='carterleonard@gmail.com' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Phone No.' placeholder='+1-123-456-8790' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Alternative Phone No.' placeholder='+1-123-XXX-8790' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomDatePicker
                  label="Date of Birth"
                  value={date}
                  setValue={setDate}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id='form-layouts-separator-select-label'>Gender</InputLabel>
                <Select
                  label='Gender'
                  defaultValue=''
                  id='form-layouts-separator-select'
                  labelId='form-layouts-separator-select-label'
                >
                  <MenuItem value='male'>Male</MenuItem>
                  <MenuItem value='female'>Female</MenuItem>
                  <MenuItem value='other'>Other</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id='form-layouts-separator-multiple-select-label'>Status</InputLabel>
                <Select
                  multiple
                  value={language}
                  onChange={handleSelectChange}
                  id='form-layouts-separator-multiple-select'
                  labelId='form-layouts-separator-multiple-select-label'
                  input={<OutlinedInput label='Language' id='select-multiple-language' />}
                >
                  <MenuItem value='active'>Active</MenuItem>
                  <MenuItem value='inactive'>Inactive</MenuItem>
                  <MenuItem value='pending'>Pending</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id='form-layouts-separator-multiple-select-label'>Role</InputLabel>
                <Select
                  multiple
                  value={language}
                  onChange={handleSelectChange}
                  id='form-layouts-separator-multiple-select'
                  labelId='form-layouts-separator-multiple-select-label'
                  input={<OutlinedInput label='Language' id='select-multiple-language' />}
                >
                  <MenuItem value='active'>Visitor</MenuItem>
                  <MenuItem value='inactive'>Resident</MenuItem>
                  <MenuItem value='pending'>Guest</MenuItem>
                  <MenuItem value='pending'>Admin</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </CardContent>
        <Divider sx={{ margin: 0 }} />
      </form>
  )
}

export default UserForm
