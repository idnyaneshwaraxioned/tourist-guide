import { GET_ALL_GUIDES, GET_SEARCH_PLACE } from "./actiontype"

const initialState = {
  searchplace: [],
  allGuideDetail: []
}
const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SEARCH_PLACE:
      return { ...state, searchplace: action.payload }
    case GET_ALL_GUIDES:
      return { ...state, allGuideDetail: action.payload }
    default:
      return state
  }
}

export default homeReducer