import { Spinner } from '@wonderflow/react-components'
import React from 'react'

const Loader = (props:any) => {
  return (
          <div className='loader' style={{ height:props. height, width: props.width, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Spinner dimension='big' />
      </div>
  )
}
export default Loader