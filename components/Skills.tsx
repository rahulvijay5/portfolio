import React from 'react'

const Skills = () => {

  let skills:string[] = [
    "Python",
    "Javascript",
    "Data Structures",
    "NodeJs",
    "ReactJs",
    "NextJs",
    "Github",
    "CS Fundamentals",
    "System Design",
  ]

  return (
    <div className='bg-zinc-800 border-zinc-700 border-2 rounded-xl flex flex-col gap-6 p-4'>
        <div className='flex items-center gap-2 text-lg'>
            <div className='rounded-full h-2 w-2 bg-white'></div>Skills
        </div>
        <div>
            <ul className='grid gap-2 grid-cols-3 '>
                {skills.map((skill:string) => 
                  <li key={skill} className='border-2 rounded-md min-h-16 flex justify-center cursor-text selection:bg-orange-800 items-center py-1 px-2 bg-zinc-900/50 text border-zinc-700 hover:shadow-orange-600 hover:shadow-sm duration-75 hover:select-all text-center'>{skill}</li>        
                )}
            </ul>
        </div>
    </div>
  )
}

export default Skills