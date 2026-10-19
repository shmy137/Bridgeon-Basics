import React, { memo } from 'react'

function Title() {
    console.log('rendering title')
  return (
    <div>
      <h2>Callback Hook</h2>
    </div>
  )
}

export default memo(Title)
