import React, { useEffect } from "react";
import { 
  Wrapper, 
  Message,
  ErrorMessage,
  StorePinSuccessMessage,
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
    setValidationError,
    validationSuccess,
    setValidationSuccess,
    storePin,
    setStorePINSuccess,
    storePINSuccess,
    setPin,
  } = usePINAuth();

  const handleChange = (pin) => {
    setPin(prevState => prevState = pin);
    setValidationSuccess(prevState => prevState = false);
    setStorePINSuccess(prevState => prevState = false);
    setValidationError(prevState => prevState = false);
  };

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
        onChangeText={(pin) => handleChange(pin)}
      />
      {validationError &&
        <ErrorMessage>Your PIN is not correct</ErrorMessage>
      }
      {storePINSuccess && (
        <StorePinSuccessMessage>
          Your PIN has been saved. Use it to access the app.
        </StorePinSuccessMessage>
      )}
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