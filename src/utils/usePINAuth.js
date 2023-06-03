import { useState, useEffect } from "react";
import { sha256 } from 'react-native-sha256';
import AsyncStorage from "@react-native-async-storage/async-storage";


export const usePINAuth = () => {

  const [existingPin, setExistingPin] = useState("");
  const [pin, setPin] = useState("");
  const [validationError, setValidationError] = useState(false);
  const [validationSuccess, setValidationSuccess] = useState(false);

  const hashPin = async () => {
    try {
      const hashedPin = await sha256(pin);
      return hashedPin;
    } catch (error) {
      console.error("Error hashing PIN:", error);
      throw error;
    }
  };

  const storePin = async () => {
    try {
      const hashedPin = await hashPin(pin);
      await AsyncStorage.setItem("pin", hashedPin);
      setPin(prevState => prevState = "");
    } catch (error) {
      console.error("Error setting PIN:", error);
      throw error;
    }
  };

  const validatePin = async (pin) => {
    try {
      const hashedPin = await hashPin(pin);
      const storedPin = await AsyncStorage.getItem('pin');
      if (hashedPin === storedPin) {
        setValidationSuccess(prevState => prevState = true);
        setValidationError(prevState => prevState = false);
      } else {
        setValidationError(prevState => prevState = true);
      }
      return hashedPin === storedPin;
    } catch (error) {
      console.error("Error checking PIN:", error);
      throw error;
    }
  };

  const checkExistingPin = async () => {
    const storedPin = await AsyncStorage.getItem("pin");
    if (storedPin) {
      setExistingPin(AsyncStorage.getItem("pin"));
    }
  };

  useEffect(() => {
    // AsyncStorage.clear();
    checkExistingPin();
  }, [pin]);

  return {
    pin,
    existingPin,
    setPin,
    storePin,
    validatePin,
    validationError,
    validationSuccess,
  }

};
