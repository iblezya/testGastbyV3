import styled from "styled-components";

export const LandingGrid = styled.div`
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(16, auto);
  grid-template-rows: 17vh 8vh 50vh 10vh 15vh;
  grid-gap: 0 2rem;
  @media ${(props) => props.theme.breakpoints.s} {
    grid-template-columns: 2rem repeat(6, 1fr) 2rem;
    grid-gap: 0 1rem;
  }
  @media ${(props) => props.theme.breakpoints.m} {
    grid-template-columns: 1rem repeat(6, 1fr) 1rem;
    grid-gap: 0;
  }
`;
