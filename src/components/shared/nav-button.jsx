import React from 'react'

const NavButton = ({ title, link, active }) => {
  console.log(active)
  return (
    <div>
      <a href={link} className={`p-3 font-sans text-sm ${active ? 'text-[#FFFFFF]' : 'text-[#DBDBDB]'}`}>
        {title}
      </a>
    </div>
  )
}

export default NavButton