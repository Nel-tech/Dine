// import { useState,useEffect } from 'react';
import { FaXTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa6';

function Footer() {

  const result = new Date().getFullYear()
  
  return (
    <footer className="mt-[7rem]">
      <section className="bg-[#2b2b2b] w-full ">
        <main className="container text-[#8c8c8c] flex justify-between items-center pt-[2rem] xs:flex-col sm:flex-col md:flex-col">
          <ul className='md:pb-[1.8rem]'>
            <li className='text-[1.5rem] xs:hidden sm:hidden'>DINE</li>
          </ul>

          <ul className="flex gap-[2rem] justify-center items-center mx-auto self-center content-center xs:flex-col md:pb-[1.8rem]">
            <li className='text-[1.5rem] xs:hidden sm:hidden'>Home</li>
          
            <li className='text-[1.5rem] xs:hidden sm:hidden'>About</li>

            
          </ul>

          <ul className="flex gap-[4rem] xs:pb-[2rem] sm:pb-[2.2rem]">
            <li>
              <FaXTwitter className='text-[1.6rem]' />
            </li>

            <li>
              <FaLinkedin  className='text-[1.6rem]' />
            </li>

            <li>
              <FaInstagram className='text-[1.6rem]' />
            </li>
          </ul>
        </main>

        <hr className='mt-[2rem] container border-[.1px]  border-[#DBDFD0] xs:hidden sm:hidden ' />
        <p className='text-white text-center mt-[1rem]'>&copy; {result} Dine Restaurant</p>
      </section>
    </footer>
  );
}

export default Footer;

// #2b2b2b
// color #8c8c8
// 1px solid #565656
