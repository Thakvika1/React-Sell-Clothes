import '../styles/tapbar.css'
import { useState } from 'react'

function Tapbar() {
  const tapbar = [
    '0-12 months',
    '1-2 years',
    '2-4 years',
    '4-5 years',
    '5 years+',
  ]
  const [selected, setSelected] = useState(null)

  const handleClick = (item) => {
    setSelected(item)
    console.log('Selected:', item)
  }

  return (
    <div className="tapbar-container">
      <ul className="tapbar">
        {tapbar.map((list, index) => (
          <li
            key={index}
            className={`tapbar-element ${selected === list ? 'active' : ''}`}
            onClick={() => handleClick(list)}
          >
            {list}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Tapbar
