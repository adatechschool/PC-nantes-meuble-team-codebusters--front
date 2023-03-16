import React, { useEffect, useState } from 'react';

export function Api(){
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchDataGit(){
            try{
                const response = await fetch("http://localhost:4000/furnitures");
                const data = await response.json();
                setData(data);
            } catch (error){
                console.error(error);
            }
        }
        fetchDataGit();
    }, []);
    return data;
}


   