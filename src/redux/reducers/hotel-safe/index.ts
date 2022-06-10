import { SafeType } from "../../../types/HotelSafe";
import {
  CLEAR_DISPLAY,
  INPUT_NUMBER,
  SAFE_ACCESS_FAILED,
  SAFE_ACCESS_SUCCESS,
  SAFE_LOCK_FAILED,
  SAFE_LOCK_SUCCESS,
} from "../../actions/hotel-safe/types";

const initialState: SafeType = {
  displayText: "",
  safeOpen: false,
  error: "",
};

const agentAuthReducer = (state = initialState, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case INPUT_NUMBER:
      return {
        ...state,
        displayText: state.displayText + payload,
      };

    case CLEAR_DISPLAY:
      return {
        ...state,
        displayText: "",
        error: "",
      };

    case SAFE_ACCESS_SUCCESS:
      return {
        ...state,
        safeOpen: true,
        error: "",
        displayText: "",
      };

    case SAFE_ACCESS_FAILED:
      return {
        ...state,
        safeOpen: false,
        error: "INVALID ACCESS",
      };

    case SAFE_LOCK_SUCCESS:
      return {
        ...state,
        safeOpen: false,
        error: "",
        displayText: "",
      };

    case SAFE_LOCK_FAILED:
      return {
        ...state,
        error: "ENTER VALID PIN TO LOCK SAFE",
        displayText: "",
      };
    default:
      return state;
  }
};

export default agentAuthReducer;
