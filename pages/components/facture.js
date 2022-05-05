import React from 'react'
import { motion} from 'framer-motion'
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer'
const Facture = React.forwardRef((props, ref) => {
  return (

        <div ref={ref} className='bg-white m-5 mt-10 md:w-1/2 p-2'>
                <div className='flex flex-row justify-between '>
                    <div>
                    {props.status != 'success' ? (<h1 className='bg-red-300 text-center p-4 font-bold'>NOT PAID YET</h1>) : (<h1 className='bg-green-300 text-center p-4 font-bold'>PAID</h1>) }
                    
                        <h1 className='font-bold text-2xl'>INVOICE</h1>
                        <h1>TESOL</h1>
                        <h2>Address: 476, Av. Le Verger, Quartier <br></br> GOLF (opposite the Golf course)</h2>
                        <h2>+243 99 57 14 871</h2>
                        <h2>E-mail: tesoldrc@gmail.com</h2>
                        <p>--------------------------------------------</p>
                        <p>Name : Kamau Mbatanguli Emmanuel</p>
                        <p>Adresse : route kinsevere</p>
                        <p>Tel: +243 995714871</p>
                        <h2>E-mail: emmanuel@gmail.com</h2>
                    </div>
                    <div>
                    <motion.img alt='logo' src='/TESOL+Tree+Logo+Colour.png' className='w-40 ml-3' />
                        <div className='ml-7' >
                        <h2 >Date : 02/05/2022</h2>
                        <h2>Invoice N* : 001</h2>
                        </div>
                        
                    </div>
                </div>
                <div >
                    <table className='w-full table-fixed text-center'>
                    <thead>
                        <tr className='bg-blue-500'>
                            <th>N*</th>
                            <th>Description</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='p-5'>1</td>
                            <td>first quarter payment</td>
                            <td>100$</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr className='bg-blue-200 '>
                            <td className='font-bold p-8'>TOTAL</td>
                            <td></td>
                            <td className='font-bold'>100$</td>
                        </tr>
                    </tfoot>
                    
                    
                    
                    </table>
                </div>
            </div>
  )
}
)

export default Facture