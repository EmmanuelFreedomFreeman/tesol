
import Image from 'next/image';
function Header() {
  return (
    <div className='flex justify-center'>
        
        <div className='absolute  z-50 grid grid-cols-3 bg-white shadow-md py-1  w-10/12  '>
            <Image src='/TESOL+Tree+Logo+Colour.png' className='top-1 left-1 w-20 h-20' alt='logo' />
        </div>
        <Image src='/20210312_103101.jpg' className='w-screen h-1/2' alt='head'/>
        

    </div>

  )
}


export default Header