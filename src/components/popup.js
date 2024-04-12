import React from 'react'

const Popup = ({ open, onClose, children}) => {
  return (
    <div onClick={onClose} className={`fixed inset-0 flex justify-center 
    items-center transition-colors
    ${open ? "visible bg-black/20" : "invisible"}`}>
      
      
      <div 
      onClick={(e) => e.stopPropagation()}
      className={`w-96 bg-white rounded-xl shadow p-6 transition-all
    ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}>
          {children}

<div classname='m-3 ms-10'>
  <button
    onClick={onClose}
    className='p-2 px-3 rounded-lg bg-[#F6EBE0] font-semibold font-sans'>Submit
    </button>

    <button
    onClick={onClose}
    className='p-2 px-3 font-semibold font-sans ms-36' style={{border: '2px solid #F6EBE0', borderRadius: '4px'}}>Cancel
  </button>
</div>
  </div>
      
    </div>
  )
}

export default Popup
