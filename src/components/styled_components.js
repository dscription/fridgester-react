import styled from 'styled-components';

export const Input = styled.input``;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label``;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  height: 90vh;
  padding: 5px;
`;

export const ItemCard = styled.div`
  margin: 10px 50px;
  border: solid 3px black;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 2px;
`;

export const Card = styled.div`
  margin: 10px;
  border: solid 3px black;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2px;
  align-items: center;
`;

export const CardBody = styled.div`
  text-align: center;
`

export const Button = styled.button`
  width: 100px;
  border-radius: 5px;
  background-color: ${props => props.color };
`;

export const Main = styled.main`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;

export const CardImage = styled.img`
  width: 80%;
`

export const Form = styled.form``;
