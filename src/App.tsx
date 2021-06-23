import './styles/global.scss';
import styled from 'styled-components';

const Container = styled.div`
  display:flex;
  align-items: center;
  justify-content:center;
  flex-direction: column;
  width:100%;
  height: 100vh;
  background: #212121;

  img{ 
    width: 300px;
  }

  h1{
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
    font-weight: 400;
    font-style: normal;
    color: #61dafb;
    text-align: center;
    margin: 0;
    font-size: 45px;
    letter-spacing: 0.01em;
  }

  span{ 
    padding-top: 15px;
    text-align: center;
    font-size: 24px;
    letter-spacing: 0.01em;
    font-weight: 200;
    color:#babaca;
    a{ 
      text-decoration: none;
      color: #61dafb;
    }
  }
`;

export function App() {
  return (
    <Container>
      <img src="react.gif" alt="React" />
      <h1>React 18 ALPHA</h1>
      <span>
        template created by
        {' '}
        <a
          href="https://www.linkedin.com/in/tadeuagostini/"
          target="_blank"
          rel="noreferrer"
        >
          Tadeu Agostini
        </a>
      </span>
    </Container>
  );
}
