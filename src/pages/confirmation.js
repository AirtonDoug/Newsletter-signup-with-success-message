import Button from '@/components/button'
import Link from 'next/link'
import { useRouter } from 'next/router'
//import React from 'react'

export default function confirmation() {
    const router = useRouter();
    const { email } = router.query;
    return (
        <div className='flex justify-center items-center h-screen'>]
            <div className='rounded-2xl bg-white w-[352px] h-[335px] '>
                <img src="/icon-success.svg" alt="" className='w-[38px] mt-6 ml-6' />
                <div className='flex flex-wrap justify-center items-center'>

                    <div className='mt-4 ml-8 mb-4 flex flex-wrap justify-center'>
                        <h1 className='font-extrabold text-4xl text-dark-slate-grey'>Thanks for subscribing!</h1>
                    </div>
                    <div className='ml-8 mr-8 mb-5 flex no-wrap justify-center'>
                        <p className='text-[12px] '>A confirmation has been sent to{' '}
                            <span className='font-bold text-dark-slate-grey' >{email}</span>.
                            Please open it and click the button inside to confirm your subscription.
                        </p>
                    </div>
                    <div className='flex justify-center mt-2'>
                        <Link href='/'>
                            <Button>Dismiss message</Button>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    )
}
