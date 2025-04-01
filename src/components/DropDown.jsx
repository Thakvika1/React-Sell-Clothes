import React from 'react'
import { useState } from 'react'
import '../styles/drop-down.css'

function DropDown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionClick = (option) => {
    setIsOpen(!isOpen)
    onChange(option)
  }

  const renderedOptions = options.map((option) => {
    return (
      <div onClick={() => handleOptionClick(option)} key={option.value}>
        {option.label}
      </div>
    )
  })

  return (
    <>
      <div>
        <div onClick={handleClick}>{value?.label || 'Select...'}</div>
        {isOpen && <div>{renderedOptions}</div>}
      </div>
    </>
  )
}

export default DropDown
