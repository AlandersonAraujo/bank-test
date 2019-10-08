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
  flex-direction: column;
  justify-content: space-between;
  background: #252625;
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
  padding: 10px 30px;
`;

export const CardHeaderContent = styled.View`
  transform: rotate(90deg);
`;

export const CardContent = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 60px;
`;

export const ImageIcon = styled.Image`
  height: 50px;
  width: 50px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #FFF;
`;

export const Title2 = styled.Text`
  margin-top: 6px;
  font-size: 25px;
  color: #FFF;
`;

export const Description = styled.Text`
  font-size: 32px;
  color: #FFF;
`;

export const CardFooter = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px 38px;
  border-radius: 4px;
`;

export const Annotation = styled.Text`
  font-size: 15px;
  color: #FFF;
`;

export const Annotation2 = styled.Text`
  font-size: 15px;
  color: #FFF;
`;
