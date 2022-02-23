import React,{useState} from 'react';
import styled from '@emotion/styled';
import Image from 'next/image'
import ic_Search from '../../public/ic_Search.png';
import logoML from '../../public/logo_ML.png';
import Router from 'next/router';




const ContenerdorHeader = styled.header`
    background-color:#FFE600;
    height:60px;

`;

const InputHeader = styled.input`
    width:1100px;
    height:30px;
    margin-right:50px;
    margin-left:150px;
`;

const ButtonHeader = styled.button`
    width:45px;
    height:30px;
    position: relative; 
    bottom: -3px; 
    left:-50px;
    cursor:pointer;
    `;

const Logo = styled.a`
    width:45px;
    height:30px;
    position: relative; 
    bottom: -10px; 
    left:65px;
    cursor:pointer;
    `;



const Header = () => {

    const [busqueda, guardarBusqueda] = useState('');

    const buscarProducto = (e)=>{
        e.preventDefault();
        if(busqueda === '') return;

        //redireccionar hacias productos y pasamos la busqueda
        Router.push({
            pathname: '/productos',
            query:{prod:busqueda}
        }

        )
    }


    return ( 

        <form
            onSubmit={buscarProducto}
        >
           <ContenerdorHeader>
               <Logo href='/'>
                    <Image src={logoML} />
                </Logo>
                                                          
               <InputHeader 
                    type="text"
                    placeholder='Nunca dejes de buscar'
                    onChange={(e)=>guardarBusqueda(e.target.value)}
               />
               <ButtonHeader> <Image src={ic_Search} /></ButtonHeader>
        
           </ContenerdorHeader>
        </form>
     );
}
 
export default Header;