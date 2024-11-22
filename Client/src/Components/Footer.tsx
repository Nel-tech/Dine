import { useState,useEffect } from 'react';
import { FaXTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa6';

function Footer() {

  const [year, setYear] = useState(Number)
  
  useEffect(()=>{
  
  const result = new Date().getFullYear()
  console.log(result)
  setYear(result)
  },[])
  return (
    <footer className="mt-[7rem]">
      <section className="bg-[#2b2b2b] w-full h-[30vh] ">
        <main className="container text-[#8c8c8c] flex justify-between items-center pt-[2rem]">
          <ul>
            <li>DINE</li>
          </ul>

          <ul className="flex gap-[2rem] justify-center items-center mx-auto self-center content-center">
            <li>Menu</li>
            <div className="w-[.1rem] h-[1.2rem] m-auto bg-[#8c8c8c]"></div>
            <li>About</li>
            <div className="w-[.1rem] h-[1.2rem] m-auto bg-[#8c8c8c]"></div>
            <li>Contact</li>
          </ul>

          <ul className="flex gap-[4rem]">
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

        <hr className='mt-[2rem] container border-[.1px]  border-[#DBDFD0]' />
        <p className='text-white text-center mt-[1rem]'>&copy; {year} Dine Restaurant</p>
      </section>
    </footer>
  );
}

export default Footer;

// #2b2b2b
// color #8c8c8
// 1px solid #565656
