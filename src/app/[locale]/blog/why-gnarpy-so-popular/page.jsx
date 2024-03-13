import Image from 'next/image';
import gnarpy from "/public/images/gally/19.jpeg";

export default function Page() {
  return (
    <div className="max-w-[1200px] mx-auto">
      <h1 className="text-center text-3xl font-bold md:text-5xl my-10">
        Why is gnarpy so popular?
      </h1>
      <p className="text-sm text-center">Author: blini</p>
      <p className="text-sm text-center">Date: March 12, 2024</p>
      <Image src={gnarpy} alt='gnarpy_with_a_gun' className='w-[400px] mx-auto mt-8' />
      <div className="mt-20">
        <p>
          There are so many NPCs in this game of regretevato, why is the gnarpy
          character the only one that causes such widespread discussion. Is it
          because of the character&#39;s image?
        </p>
      </div>
    </div>
  );
}
