//import React from 'react'

export default function Button({children}) {
  return (
    <div>
        <button className='rounded-md bg-charcoal-grey text-white font-semibold  flex justify-center flex-col text-xs w-[268px] h-[39px] items-center hover:bg-tomato hover:shadow-xl'>{children}</button>
    </div>
  )
}
