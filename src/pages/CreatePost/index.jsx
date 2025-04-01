import React from 'react'
import DropDown from '../../components/DropDown'
import { useState } from 'react'

function CreatePost() {
  const [selection, setSelection] = useState(null)

  const handleSelect = (opiton) => {
    setSelection(opiton)
  }
  const options = [
    { label: 'Red', value: 'red' },
    { label: 'Green', value: 'green' },
    { label: 'Blue', value: 'blue' },
  ]
  return (
    <>
      <DropDown options={options} onChange={handleSelect} value={selection} />
    </>
  )
}

export default CreatePost
