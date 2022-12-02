import { Button, Container, HStack, Radio, RadioGroup, } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { server } from "../index";
import CoinCard from "./CoinCard";
import ErrorComponent from "./ErrorComponent";
// import ExchangeCard from "./ExchangeCard";
import Loader from "./Loader";

const Coins = () => {
  const [ coins, setCoins ] = useState([]);
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState(false);
  const [ page, setPage ] = useState(1);
  const [ currency, setCurrency ] = useState("inr");

  const currencySymbol = currency === "inr" ? "₹" : currency === "eur" ? "€" : "$"

  const changePage = (page)=>{
    setPage(page);
    setLoading(true);
  }

  const btns = new Array(132).fill(1);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`);
        setCoins(data);
        setLoading(false);
        // console.log(data);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCoins();
  }, [currency, page]);

if(error) return <ErrorComponent message={"Error while fetching Coins"} />

  return (
    <Container maxW={"container.xl"}>{loading ? ( <Loader /> ): (<>

      <RadioGroup value={currency} onChange={setCurrency} p={"8"}>
        <HStack spacing={"4"}>
          <Radio value={"inr"}>₹ INR</Radio>
          <Radio value={"eur"}>€ EUR</Radio>
          <Radio value={"usd"}>$ USD</Radio>
        </HStack>
      </RadioGroup>

        <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
            {coins.map((i) => (
                    <CoinCard key={i.id} id={i.id} name={i.name} price={i.current_price} img={i.image} symbol={i.symbol} url={i.url} currencySymbol={currencySymbol} />
                ))}
        </HStack>

        <HStack w={"full"} overflow={"auto"} p={"8"}>
              {
                btns.map((item, index) => (
                  <Button key={index} bgColor={"blackAlpha.900"} color={"white"} onClick={()=>changePage(index+1)}>{index+1}</Button>
                ))
              }
        </HStack>
    </>)}
    </Container>
  );
};

// const ExchangeCard = ({name, img, rank, url}) => {
//   <a href={url} target={"blank"} >
//     <VStack>
//       <Image src={img} w={"10"} h={"10"} objectFit={"contain"} alt={"Excanges"} />
//       <Heading size={"md"} noOfLines={"1"}>{rank}</Heading>
//       <Text noOfLines={1}>{name}</Text>
//     </VStack>
//   </a>
// }

export default Coins
