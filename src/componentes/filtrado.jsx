import React from 'react'
import Card from './card'

export default function Filtrado({arreglo,setArreglo,total,setTotal}) {
    const data=[
        {
            id:1,
            img:"https://media.istockphoto.com/id/1411475205/es/foto/zapatillas-negras-en-la-punta-aisladas-sobre-blancas.jpg?s=612x612&w=0&k=20&c=yq02E2MI9hCV99DK42vmoy7Z2RiPLFnRtOqRMM4RzHk=",
            category:"Zapatilla",
            name:"Modelo Urbano",
            price:99,
            descuento:50,
        },
        {
            id:2,
            img:"https://media.istockphoto.com/id/1395590231/es/foto/chanclas-azules-y-rosas-aisladas-sobre-blanco-zapatos-de-playa-de-verano.jpg?s=612x612&w=0&k=20&c=mNKboZ5iS5SzQOAkSqvKtNI7g3gnsG7kriFor2EtQUA=",
            category:"Sandalias",
            name:"Playeras",
            price:23,
            descuento:50,
        },
        {
            id:3,
            img:"https://media.istockphoto.com/id/1425880214/es/foto/zapato-de-cuero-para-hombre-sobre-fondo-blanco.jpg?s=612x612&w=0&k=20&c=DITdXvNqV0JHaJNelXyNLnS2pfaN-4mw5BDg9t4A570=",
            category:"zapato",
            name:"Modelo xs",
            price:69,
            descuento:50,
        },
        {
            id:4,
            img:"https://media.istockphoto.com/id/1414472169/es/foto/par-de-botas-chelsea-de-cuero-marr%C3%B3n-aisladas-sobre-blanco.jpg?s=612x612&w=0&k=20&c=f6PjgMuu1tiyn30RQn5IjqTU8fwztPoMBDxn9x2pK6Q=",
            category:"Botas",
            name:"Browp upper",
            price:48,
            descuento:50,
        },
    ]
 
  return (
    <div  className='grid grid-cols-2 p-4 gap-4 my-6  md:flex md:flex-wrap md:justify-between xl:justify-center'>
        {
            data.map(item=>(
                <Card 
                img={item.img}
                nombre={item.name}
                categoria={item.category}
                precio={item.price}
                descuento={item.descuento}
                arreglo={arreglo}
                setArreglo={setArreglo}
                total={total}
                setTotal={setTotal}
                item={item}
                id={item.id}
                key={item.id}
                />
            ))
        }
    </div>
  )
}
