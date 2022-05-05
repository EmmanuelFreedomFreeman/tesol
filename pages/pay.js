import React,{useRef} from 'react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { PDFViewer } from '@react-pdf/renderer';
import ReactToPrint from "react-to-print";
import Image from 'next/image'
import {motion} from 'framer-motion'
import Facture from './components/facture'
function Pay() {
  const router = useRouter()
  let componentRef = useRef();
  useEffect(()=>{
    
  },[router])
  
  return (
    <div>

    <div>
      
      <Facture status={router.query.status}  ref={componentRef} />
      
    </div>




          <form action= "https://api-testbed.maxicashapp.com/PayEntryPost" method="POST">
              <input type="hidden" name="PayType" value="MaxiCash" />
              <input type="hidden" name="Amount" value="10000"/>
              <input type="hidden" name="Currency" value="MaxiDollar"/>
              <input type="hidden" name="Telephone" value="+243995714871"/>
              <input type="hidden" name="Email" value="fikiriatown@gmail.com"/>

              <input type="hidden" name="MerchantID" value="560e9cefb3ff4d0784d85f3cf752ee02"/>
              <input type="hidden" name="MerchantPassword" value="432d3d0d229b4469b9053e4fbde0bedc"/>
              <input type="hidden" name="Language" value="Fr"/>
              <input type="hidden" name="Reference" value="payment of school fees for the first quarter"/>
              <input type="hidden" name="accepturl" value="http://localhost:3000/?pay=1&title=1"/>
              <input type="hidden" name="cancelurl" value="http://localhost:3000/pay"/>
              <input type="hidden" name="declineurl" value="http://localhost:3000/pay"/>
              <input type="hidden" name="notifyurl" value="http://localhost:3000/pay"/>
                  
              <div className='flex flex-row w-1/2 portrait:w-full justify-between ml-2 portrait:ml-0'>
                  <button type="submit" className='bg-blue-500 hover:bg-blue-900 text-center p-4 font-bold ml-5 mb-4 portrait:ml-0 portrait:mr-1 rounded-full '> Validate the payment</button>
                  <ReactToPrint
                    trigger={() => <p className='bg-blue-500 hover:bg-blue-900 text-center p-4 font-bold  mb-4 cursor-pointer rounded-full '>Print this Invoice out!</p>}
                    content={() => componentRef.current}
                  />
              </div>
          </form>


    </div>
  )
}

export default Pay