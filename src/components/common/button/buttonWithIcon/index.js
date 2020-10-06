import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Search from '@material-ui/icons/Search'
import style from './style.json'

const useStyles = makeStyles((theme) => style)

function SearchButton(props) {
  const classes = useStyles()

  const handleClick = (evt) => {
    if (props.onClick) props.onClick(evt)
  }

  return (
    <button className={classes.root} onClick={handleClick}>
      <Search />
    </button>
  )
}

export default SearchButton
