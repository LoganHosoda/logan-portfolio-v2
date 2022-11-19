import React from 'react'

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {['home', 'work', 'skills', 'about', 'contact'].map((item, index) => (
        <a
        href={`#${item}`} 
        key={item + index}
        className="app__navigation-dot"
        onClick={() => {}}
        style={active === item ? {backgroundColor: '#313BAC'} : { }}
        />
      ))}
    </div>
  )
}

export default NavigationDots