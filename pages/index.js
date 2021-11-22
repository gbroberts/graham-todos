import {useState} from "react";
import {useRouter} from "next/router";
import useSWR from 'swr';
import styled from "styled-components";
import { Button } from "ui/buttons";
import {List, ListItem} from "classcomp/present";
const Wrapper = styled.div`
  padding: 6rem 0 0;
  text-align: center;
  button{
    width: 40%;
  }
  p{
    font-size: 4.25rem;
  }
`;

// Dumb: Presentational
// Smart: Logic

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function Home() {
  // accessing external data
  // const {data, error} = useSWR('https://jsonplaceholder.typicode.com/users', fetcher);

  // if(!data) return <div>loading...</div>
  // if(error) return <div>oops, something went wrong</div>

  const [isValidUser, setValidUser] = useState(false);
  const router = useRouter();

  function onRequestSignIn (){
    // firebase login logic. returns promis
    // user or error in return
    // user dashboard via protected route
    setValidUser(true)
    
  }

  if(isValidUser){
    router.push('http://www.apple.ca')
  }
  
  return (
     <Wrapper>
       <h1>Graham&apos;s Todos</h1>

       <Button onClick={onRequestSignIn}>Login</Button>
      
     </Wrapper>
  )
}
