import React from 'react'

export default function Card({img,categoria,nombre,precio,descuento,item,arreglo,setArreglo,total,setTotal,id}) {

    const agregar=item=>{

            if(arreglo.find(producto=>producto.id==item.id)){
                const nuevoconjunto=arreglo.map(producto=>producto.id==item.id ? {...producto}:producto);
                setTotal(total + item.price)
                return setArreglo(nuevoconjunto);
            }

        setArreglo([item,...arreglo])
        setTotal(total + item.price)
        console.log(arreglo)
    }
  return (
    <div className='border-2 relative md:min-w-[20rem]' key={id}>
          <div className='absolute bg-red-500 px-2 text-white rounded-md top-2 left-1'>{descuento}%</div>
          <img src={img} alt="" className='block h-52 w-full object-contain'/>
            <div className='p-2'>
            <p className='text-sky-400 text-xs'>{categoria}</p>
            <h3>{nombre}</h3>
            <strong className='block py-2'>S/{precio}.00</strong>
            </div>
            <button onClick={()=>agregar(item)} className='w-full p-2 bg-blue-500 text-white'>Comprar</button>
    </div>
  )
}
