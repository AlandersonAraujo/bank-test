import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #FFF;
`;

export const Content = styled.View`
  flex: 1;
  max-height: 400px;
  z-index: 5;
`;

export const Card = styled.View`
  flex: 1;
  background: #8B10AE;
  border-radius: 10px;
  margin: 0 20px;
  height: 220px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
`;

export const CardContent = styled.View`
  flex: 1;
  padding: 0 30px;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 12px;
  color: #FFF;
`;

export const Description = styled.Text`
  font-size: 32px;
  color: #FFF;
`;

export const CardFooter = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  border-radius: 4px;
`;

export const Annotation = styled.Text`
  font-size: 15px;
  color: #FFF;
  margin-left: 290px;
`;
