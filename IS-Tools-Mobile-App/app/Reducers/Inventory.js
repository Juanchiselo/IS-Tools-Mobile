import { ADD_SCANNED_SERIAL } from "../Actions/Inventory";

const initialState = {
  serials: [""]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SCANNED_SERIAL:
      return {
        ...state,
        serials: [...state.serials, action.serial, ""]
      };
    default:
      return state;
  }
};

export default reducer;
