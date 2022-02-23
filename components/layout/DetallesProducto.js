import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';


const DescripcionProducto = styled.div`
    flex: 0 1 600px; 
    display: grid;
    grid-template-columns: .2fr 3fr; 
    column-gap: 2rem;
    border-bottom: 1px solid #e1e1e1;
`;

const Titulo = styled.a`
    font-size: 1.2rem;
    margin: 0;
    border: 1px solid #ddd;
    :hover {    
        cursor: pointer;
    }
`;

const Imagen = styled.img`
     height: 300px;
     width: 300px;
     border: 1px solid black;
     border-radius: 8px;    
     
`;


const DetallesProducto = ({dato/* catalog_product_id,thumbnail,title,price */}) => {

   // console.log('detalle producto: ',thumbnail);
    
    const {thumbnail,title,price,id,currency_id}=dato;
   
    return (  
        <>
            <DescripcionProducto> 
                <div>
                    <Imagen src={thumbnail} />
                </div>
                <div>
                    <p>{currency_id} <b>{price}</b> </p>
                    <Link href="/productos/[id]" as={`/productos/${id}`}>
                        <Titulo> {title} </Titulo>
                    </Link>
                </div>
            </DescripcionProducto>
        </>
    );
}
 
export default DetallesProducto;