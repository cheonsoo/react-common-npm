import React from 'react'
import TextField from '@material-ui/core/TextField'
// import { makeStyles } from '@material-ui/core/styles'

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& .MuiTextField-root': {
//       margin: theme.spacing(1),
//       width: '25ch'
//     }
//   }
// }))

export default function FormPropsTextFields(props) {
  // const classes = useStyles()

  return (
    <TextField
      {...props}
      className={props.className}
      id='outlined-search'
      // label='Search field'
      type='text'
      variant='outlined'
      size={props.size}
    />
  )
}
