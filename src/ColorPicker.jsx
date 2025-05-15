import React, { useState } from 'react'

const ColorPicker = () => {
  const [color, setColor] = useState("#FFFFF");

  function handleChangeColor(e){
    setColor(e.target.value);
  } 

  return (
    <div className='color-picker'>
        <h1>COLOR GENERATOR</h1>
      <div className='color-display' style={{backgroundColor: color}}>
        <p>Selected Color: {color}</p>
      </div>
      <label>Select a Color: </label>
      <input type="color" value={color} onChange={handleChangeColor}/>
    </div>
  )
}

export default ColorPicker