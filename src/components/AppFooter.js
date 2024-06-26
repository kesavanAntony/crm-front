import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a href="https://coreui.io" target="_blank" rel="noopener noreferrer">
          Optimista
        </a>
        <span className="ms-1">Ⓒ Copy rights reserved </span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Designed by</span>
        <a href="https://coreui.io/react" target="_blank" rel="noopener noreferrer">
          Optimista
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
