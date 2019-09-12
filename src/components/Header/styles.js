import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  padding: 20px 0 20px;
`;

export const Top = styled.View`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0 14px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-family: Roboto;
  color: #000002;
  font-weight: bold;
  margin-left: 8px;
`;

export const Logo = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  margin-left: 190px;
`;

export const Description = styled.Text`
  font-family: Roboto;
  font-size: 10px;
  color: #000002;
  margin-right: 230px;
`;
