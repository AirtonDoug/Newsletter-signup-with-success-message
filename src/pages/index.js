import Button from "@/components/button";
import Box from "@/components/container";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";


export default function Home() {
  const [email, setEmail] = useState('');
  const [isEmail, setIsEmail] = useState(false);
  const router = useRouter();

  const validateEmail = (email) => {
    const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailPattern.test(email)

  }

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setIsEmail(validateEmail(newEmail));
    setEmail(newEmail)
  }


  const handleButtonClick = () => {
    const queryString = `email=${encodeURIComponent(email)}`
    router.push(`/confirmation?${queryString}`)

  }

  return (
    <main className="flex justify-center items-center h-screen" >
      <Box>
        <div className='w-2/3 p-8'>
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
          <div className="mt-6">

            <label className='text-sm font-medium text-dark-slate-grey mt-6 block'>
              <div className="flex">
              <p>Email address:</p>
              {!isEmail && email.trim() !== '' && <p className="text-red-400 text-[12px] mt-1 ml-14">Valid email required</p>}
              
              </div>
              <input
                type='email'
                placeholder='email@company.com'
                className={`border ${isEmail ? 'border-gray-400' : 'border-red-400 bg-red-300'}rounded-md p-2 pl-4 mt-1 text-[12px] w-full`}
                value={email}
                onChange={handleEmailChange}
              />


            </label>
          </div>
          <div className='mt-4'>
            {isEmail ? (
              <Link href={`/confirmation?email=${encodeURIComponent(email)}`} passHref>
                <Button onClick={handleButtonClick} >Subscribe to monthly newsletter</Button>
              </Link>
            ) : (
              <>
                <Button onClick={handleButtonClick}>Subscribe to monthly newsletter</Button>

              </>
            )}
          </div>
        </div>
        <div className='w-4/5 flex justify-center items-center mr-3'>
          <img src="/illustration-sign-up-desktop.svg" alt="" className='h-[90%] rounded-none object-contain' />
        </div>
      </Box>
    </main>
  )
}
