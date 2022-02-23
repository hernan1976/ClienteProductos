import React, {useEffect, useState} from 'react';
import Layout from '../components/layout/Layout';
import styled from '@emotion/styled';
import {useRouter} from 'next/router';
import clienteAxios from '../config/axios';
import DetallesProducto from '../components/layout/detallesProducto';

const Titulo = styled.h1`
    font-family: 'Proxima-Nova';
    color:#666666;
    padding: 15px;
`;

const  productos = () => {

  const [products, guardarProductos] = useState([]);
//uso de routing
  const router = useRouter();
//obtiene producto a buscar
  const {query: {prod}} = router;

  useEffect(async ()=>{
    console.log('useefect: ',prod);
    if(prod){
      await consultarProductos(prod);
    }

  },[prod]);

  const consultarProductos = async (prod)=>{
   
    try {
      //limpiar state
      guardarProductos([]);

      const resultado = await clienteAxios.post('/api/productos',{prod});
      
      //guardo en state
      guardarProductos(resultado.data.productos);

     } catch (error) {
      console.log(error);
      
  } 
  }

  return (
      <div >
        <Layout>
          <Titulo>Listado de Productos</Titulo>
          <div className='Listado-productos'>
            <div className='contenedor'>
              <div className='bd-white'>
                {
                    products.map(dato =>(
                      <DetallesProducto 
                          key={dato.catalog_product_id}  
                          dato={dato}             
                      /> 
       
                  ))
                  }
              </div>
            </div>

          </div>
        </Layout>
      </div>
    )
  }

  export default productos;