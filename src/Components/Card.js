import React, { useEffect, useState } from 'react';

function Card() {

    const [card,setCard] = useState("");
    const [loading, setLoading] = useState(true)
    const getCard = async () =>{

        try {
        
            const response = await fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=Blue-Eyes")
            const body = await response.json();
            setCard(body.data);
            setLoading(false)

        } catch (err) {
            console.error(err.message)
        }

    }

    useEffect(()=>{

        getCard()
        
    },[])
    console.log(card)

    return (
        <div>
        {
            loading === false?
            card.map((item,index)=>{

                return (<img src={item.card_images[0].image_url_small} key = {item+index} alt = ""/>)


            }):<p>Loading</p>
        }

        </div>
    );
}

export default Card;