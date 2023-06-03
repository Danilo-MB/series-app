import styled from "styled-components";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { COLORS } from "../../style/colors";


export const Wrapper = styled(View)`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: ${COLORS.black};
  justify-content: center;
  align-items: center;
`;

export const Message = styled(Text)`
  color: ${COLORS.white};
  font-size: 20px;
  margin-bottom: 20px;
`;

export const ErrorMessage = styled(Text)`
  color: ${COLORS.red};
  font-size: 16px;
  margin-bottom: 20px;
`;

export const StorePinSuccessMessage = styled(Text)`
  color: ${COLORS.green};
  font-size: 16px;
  margin-bottom: 20px;
  font-weight: bold;
`;

export const InputPIN = styled(TextInput)`
  border-color: ${COLORS.gray};
  border-width: 2px;
  border-radius: 10px;
  width: 50%;
  margin-bottom: 20px;
  color: ${COLORS.white};
  font-size: 20px;
  text-align: center;
`;

export const ButtonWrapper = styled(TouchableOpacity)`
  width: 50%;
  border-color: ${props => props.disabled ? COLORS.gray : COLORS.green};
  border-width: 2px;
  background-color: ${props => props.disabled ? COLORS.gray : COLORS.green};
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled(Text)`
  color: ${COLORS.black};
  font-size: 20px;
  font-weight: bold;
`;