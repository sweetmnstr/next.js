import {useRouter} from "next/router";
import React from 'react'


const PortfolioDetails = ({query}) =>{
    // const router = useRouter()
    const { id } = query
    return(
        <h1>Here is your id: {id} </h1>
    )
}
PortfolioDetails.getInitialProps = ({query}) => {
    return {query}
}
export default PortfolioDetails
