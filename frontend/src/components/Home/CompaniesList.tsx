import React from 'react';
import Image from 'next/image';
import accenture from '../../../assests/accentuew.png';
import amazon from '../../../assests/amazon.png';
import corporate from '../../../assests/corporate.jpg';
import disney from '../../../assests/disney.png';
import hp from '../../../assests/hp.jpg';
import intel from '../../../assests/intel.png';
import microsoft from '../../../assests/microsoft.png';
import nike from '../../../assests/nike.png';
import nissan from '../../../assests/nissan.png';
import partnership from '../../../assests/partnership.png';
import pepsi from '../../../assests/pepsi.png';
import samsung from '../../../assests/samsung.png';
import stateBank from '../../../assests/stateBank.png';
import walmart from '../../../assests/walmart.webp';



const CompaniesList = () => {
  return (
    <main className=' h-[200px] w-full '>
       <div className='relative h-full w-full flex justify-between items-center '>
        <Image src={accenture} alt='Image' height={70} width={70}></Image>
        <Image src={amazon} alt='Image' height={70} width={70}></Image>
        <Image src={corporate} alt='Image' height={70} width={70}></Image>
        <Image src={disney} alt='Image' height={70} width={70}></Image>
        <Image src={hp} alt='Image' height={70} width={70}></Image>
        <Image src={intel} alt='Image' height={70} width={70}></Image>
        <Image src={microsoft} alt='Image' height={70} width={70}></Image>
        <Image src={nike} alt='Image' height={70} width={70}></Image>
        <Image src={nissan} alt='Image' height={70} width={70}></Image>
        <Image src={partnership} alt='Image' height={70} width={70}></Image>
        <Image src={pepsi} alt='Image' height={70} width={70}></Image>
        <Image src={samsung} alt='Image' height={70} width={70}></Image>
        <Image src={stateBank} alt='Image' height={70} width={70}></Image>
        <Image src={walmart} alt='Image' height={70} width={70}></Image>
       </div>
    </main>
  )
}

export default CompaniesList;
