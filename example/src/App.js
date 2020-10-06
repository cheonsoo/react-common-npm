import React, { Component } from 'react'

import { Components } from 'npm-react-common'

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Components.SaveButton />
          <Components.CancelButton />
          <Components.BrandCode />
        </div>
      </div>
    )
  }
}

export default App
