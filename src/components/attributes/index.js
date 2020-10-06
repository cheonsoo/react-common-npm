import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Dropbox from '../common/dropbox/basic'
import styles from '../../resources/css/styles'

const items = [
  { key: '00', value: '매장속성' },
  { key: '01', value: '일반' },
  { key: '02', value: 'TV' },
  { key: '03', value: '백화점' },
  { key: '04', value: '파트너스' },
  { key: '05', value: '테마' },
  { key: '06', value: 'BP' }
]

class Attributes extends Component {
  handleChange = (selected) => {
    if (this.props.handleData) this.props.handleData(selected)
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <div className={classes.label}>Attributes</div>
        <div>
          <Dropbox
            items={items}
            onSelect={this.handleChange}
            toggleLabel={false}
          />
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Attributes)
