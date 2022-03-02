import React, { useEffect, useState } from "react";
import Paging from "./Paging";
function Card(props) {
  const input = props.input;
  const SearchType = props.SearchType;
  const [card, setCard] = useState("");
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(() => {return 1});
  const [CardPerPage] = useState(10);
  const [currentCard, setCurrentCard] = useState([])
 



  const getCard = async () => {
    try {
      let typeName = "";

      if (input === "") {
        //set default to Sky Striker
        typeName =
          "https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=Sky Striker";
      } else {

        if(SearchType === "Type")
        {
          typeName = `https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=${input}`;
        }
        else
        {
          typeName = `https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${input}`;
        }
      }

      const response = await fetch(typeName);
      const body = await response.json();

      if (body.data !== undefined) {
        
        setCard(body.data);
        setLoading(false);
      } else {
        setLoading(true);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

 
  useEffect(() => {
    getCard();
  }, [input]);


  const indexOfLastCard = currentPage * CardPerPage;
  const indexOfFirstCard = indexOfLastCard - CardPerPage;

 
  useEffect(() => {
    setCurrentCard (card.slice(indexOfFirstCard, indexOfLastCard))
    console.log(currentPage)
  }, [card]);

  console.log(card);



 

  return (
    <div>

       {loading === false ? ( 
        
        currentCard.map((item, index) => {
          return (
            <img
              src={item.card_images[0].image_url}
              key={item + index}
              alt=""
            />
          );
        })
        
      ) : (
        <p>Loading</p>
      )}
      <Paging CardPerPage = {CardPerPage} totalCard = {card.length} setCurrentPage = {setCurrentPage}/>
    </div>
  );
}

export default Card;

/*      {loading === false ? (
        currentCard.map((item, index) => {
          return (
            <img
              src={item.card_images[0].image_url}
              key={item + index}
              alt=""
            />
          );
        })
        
      ) : (
        <p>Loading</p>
      )} */