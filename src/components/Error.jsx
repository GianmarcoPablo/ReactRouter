import React from 'react'

const Error = ({children}) => {
  return (
    <div className="text-center my-4 bg-red-700 text-white font-bold uppercase p-3">
        {children}
    </div>
  )
}

export default Error