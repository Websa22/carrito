import React, { useState } from 'react'
import {BsFillCartFill} from "react-icons/bs"
export default function Header({arreglo,setArreglo,total}) {
    const [block,setBlock]=useState(false)
  return (
    <header className='shadow-md p-4 flex justify-between items-center'>
        <span  className='font-bold'>Mi Tiendita 👞</span>
        <div className='relative'>
            <BsFillCartFill className='text-blue-400 text-xl' onClick={()=>setBlock(!block)}/>
            <div className={`z-10 p-2 px-6 absolute w-52 right-0 top-6 bg-blue-950 text-white ${block?"block":"hidden"} rounded-md`}>
                {
                    arreglo.length?(
                     <div>
                        <div className='flex flex-col gap-3 divide-y-2'>
                        {
                          arreglo.map(item=>(
                            <div className='flex justify-between items-center pt-4' key={item.id} id={item.id}>
                                <img className='w-8' src={item.img} alt=""/>
                                <span>S/{item.price}.00</span>
                            </div>)
                            )
                       }
                        </div>
                       <span className='text-center block my-4'>Total : S/{total}.00</span>
                     </div>             
                    )
                    :(
                        <p className='text-center'>tu carrito esta vacio😞</p>
                    )
                }
            </div>
        </div>
    
    </header>
  )
}
