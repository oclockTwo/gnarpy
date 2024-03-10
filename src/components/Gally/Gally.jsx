import Image from 'next/image';

import gnarpy1 from '/public/images/gally/1.jpeg'
import gnarpy2 from '/public/images/gally/2.jpeg'
import gnarpy3 from '/public/images/gally/3.jpeg'
import gnarpy4 from '/public/images/gally/4.jpeg'
import gnarpy5 from '/public/images/gally/5.jpeg'
import gnarpy6 from '/public/images/gally/6.jpeg'
import gnarpy7 from '/public/images/gally/7.jpeg'
import gnarpy8 from '/public/images/gally/8.jpeg'
import gnarpy9 from '/public/images/gally/9.jpeg'
import gnarpy10 from '/public/images/gally/10.jpeg'
import gnarpy11 from '/public/images/gally/11.jpeg'
import gnarpy12 from '/public/images/gally/12.jpeg'
import gnarpy13 from '/public/images/gally/13.jpeg'
import gnarpy14 from '/public/images/gally/14.jpeg'
import gnarpy15 from '/public/images/gally/15.jpeg'
import gnarpy16 from '/public/images/gally/16.jpeg'
import gnarpy17 from '/public/images/gally/17.jpeg'
import gnarpy18 from '/public/images/gally/18.jpeg'
import gnarpy19 from '/public/images/gally/19.jpeg'
import gnarpy20 from '/public/images/gally/20.jpeg'

export default function Gally() {
  return (
    <div className='columns-2 md:columns-3 lg:columns-4'>
      <Image src={gnarpy1} alt='gnarpy_model_1' className='w-[300px] h-auto' />
      <Image src={gnarpy2} alt='gnarpy_model_2' className='w-[300px] h-auto' />
      <Image src={gnarpy3} alt='gnarpy_model_3' className='w-[300px] h-auto' />
      <Image src={gnarpy4} alt='gnarpy_model_4' className='w-[300px] h-auto' />
      <Image src={gnarpy5} alt='gnarpy_model_5' className='w-[300px] h-auto' />
      <Image src={gnarpy6} alt='gnarpy_model_6' className='w-[300px] h-auto' />
      <Image src={gnarpy7} alt='gnarpy_model_1' className='w-[300px] h-auto' />
      <Image src={gnarpy8} alt='gnarpy_model_2' className='w-[300px] h-auto' />
      <Image src={gnarpy9} alt='gnarpy_model_3' className='w-[300px] h-auto' priority />
      <Image src={gnarpy10} alt='gnarpy_model_4' className='w-[300px] h-auto' />
      <Image src={gnarpy11} alt='gnarpy_model_5' className='w-[300px] h-auto' />
      <Image src={gnarpy12} alt='gnarpy_model_6' className='w-[300px] h-auto' />
      <Image src={gnarpy13} alt='gnarpy_model_1' className='w-[300px] h-auto' />
      <Image src={gnarpy14} alt='gnarpy_model_2' className='w-[300px] h-auto' />
      <Image src={gnarpy15} alt='gnarpy_model_3' className='w-[300px] h-auto' />
      <Image src={gnarpy16} alt='gnarpy_model_4' className='w-[300px] h-auto' />
      <Image src={gnarpy17} alt='gnarpy_model_5' className='w-[300px] h-auto' />
      <Image src={gnarpy18} alt='gnarpy_model_6' className='w-[300px] h-auto' />
      <Image src={gnarpy19} alt='gnarpy_model_5' className='w-[300px] h-auto' />
      <Image src={gnarpy20} alt='gnarpy_model_6' className='w-[300px] h-auto' />
    </div>
  )
}