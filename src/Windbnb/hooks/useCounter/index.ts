import { Dispatch, useReducer } from 'react'

import { DECREMENT, INCREMENT, RESET } from '../../constants/UIConstants'

function useCounter(): [number, Dispatch<string>] {
   const reduceMethod = (presentCount: number, action: string): number => {
      switch (action) {
         case INCREMENT:
            return presentCount + 1
         case DECREMENT:
            return presentCount - 1
         case RESET:
            return 0
         default:
            return presentCount
      }
   }

   const [count, setCount] = useReducer(reduceMethod, 0)

   return [count, setCount]
}

export default useCounter
