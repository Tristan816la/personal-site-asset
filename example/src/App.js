import React from 'react'

import {
  DuplicateComponent,
  Dropdown,
  Button3D,
  FlipCard
} from 'personalsiteassets'
import 'personalsiteassets/dist/index.css'

const App = () => {
  const handleSelect = (selected) => {
    alert(selected)
  }
  return (
    <div>
      <DuplicateComponent text='Create React Library Example 😄'></DuplicateComponent>
      <Dropdown
        items={['1', '2', '3']}
        open
        origin='bottom'
        onSelect={handleSelect}
      ></Dropdown>

      {/* <Button3D></Button3D> */}
      <FlipCard title='Hello' description='This is' image='random'></FlipCard>
    </div>
  )
}

export default App
