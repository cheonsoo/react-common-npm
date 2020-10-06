import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Combobox from '../common/comboboxMaterial'
import Input from '../common/input/basic'
import { getPrdClsMListByLvl } from '../../http-client/filter'

const keyPrefix = 'clsLvl'

class Classifications extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clsCd: '',
      clsLvl1: '', // B31, 여행/서비스/금융
      clsLvl2: '',
      clsLvl3: '',
      clsLvl4: '',
      filters: {
        clsLvl1: [],
        clsLvl2: [],
        clsLvl3: [],
        clsLvl4: []
      }
    }
  }

  UNSAFE_componentWillReceiveProps = (props) => {
    if (props.init)
      this.setState({
        clsCd: '',
        clsLvl1: '',
        clsLvl2: '',
        clsLvl3: '',
        clsLvl4: ''
      })
  }

  componentDidMount() {
    const { selected = {} } = this.props
    let clsCd = ''
    for (let i = 1; i <= 4; i++) {
      let cd = selected[`${keyPrefix}${i}`]
      if (cd) clsCd = cd
    }
    this.setState({
      clsCd: clsCd,
      clsLvl1: selected.clsLvl1,
      clsLvl2: selected.clsLvl2,
      clsLvl3: selected.clsLvl3,
      clsLvl4: selected.clsLvl4
    })

    getPrdClsMListByLvl().then((res) => {
      this.setState((state) => {
        state.filters = {
          clsLvl1: res.lvl1,
          clsLvl2: res.lvl2,
          clsLvl3: res.lvl3,
          clsLvl4: res.lvl4
        }
        return state
      })
    })
  }

  handleSelect = (lvl) => (selected) => {
    this.setState(
      (state) => {
        if (selected.key === 'all') {
          state.clsCd = state[`clsLvl${lvl - 1}`]
          state[`clsLvl${lvl}`] = ''
        } else {
          state.clsCd = selected.key
          state[`clsLvl${lvl}`] = selected.key
        }

        for (let i = parseInt(lvl) + 1; i <= 4; i++) {
          state[`clsLvl${i}`] = ''
        }
        return state
      },
      () => {
        if (this.props.onSelect)
          this.props.onSelect({
            selected: this.state.clsCd,
            clsLvl1: this.state.clsLvl1,
            clsLvl2: this.state.clsLvl2,
            clsLvl3: this.state.clsLvl3,
            clsLvl4: this.state.clsLvl4
          })
      }
    )
  }

  renderDropdown = (lvl) => {
    const setDropboxItem = (_item) => {
      return {
        key: _item.prdClsCd,
        value: _item.prdClsNm
      }
    }

    const { disabled = {} } = this.props
    const { filters } = this.state
    const key = `${keyPrefix}${lvl}`

    let clsCd = this.state[`${keyPrefix}${parseInt(lvl)}`]
    if (!this.state[`${keyPrefix}${lvl}`]) {
      clsCd = 'all'
    }

    let items = []
    if (lvl === '1') {
      items = filters[key].map((item) => setDropboxItem(item))
    } else {
      items = filters[key]
        .filter(
          (item) =>
            item.upperPrdClsCd ===
            this.state[`${keyPrefix}${parseInt(lvl) - 1}`]
        )
        .map((item) => setDropboxItem(item))
    }
    if (items.length > 0) items.unshift({ key: 'all', value: '전체' })

    return (
      <Combobox
        variant='outline-secondary'
        className='customCombobox'
        id={`productClassification_clsLvl${lvl}`}
        comboboxItems={items}
        selectedKey={clsCd}
        disabled={disabled[`${keyPrefix}${lvl}` || true]}
        onSelect={this.handleSelect(lvl)}
      />
    )
  }

  render() {
    const { clsCd } = this.state
    return (
      <div className='inputComponent productClassification'>
        <div className='product-classification__group'>
          <div className='classification-selection__list'>
            <div className='classification-selection__item'>
              {this.renderDropdown('1')}
            </div>
            <div className='classification-selection__item'>
              {this.renderDropdown('2')}
            </div>
            <div className='classification-selection__item'>
              {this.renderDropdown('3')}
            </div>
            <div className='classification-selection__item'>
              {this.renderDropdown('4')}
            </div>
            <div className='classification-selection__item'>
              <Input type='text' disabled value={clsCd} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Classifications.propTypes = {
  init: PropTypes.bool,
  onSelect: PropTypes.func,
  selected: PropTypes.object,
  disabled: PropTypes.object,
  productClassification: PropTypes.object
}

export default Classifications
