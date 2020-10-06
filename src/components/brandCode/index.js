import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Button from '../common/button/buttonWithIcon'
import Input from '../common/input/basic'
import styles from '../../resources/css/styles'
// import { BrandCodeSearchModal } from 'gs-react-components'
import BrandCodeSearchModal from '../brandCodeSearchModal'

class BrandCode extends Component {
  constructor(props) {
    super(props)
    this.state = { open: false }
  }

  handleChange = (key) => (evt) => {
    console.log(`### key: ${key}, value: ${evt.target.value}`)
  }

  render() {
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <div className={classes.label}>BRAND CODE</div>
        <div>
          <Input
            className={classes.input_nm}
            label='BRAND ID'
            size='small'
            onChange={this.handleChange('id')}
          />
        </div>
        <div>
          <Input
            className={classes.input_nm}
            label='BRAND NAME'
            size='small'
            onChange={this.handleChange('name')}
          />
        </div>
        <div>
          <Button onClick={() => this.setState({ open: !this.state.open })}>
            CLICK
          </Button>
          <BrandCodeSearchModal
            open={this.state.open}
            onClose={() => this.setState({ open: !this.state.open })}
          />
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(BrandCode)
