import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
// import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
// import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

import DataTable from './dataTable'

const styles = {
  root: {
    '& .MuiDialog-paperWidthSm': {
      maxWidth: 'none'
    }
  }
}

class FormDialog extends Component {
  render() {
    return (
      <Dialog
        className={this.props.classes.root}
        open={this.props.open}
        onClose={this.props.onClose}
        aria-labelledby='form-dialog-title'
      >
        <DialogTitle id='form-dialog-title'>Search</DialogTitle>
        <DialogContent>
          <DataTable />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.onClose} color='primary'>
            Cancel
          </Button>
          <Button onClick={this.props.onClose} color='primary'>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    )
  }
}

// export default FormDialog
export default withStyles(styles)(FormDialog)
