# personalsiteassets

> Assets of my personal website

[![NPM](https://img.shields.io/npm/v/personalsiteassets.svg)](https://www.npmjs.com/package/personalsiteassets) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save personalsiteassets
```

## Usage

```jsx
import React, { useState } from 'react'
import { FlipCard, Dropdown, Button3D } from '@tristan2000/personalsite-assets'
import './App.css'

function App() {
  const [open, setOpen] = useState(true)
  const [value, setValue] = useState('')

  const handleSelect = (selected) => {
    alert(selected)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div className='App'>
      <Dropdown
        items={['1', '2', '3']}
        open={open}
        orgin={'top'} // or "bottom"
        onSelect={handleSelect}
        onClose={handleClose}
      ></Dropdown>

      <Button3D logo='logo192.png'></Button3D>

      <FlipCard
        title='title'
        description='description'
        image='logo192.png'
      ></FlipCard>
    </div>
  )
}

export default App
```

## License

MIT © [Tristan816la](https://github.com/Tristan816la)
