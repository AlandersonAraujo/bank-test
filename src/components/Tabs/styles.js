import styled from 'styled-components/native';
export const Container = styled.View`
  height: 150px;
  margin-top: 20px;

`;

export const TabsContainer = styled.ScrollView.attrs({
  horizontal: true,
  contentContainerStyle: {padding: 10, paddingRight: 20},
  showsHorizontalScrollIndicator: false,
})``;

export const TabItem = styled.View`
  width: 100px;
  height: 100px;
  border: 1px solid #8B10AE;
  border-radius: 15px;
  margin-left: 10px;
  padding: 10px;
  justify-content: space-between;
`;

export const TabText = styled.Text`
  font-size: 13px;
  color: #8B10AE;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-family: Roboto;
  color: #000002;
  font-weight: bold;
  margin-left: 25px;
`;

