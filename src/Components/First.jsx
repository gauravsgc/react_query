import React from 'react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import RestoreFromTrashRoundedIcon from '@mui/icons-material/RestoreFromTrashRounded';
export default function First() {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'green',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
  return (
    <div>
        {/* shortcut key ctrl+space */}
    
        {/* <Button variant="contained" color="success"
        style={{backgroundColor:"blue"}}
        size="large" startIcon={<DeleteIcon />}
        endIcon={<RestoreFromTrashRoundedIcon/>}
        // disableElevation
        disableRipple
        >Text</Button> */}
      <Grid container  spacing={2} columns={16} >
  <Grid item xs={12} md={8} >
    <Item>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus facilis odio ut nobis velit nostrum illo soluta cum, aspernatur iure, veritatis inventore doloremque molestias tempore, voluptatum dicta hic magnam. Nihil!</Item>
  </Grid>
  <Grid item xs={12} md={8} lg={4}>
    <Item>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos harum velit facere in voluptatibus iusto sapiente iste, molestias blanditiis repellat quos similique enim eos delectus nihil ullam saepe alias autem.</Item>
  </Grid>
</Grid>
    </div>
  )
}
