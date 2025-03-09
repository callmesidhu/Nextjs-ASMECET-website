import React from 'react';
import './Contact.css';
import Link from 'next/link';

function Contact() {
  return (
    <section id='contact' className='flex-1 w-full h-full'>
      <hr className='border-gtext mx-6 my-12' />
      <h1 className='inter text-center lg:text-6xl text-5xl'>Contact Us</h1>
      
      <div className='flex flex-col lg:flex-row w-full justify-between my-8'>
        <address className='not-italic'>
          <h3 className='inter text-gtext text-3xl m-3 mx-12'>asmecet@gmail.com</h3>
          <h3 className='inter text-gtext text-3xl m-3 mx-12'>+91 7306732236</h3>
        </address>
        
        <div>
        <Link href='https://www.instagram.com/asme_cet?igsh=MXB5bmczZzJnZXZkdA%3D%3D'><h3 className='inter text-3xl m-3 mx-12'>@instagram</h3></Link>
        <Link href='https://www.linkedin.com/company/asme-cet/'><h3 className='inter text-3xl m-3 mx-12'>@linkedin</h3></Link> 
        </div>
      </div>
      
      <h1 className='inter text-center m-3'>@ASMECET 2024</h1>
      <hr className='border-gtext mx-6 mb-12' />
    </section>
  );
}

export default Contact;
