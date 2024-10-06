import styled from "styled-components";
import {USAInfo} from "../interfaces/Interface";

// A style component that uses the interfaces info and adjust the information into a column evenly spaced out
const AllUSADiv = styled.div`
    display: flex;
    //flex-flow: row wrap;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 20rem;
    margin: 3rem;
    padding: 0 1rem;
    background-color: lightblue;
    border-radius: 8px;


`;

// the data object is being passed as a prop to the component.
const AllUSA = ({data}: {data: USAInfo }) => {
    return (
        //wraps the content inside the component
        <AllUSADiv>
            <h1>{data.Nation}</h1>
            <p>Year: {data.Year}</p>
            <p>Population: {data.Population}</p>
        </AllUSADiv>
    );
};


export default AllUSA;
