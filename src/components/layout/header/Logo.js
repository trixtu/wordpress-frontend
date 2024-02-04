import { Image } from "@chakra-ui/react";
import Link from "next/link";

 const logo='/logo6.png'

export default function Logo (){
  return (

    <Link href="/" passHref className="cursor-pointer" >
       {/* <span className="text-lg pt-1 font-bold">Shopify + Next.js</span> */}
      <img className="logo" src={logo}/>
    </Link>
  )
}