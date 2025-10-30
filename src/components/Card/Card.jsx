import React from 'react'

const Card = ({ name, role, skills = [] }) => {
  return (
    <div>
        <div className="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 ...">
        <img className="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0" src="https://t3.ftcdn.net/jpg/10/24/11/58/360_F_1024115848_VTfuHjHj9UVVvrUOaDQqm2clMspgRnGs.jpg" alt="" />
        <div className="space-y-2 text-center sm:text-left">
          <div className="space-y-0.5">
            <p className="text-lg font-semibold text-whitesmoke">{name}</p>
            <p className="font-medium text-gray-500">{role}</p>
                <div>
                    <span className="font-semibold">
                        Skills:
                    </span>
                    <ul className="list-disc list-inside text-sm">
                        {skills.map((skills, index) => (
                            <li key={index}>{skills}</li>
                        ))}
                    </ul>
                </div>
          </div>
          <button className="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 ...">
            Message
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card