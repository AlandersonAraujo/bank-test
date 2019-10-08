import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 10px 0 10px;
  height: 230px;
  background: #F5F5F5;
  border-radius: 25px;
`;

export const CardFooter = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

export const CardContent = styled.View`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px;
`;

export const CardContentImage = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`;

export const CardContentImageAnnotation = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 17px;
`;

export const CardContentImageDescription = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 17px;
`;

export const ImageIcon = styled.Image`
  width: 45px;
  height: 45px;
  border-radius: 12px;
  margin-right: 5px;
  margin-bottom: 5px;
`;

export const Annotation = styled.Text`
  font-size: 15px;
  font-family: Roboto;
  color: #000002;
  margin-right: 170px;
  padding-left: 20px;
  margin-bottom: 30px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-family: Roboto;
  color: #000002;
  font-weight: bold;
`;

export const Description = styled.Text`
  font-size: 15px;
  font-family: Roboto;
  color: #000002;
  font-weight: bold;
  margin-right: 20px;
  margin-bottom: 30px;
`;
