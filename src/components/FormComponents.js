
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: ${(props) => props.alignSelf || 'initial'};
  padding: 0px 25px;
  min-height: 100vh;
  background-color: #FBF6A9;
`;

const Form = styled.form`
  width: 380px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;

  margin-bottom: 30px;

  @media (max-width: 700px) {
    width: 100%;
  }
`;

const Form2= styled.form`
box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 30px;

  @media (max-width: 700px) {
    width: 50%;
    flex-direction: column;
  }
`;

const Input = styled.input`
  all: unset;
  box-sizing: border-box;
  font-family: 'Lexend Deca', sans-serif;
  width: 100%;
  color: #000;
  background: #FFFFFF;
  padding: 20px;
  border: 1px solid rgba(120, 177, 89, 0.25);
  border-radius: 12px;
  box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);

  ::placeholder {
    color: #9C9C9C;
    font-family: 'Lexend Deca', sans-serif;
  }
`;

const Button = styled.button`
  all: unset;
  box-sizing: border-box;
  cursor: pointer;

  width: 100%;
  margin-top: 30px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 15px;

  color: #FFFFFF;
  text-align: center;
  padding: 10px;
  background: #135713;
  border-radius: 12px;
  width: 207px;
  height: 60px;

  max-width: ${(props) => props.maxWidth || 'initial'};
`;

const StyledLink = styled(Link)`
  /* all: unset; */
  box-sizing: border-box;
  cursor: pointer;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 11px;
  color: #137513;
`

export {
  Container,
  Form,
  Form2,
  Input,
  Button,
  StyledLink
};
