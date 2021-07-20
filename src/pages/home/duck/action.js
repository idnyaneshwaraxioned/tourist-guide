import { GET_ALL_GUIDES, GET_SEARCH_PLACE } from "./actiontype"

export const getSearchPlace = (data) => ({
  type: GET_SEARCH_PLACE,
  payload: data
})

export const getAllGuides = (data) => ({
  type: GET_ALL_GUIDES,
  payload: data
})

