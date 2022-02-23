import React,{useEffect,useState} from 'react';
import Layout from '../../components/layout/Layout';
import {useRouter} from 'next/router';
import clienteAxios from '../../config/axios';
import styled from '@emotion/styled';

const Imagen = styled.img`
     height: 300px;
     width: 300px;
     border-radius: 8px;
`;
const Texto = styled.p`
    text-align: justify;
    color:#666666;
    font-family: Verdana, Arial, Helvetica, sans-serif;
    background: #FFFFFF;
    font-size: 15px;
    margin-left: 10px;

`;

const Titulo = styled.h2`
    font-family: 'Proxima-Nova';
    color:#666666;
    text-align:left;
    padding: 10px;
    text-decoration: underline;
`;

const Producto = () => {

    const [product, guardarProducto] = useState([]);
    const [descrip, guardarDescripcionProducto] = useState('');

    //routing para obtener el id actual
    const router = useRouter();
    const {query: {id}} = router;
    console.log('router: ',id);
    
    useEffect(()=>{
        if(id){
            //llama al servidor
            consultarProducto(id);
        }
    },[id]);

    const consultarProducto = async (id)=>{

        try {
            
            const resultado = await clienteAxios.post('/api/producto',{id})
            guardarProducto(resultado.data.producto);
            console.log('detalle del producto 1: ',resultado.data.producto);
            

           const descripcion = await clienteAxios.post('/api/descripcionProducto',{id})
           guardarDescripcionProducto(descripcion.data.descripcion);
            console.log('descripcion del producto: ',descripcion.data.descripcion);
            

        } catch (error) {
            console.log(error);
        }

        console.log('detalle del producto 2: ',product);
    }

    return ( 
        <>
        <Layout>
            <Titulo>Detalle del Producto</Titulo>      
            <Imagen src={product.thumbnail} align="left" />
            <Titulo>Descripcion</Titulo>   
            <Texto>
                {descrip}
            </Texto>    
        </Layout>
        </>
     );
}
 
export default Producto;