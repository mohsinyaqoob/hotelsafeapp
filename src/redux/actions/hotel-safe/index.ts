import { Dispatch } from "react";
import { updateCommaList } from "typescript";
import { isValidPin } from "../../../utils/validation";
import {
  CLEAR_DISPLAY,
  INPUT_NUMBER,
  SAFE_ACCESS_FAILED,
  SAFE_ACCESS_SUCCESS,
  SAFE_LOCK_FAILED,
  SAFE_LOCK_SUCCESS,
} from "./types";

export const handleNumberInput =
  (number: number) => (dispatch: Dispatch<any>) => {
    if (number)
      dispatch({
        type: INPUT_NUMBER,
        payload: number,
      });
  };

export const clearDisplay = () => (dispatch: Dispatch<any>) => {
  dispatch({
    type: CLEAR_DISPLAY,
  });
};

export const unlockSafe = (input: string) => (dispatch: Dispatch<any>) => {
  // Validate pin
  if (isValidPin(input)) {
    dispatch({
      type: SAFE_ACCESS_SUCCESS,
    });
  } else {
    dispatch({
      type: SAFE_ACCESS_FAILED,
    });
  }
};

export const lockSafe = (input: string) => (dispatch: Dispatch<any>) => {
  if (isValidPin(input))
    dispatch({
      type: SAFE_LOCK_SUCCESS,
    });
  else dispatch({ type: SAFE_LOCK_FAILED });
};
