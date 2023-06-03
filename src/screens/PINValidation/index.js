import React, { useEffect } from "react";
import { 
  Wrapper, 
  Message,
  ErrorMessage,
  InputPIN,
  ButtonWrapper,
  ButtonText,
} from "./styled";
import { usePINAuth } from "../../utils/usePINAuth";


const PINValidation = ({ navigation }) => {

  const { 
    pin, 
    existingPin, 
    validatePin,
    validationError,
    validationSuccess,
    storePin,
    setPin,
  } = usePINAuth();

  useEffect(() => {
    if (validationSuccess) {
      navigation.navigate('MainScreen');
    }
  }, [validationSuccess]);

  return (
    <Wrapper>
      <Message>
        {existingPin ? 'Enter your PIN' : 'Set a PIN to start'}
      </Message>
      <InputPIN
        secureTextEntry
        value={pin}
        onChangeText={(pin) => setPin(pin)}
      />
      {validationError &&
        <ErrorMessage>Your PIN is not correct</ErrorMessage>
      }
      <ButtonWrapper 
        disabled={!pin}
        onPress={existingPin ? validatePin : storePin}
      >
        <ButtonText disabled={!pin}>
          {existingPin ? 'Enter' : 'Save'}
        </ButtonText>
      </ButtonWrapper>
    </Wrapper>
  )
};

export default PINValidation;