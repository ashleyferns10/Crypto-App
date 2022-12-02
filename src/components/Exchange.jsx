import { Container, HStack, } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { server } from "../index";
import ErrorComponent from "./ErrorComponent";
import ExchangeCard from "./ExchangeCard";
import Loader from "./Loader";

const Exchange = () => {
  const [ exchanges, setExchanges ] = useState([]);
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState(false);

  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const { data } = await axios.get(`${server}/exchanges`);
        setExchanges(data);
        setLoading(false);
        // console.log(data);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchExchanges();
  }, []);

if(error) return <ErrorComponent message={"Error while fetching exchanges"} />

  return (
    <Container maxW={"container.xl"}>{loading ? ( <Loader /> ): (<>
        <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
            {exchanges.map((i) => (
                    <ExchangeCard key={i.id} name={i.name} img={i.image} rank={i.trust_score_rank} url={i.url} />
                ))}
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

export default Exchange;
