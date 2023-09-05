import React from 'react'

function CategoryPopUp(props) {
  return (props.trigger) ? (
    <div className='category-popup'>
      <div className='category-popup-inner'>
        <button className='close-button' onClick={()=> props.setTrigger(false)}>X</button>
        <div className='category-popup-children'>
          {props.children}
        </div>
      </div>
    </div>
  ) : "";
}

export default CategoryPopUp