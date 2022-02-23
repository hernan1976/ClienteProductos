import React from 'react';
import Header from './Header';
import Head from 'next/head';

const Layout = (props) => {
    return ( 
        <>  
            <Head>
                <title>Productos</title>

                <link href="/static/css/app.css" rel="stylesheet" />
            </Head>

            <Header />
            <main>
                {props.children}
            </main>

        </>     
     );
}
 
export default Layout;