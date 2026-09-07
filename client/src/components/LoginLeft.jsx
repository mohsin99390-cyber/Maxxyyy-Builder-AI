import React from 'react'

const LoginLeft = () => {
  return (
    <div className= "hidden lg:flex lg:w-2/5 bg-[url('/bg-img.png')]
    bg-cover bg-center bg-no-repeat flex-col justify-between p-12 shrink-0
     select-none">
        <div className='flex items-center gap-3'>
      <img src="/logo.svg" alt="Logo" className="size-9.5" />
    <span className="text-4x1 font-medium text-white">Maxxyyy Builder AI</span>
        </div>
        <div>
            <h2 className='text-3x1 text-white font-medium leading-snug 
                       mb-3 tracking-tight'>Build your presence on web</h2>
            <p className="text-zinc-300">
               Describe what you need, preview instantly, and customised your site 
               in real-time. React with clean JSX, verified layouts, and instand code 
                exports.
            </p>
<p>Copyright {new Date().getFullYear()} Maxxyyy-BuilderAI </p>
        </div>
      
    </div>
  )
}

export default LoginLeft
