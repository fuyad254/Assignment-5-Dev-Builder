import heroImg from './assets/banner-stack.png'
export function Hero() {
  return (
    <>
      <div className='flex justify-between container m-auto mt-20 items-center'>
        <div className=''>
        <h2 className='text-slate-900 text-[60px] font-extrabold mb-10 leading-none'>Build Your Ideal<br /><span className='gradient-text bg-clip-text text-transparent '>Development Stack</span></h2>
        <p className="text-slate-600 font-['Plus_Jakarta_Sans'] text-[18px] font-normal leading-[29.3px] mb-12">
          Explore frontend, backend, database, and tooling options, <br /> compare them
          side by side, and put together the stack that fits your <br /> next project
        </p>
        <div className='flex gap-6'>
          <button className='gradient-btn px-3 py-2 rounded-md cursor-pointer text-white font-semibold'>Explore Technologies</button>
          <button className='px-3 py-2 rounded-md cursor-pointer text-gray-700 font-semibold border border-slate-100'>Learn More</button>
        </div>
      </div>
      <img src={heroImg} alt="" />
      </div>
    </>
  );
}
