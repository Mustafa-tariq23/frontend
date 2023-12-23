import React from 'react';

const Testimonial = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center align-center p-4 md:p-16 gap-4 md:gap-10'>
      <div className='flex flex-col justify-center items-center border-2 p-4 rounded-2xl gap-2'>
        <img className="w-10 h-10 rounded-full" src="https://lilylousaromas.com/cdn/shop/files/1_ae06fcb9-da34-4842-8500-0d11bd493ee3_295x.png?v=1656662662" alt="Bordered avatar" />
        <h2 className='text-2xl font-mono font-bold subpixel-antialiased'>Pakistani Owned</h2>
        <p className='text-center text-base'>We take pride in being a business that is both owned and operated in Pakistan. Our commitment involves obtaining ingredients and supplies from fellow Pakistani enterprises, prioritizing local support whenever feasible. This not only aids in minimizing our Carbon Footprint but also contributes to the enhancement of our domestic economy.</p>
      </div>

      <div className='flex flex-col justify-center items-center border-2 p-4 rounded-2xl gap-2'>
        <img className="w-10 h-10 rounded-full" src="https://lilylousaromas.com/cdn/shop/files/2_6e765252-5c97-4efc-816f-3599eceabba3_295x.png?v=1656662662" alt="Bordered avatar" />
        <h2 className='text-2xl font-mono font-bold subpixel-antialiased'>Female Owned</h2>
        <p className='text-center'>We proudly stand as a female-owned and operated establishment, dedicated to the art of creating captivating scented candles. Our business is led by a visionary female entrepreneur who seeks to inspire and uplift other aspiring women in the business world. Through our aromatic offerings, we aim to bring not only delightful scents but also a sense of empowerment and creativity into every environment.</p>
      </div>

      <div className='flex flex-col justify-center items-center border-2 p-4 rounded-2xl gap-2'>
        <img className="w-10 h-10 rounded-full" src="https://lilylousaromas.com/cdn/shop/files/4_d7cd092e-7049-4ff2-919b-330e31a73fa1_295x.png?v=1656662662" alt="Bordered avatar" />
        <h2 className='text-2xl font-mono font-bold subpixel-antialiased'>Giving Back</h2>
        <p className='text-center'>Passionately committed to our craft, we hold a special place in our hearts for giving back to the community we cherish. Embracing the spirit of philanthropy, we allocate a portion of every sale to charitable causes. Our love for what we do extends beyond crafting scented candles to making a positive impact on the lives of those in need.</p>
      </div>
    </div>
  );
};

export default Testimonial;
