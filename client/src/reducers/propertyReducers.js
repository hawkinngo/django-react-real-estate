import {
  PROPERTY_LIST_REQUEST,
  PROPERTY_LIST_SUCCESS,
  PROPERTY_LIST_FAIL,
} from "../actions/types";

export const propertiesListReducer = (state = { properties: [] }, action) => {
  switch (action.type) {
    case PROPERTY_LIST_REQUEST:
      return { loading: true, properties: [] };
    case PROPERTY_LIST_SUCCESS:
      return { loading: false, properties: action.payload.results };
    case PROPERTY_LIST_FAIL:
      return { loading: false, properties: action.payload };
    default:
      return state;
  }
};