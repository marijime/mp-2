// I used SWR instead of {useEffect, useState} because in office hours
// the professor said I could use it in App.jsx instead of App.tsx

import USA from "./components/USA.tsx"
import styled from "styled-components";
import useSWR from "swr";
// import {useEffect, useState} from "react";
// import {USAInfo} from "./interfaces/Interface.ts"

//Div (ParentDiv) wraps the content.
const ParentDiv=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80vw;
    margin: 3rem auto;
    padding: 1rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border: 5px darkblue solid;
    
`;

export default function USAInfoContent() {

    // re-fetches the data automatically under certain conditions
    const {data, error}=useSWR("https://datausa.io/api/data?drilldowns=Nation&measures=Population",(url)=>
        fetch(url).then(res => res.json())
    );

    // if data is undefined then data is still loading.
    if(error)return <h2>This {error} occurred</h2>
    if(!data) return <h2>Loading...</h2>

    //store the data
    const nationData = data.data;

    // Inside this div,the USA component receives the data
    return(
        // style div that wraps around the content
        <ParentDiv>

            {/* array of USA data objects that you extracted from the API*/}
                {nationData.map((item) => (
                    //  React can track and updates the list of data when changes occur.
                    <USA key={item.ID_Nation} data={item} />
                ))
                }

        </ParentDiv>
    )
}

