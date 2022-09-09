import axios from "axios";
import React,{useState,useEffect} from "react";
import Card from "./Card";
const MotiQuotes = () => {
    const[quotes,setquotes] = useState([]);
    const getquotes = async()=>{
        const response = await axios.get("/api/quotes");
        if(response.data.success){
         setquotes(response.data.data);
        }
    }
  useEffect(()=>{
      getquotes()
    },[])
  return (
    <>
      {
        quotes.map((candidate,i)=>{
            return(
                <>
                <Card 
                category={candidate.category}
                headline={candidate.headline}
                description={candidate.description}
                current={i} />
                </>
            )
        })
      }
    </>
  );
};

export default MotiQuotes;