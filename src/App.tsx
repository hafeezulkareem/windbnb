import React, { ReactElement } from 'react'

import stays from './data/stays.json'
import Stay from './Windbnb/components/Stay'

function App(): ReactElement {
   return (
      <div>
         <Stay stayDetails={stays[0]} />
      </div>
   )
}

export default App
