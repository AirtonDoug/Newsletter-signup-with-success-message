//import React from 'react';
export default function Box({children}) {
  return (
    <div className='rounded-lg bg-white w-[612px] h-[440px] flex flex-row'>
      {/* <div className='w-2/3 p-8'>
        <h1 className='font-extrabold text-4xl text-dark-slate-grey mt-4'>Stay updated!</h1>
        <p className='text-[12px] mt-4'>
          Join 60,000+ product managers receiving monthly updates on:
        </p>
        <ul className='text-[12px] mt-4'>
          <li className="flex items-center whitespace-nowrap mt-2">
            <img src='/icon-list.svg' alt="" className='w-3 h-3 mr-2' />
            Product discovery and building what matters
          </li>
          <li className="flex items-center whitespace-nowrap mt-2">
            <img src='/icon-list.svg' alt="" className='w-3 h-3 mr-2' />
            Measuring to ensure updates are a success
          </li>
          <li className="flex items-center whitespace-nowrap mt-2">
            <img src='/icon-list.svg' alt="" className='w-3 h-3 mr-2' />
            And much more!
          </li>
        </ul>
        <label className='text-sm font-medium text-dark-slate-grey mt-6 block'>
          Email address:
          <input
            type='email'
            placeholder='email@company.com'
            className='border border-gray-400 rounded-md p-2 pl-4 mt-1 text-[12px] w-full'
          />
        </label>
        <div className='mt-4'>
          <Link href='/confirmation'>
         
              <Button>Subscribe to monthly newsletter</Button>
           
          </Link>

        </div>
      </div>
      <div className='w-4/5 flex justify-center items-center mr-3'>
        <img src="/illustration-sign-up-desktop.svg" alt="" className='h-[90%] rounded-none object-contain' />
      </div> */}
      {children}
    </div>
  );
}
