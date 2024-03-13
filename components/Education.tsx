import React from 'react'

const Education = () => {
  return (
    <div className='bg-zinc-800 border-zinc-700 border-2 rounded-xl flex flex-col gap-6 p-4'>
        <div className='flex items-center gap-2 text-lg'>
            <div className='rounded-full h-2 w-2 bg-white'></div>Education
        </div>
        <div>
            <ul className='flex flex-col gap-2'>
                <li className='flex justify-between items-center'>
                    <div>
                        <h2 className='text-orange-600 font-medium'>
                            The LNMIIT
                        </h2>
                        <p className='font-light text-sm text-zinc-600'>
                            2020-Present
                        </p>
                    </div>
                    <div className='flex flex-col items-end'>
                        <div>College</div>
                        <div className='font-light text-sm text-zinc-600'>Jaipur</div>
                    </div>
                </li>
                <li className='flex justify-between items-center'>
                    <div>
                        <h2 className=''>
                            Maa Bharti Public Sr. Sec. School
                        </h2>
                        <p className='font-light text-sm text-zinc-600'>
                            2018-2020
                        </p>
                    </div>
                    <div className='flex flex-col items-end'>
                        <div>12th</div>
                        <div className='font-light text-sm text-zinc-600'>Kota</div>
                    </div>
                </li>
                <li className='flex justify-between items-center'>
                    <div>
                        <h2 className=''>
                            Central Academy
                        </h2>
                        <p className='font-light text-sm text-zinc-600'>
                            2023-Present
                        </p>
                    </div>
                    <div className='flex flex-col items-end'>
                        <div>10th</div>
                        <div className='font-light text-sm text-zinc-600'>Kekri</div>
                    </div>
                </li>
            </ul>
        </div>

    </div>
  )
}

export default Education