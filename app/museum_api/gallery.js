"use client";

import { useEffect, useState } from "react";

async function getArtworkIds() {
    try {
        const response = await fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects");
        if (!response.ok){
                     //if response is not ok (!) handle failure of request
        }
        const data = await response.json();
        console.log(data);
        let shuffled = data.ObjectIds;
        shuffled = [...shuffled].sort(() => 0.5 - Math.random());
        setArtworkId(shuffled[0]);
    } catch (error) {
                    // this will handle operational errors
    }
}

async function getArtworkById(artId){
    if(artId == null || artId == undefined)
        return null;
    const response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`);
    if (!response.ok){
        //if response is not ok (!) handle failure of request
    }
    const data = await response.json();
    console.log(data);
}


export default function Gallery() {

const [artworkId, setArtworkId] = useState (null);


    useEffect (() => {
        getArtworkIds();
    } , []);      // two arguments

    useEffect (() => {
        getArtworkById(artworkId);
    } , [artworkId]);


        return (
            <section>

            
            </section>
        )
        
    }