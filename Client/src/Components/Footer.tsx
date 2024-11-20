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
        <main className="container text-[#8c8c8c] flex justify-between pt-[2rem]">
          <ul>
            <li>DINE</li>
          </ul>

          <ul className="flex gap-[2rem]">
            <li>Menu</li>
            <div className="w-[.1rem] h-[1.2rem] m-auto bg-[#8c8c8c]"></div>
            <li>About</li>
            <div className="w-[.1rem] h-[1.2rem] m-auto bg-[#8c8c8c]"></div>
            <li>Contact</li>
          </ul>

          <ul className="flex gap-[4rem]">
            <li>
              <FaXTwitter />
            </li>

            <li>
              <FaLinkedin />
            </li>

            <li>
              <FaInstagram />
            </li>
          </ul>
        </main>

        <hr className='mt-[2rem] container border-[.1px]  border-[#565656]' />
        <p className='text-white text-center mt-[1rem]'>&copy; {year} Dine</p>
      </section>
    </footer>
  );
}

export default Footer;

// #2b2b2b
// color #8c8c8
// 1px solid #565656
