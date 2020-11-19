import React, { Component, ReactElement } from 'react'
import { Provider, observer } from 'mobx-react'

import WindbnbHomePage from './Windbnb/components/WindbnbHomePage'

import stores from './Common/stores'

@observer
class App extends Component {
   render(): ReactElement {
      return (
         <Provider {...stores}>
            <div>
               <WindbnbHomePage />
            </div>
         </Provider>
      )
   }
}

export default App
