import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  padding: 0 30px ${Platform.OS === 'android' ? 120 : 40}px;
`;

export const Title = styled.Text`
  margin: 64px 0 24px;

  color: #f4ede8;

  font-size: 20px;
  font-family: 'RobotoSlab-Medium';
`;

export const ForgotPassword = styled.TouchableOpacity`
  margin-top: 24px;
`;

export const ForgotPasswordText = styled.Text`
  color: #f4ede8;

  font-size: 16px;
  font-family: 'RobotoSlab-Regular';
`;

export const CreateAccountButton = styled.TouchableOpacity`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  border-top-width: 1px;
  border-color: #232129;
  padding: 16px 0 ${16 + getBottomSpace()}px;

  background: #312e38;
`;

export const CreateAccountButtonText = styled.Text`
  margin-left: 16px;

  color: #ff9000;

  font-size: 18px;
  font-family: 'RobotoSlab-Regular';
`;
