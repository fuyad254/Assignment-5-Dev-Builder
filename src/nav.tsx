import logo from './assets/logo-text.png';

export function Nav() {
    
    return (
        <>
        <nav className=' border-b-2 border-slate-100 sticky top-0 z-50 bg-white '>
        <div className='flex justify-between container m-auto pt-3 items-center mb-3'>
          <div><img src={logo} alt="" /></div>
        
          <ul className='flex gap-5 '>
            <li className='text-pink-600' >Home</li>
            <li className='text-slate-600'>Technologies</li>
            <li className='text-slate-600'>Projects</li>
            <li className='text-slate-600'>About</li>
            <li className='text-slate-600'>Contact</li>
          </ul>
          <div className='flex gap-6'>
            <button className='text-slate-700 cursor-pointer '>Sign in</button>
            <button className='gradient-btn px-6 py-2 rounded-full text-white font-semibold cursor-pointer '>Sign Up</button>
          </div>
        </div>
        
        
      </nav></>
    )
}