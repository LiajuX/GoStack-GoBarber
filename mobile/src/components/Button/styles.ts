import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  align-items: center;
  justify-content: center;

  height: 60px;

  margin-top: 8px;
  border-radius: 10px;

  background: #ff9000;
`;

export const ButtonText = styled.Text`
  color: #312e38;

  font-size: 18px;
  font-family: 'RobotoSlab-Medium';
`;
