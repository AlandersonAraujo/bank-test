import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 5px;
  padding: 0 20px;
`;

export const Top = styled.View`
  flex-direction: column;
  justify-content: center;
  padding: 20px 0 14px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-family: Roboto;
  color: #000002;
  font-weight: bold;
`;

export const Logo = styled.Image`
  width: 45px;
  height: 45px;
  border-radius: 25px;
`;

export const Description = styled.Text`
  font-family: Roboto;
  font-size: 10px;
  color: #000002;
`;
