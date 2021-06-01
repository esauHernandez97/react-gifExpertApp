import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    
    //const categorias = ['One Punch', 'Samurai X', 'Dragon Ball' ];
    const [categorias, setCategorias]= useState(['One Punch']);

    // const handleAdd = () => {
    //     setCategorias(['HunterXHunter', ...categorias]);
    // }



    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategorias={setCategorias}/>

            <hr/>

            <ol>
                {
                    categorias.map(category => (
                        <GifGrid 
                        key={category}
                        category={category} />
                    ))    
                }
            </ol>

        </>
    )
}
