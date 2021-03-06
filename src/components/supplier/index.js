import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Button from '../common/button/buttonWithIcon'
import Input from '../common/input/basic'
import styles from '../../resources/css/styles'

class Supplier extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleChange = (key) => (evt) => {
    console.log(`### key: ${key}, value: ${evt.target.value}`)
  }

  render() {
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <div className={classes.label}>Supplier ID</div>
        <div>
          <Input
            className={classes.input_nm}
            label='Supplier ID'
            size='small'
            onChange={this.handleChange('id')}
          />
        </div>
        <div>
          <Input
            className={classes.input_nm}
            label='Supplier NAME'
            size='small'
            onChange={this.handleChange('name')}
          />
        </div>
        <div>
          <Button>CLICK</Button>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Supplier)
