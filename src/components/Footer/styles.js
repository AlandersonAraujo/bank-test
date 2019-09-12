import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  padding: 10px 0 10px;
  height: 200px;
  background: #F5F5F5;
  border-radius: 25px;
`;

export const CardFooter = styled.View`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0 14px;
`;

export const CardContent = styled.View`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px 0 20px;
`;

export const Annotation = styled.Text`
  font-size: 15px;
  font-family: Roboto;
  color: #000002;
  margin-right: 170px;
  padding-left: 20px;
`;

export const Title = styled.Text`
  font-size: 15px;
  font-family: Roboto;
  color: #000002;
  font-weight: bold;
  margin-right: 180px;
  padding-left: 10px;
`;

export const Description = styled.Text`
  font-size: 14px;
  font-family: Roboto;
  color: #000002;
  font-weight: bold;
  margin-right: 20px;
`;
