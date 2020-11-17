import React, { ReactElement } from 'react'

import stays from './data/stays.json'
import Stay from './Windbnb/components/Stay'

function App(): ReactElement {
   return (
      <div>
         <Stay stayDetails={stays[2]} />
      </div>
   )
}

export default App
