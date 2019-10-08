import styled from 'styled-components/native';
export const Container = styled.View`
  height: 120px;
  margin-top: 20px;

`;

export const TabsContainer = styled.ScrollView.attrs({
  horizontal: true,
  contentContainerStyle: {padding: 15, paddingRight: 5},
  showsHorizontalScrollIndicator: false,
})``;

export const TabItem = styled.View`
  width: 45px;
  height: 45px;
  border-radius: 15px;
  margin-left: 10px;
  padding: 10px;
  justify-content: space-between;
`;

export const TabItem2 = styled.View`
  width: 45px;
  height: 45px;
  border: 1px solid #252625;
  border-radius: 15px;
  margin-left: 10px;
  padding: 10px;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-family: Roboto;
  color: #000002;
  font-weight: bold;
  margin-left: 25px;
`;

export const Image = styled.Image`
  width: 45px;
  height: 45px;
  border-radius: 15px;
  position: absolute;
`;

