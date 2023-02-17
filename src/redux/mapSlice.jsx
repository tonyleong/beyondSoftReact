import axios from "axios"
import { API_KEY, SECRET_KEY } from "../enums"
const SEARCH_RESULT = 'SEARCH_RESULT'
const MAP_LOCATION = 'MAP_LOCATION'

const search = (text) => {
    return async dispatch => {

        if (!text) {
            dispatch({
                type: SEARCH_RESULT,
                payload: []
            })
            return
        }

        let res = await axios.get(`https://api.roadgoat.com/api/v2/destinations/auto_complete?q=${text}`, {
            headers: {
                Authorization: "Basic " + btoa(API_KEY + ":" + SECRET_KEY),
            }
        })
        dispatch({
            type: SEARCH_RESULT,
            payload: res?.data?.data.map(({ attributes }) => ({ lat: attributes.latitude, lng: attributes.longitude, name: attributes.long_name }))
        })
    }
}


const setPosition = (location) => {
    return async dispatch => {
        dispatch({
            type: MAP_LOCATION,
            payload: location
        })
    }
}

export { search, setPosition } 