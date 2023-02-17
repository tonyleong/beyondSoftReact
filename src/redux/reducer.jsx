const initialState = {}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return { ...state, [action.type]: action?.payload }
    }
}