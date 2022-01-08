import styled from "styled-components";

export default function Footer() {
    return (
        <Container>
            This is the footer           
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #1d1f22;
    color: #fff;
    font-size: 1.2rem;
    margin-top: 4rem;
`;
