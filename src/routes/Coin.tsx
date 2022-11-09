import { useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";

interface RouteParams {
  coinId: string;
}

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

function Coin() {
  const [loading, setLoading] = useState(true);
  const { coinId } = useParams<keyof RouteParams>() as RouteParams;
  
  return (
    <Container>
      <Header>
        <Title>{coinId}</Title>
      </Header>
      {loading ? <Loader>Loading ...</Loader> : null}
    </Container>
  );
}
export default Coin;
