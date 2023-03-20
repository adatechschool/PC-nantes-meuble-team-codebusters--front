import React, { useEffect, useState } from 'react';

export function ApiSingle(){
    const [dataSingle, setData] = useState([]);
    const idFurniture = window.location.href.split('?')[1];
    useEffect(() => {
        async function fetchDataGit(){
            try{
                const response = await fetch(`http://localhost:4000/furniture/${idFurniture}`);
                const dataSingle = await response.json();
                console.log(dataSingle)
                setData(dataSingle);
            } catch (error){
                console.error(error);
            }
        }
        fetchDataGit();
    }, );
    return dataSingle;
}


   