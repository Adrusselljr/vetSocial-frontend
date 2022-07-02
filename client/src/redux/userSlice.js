import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        clickedPostComments: "",
        clicked: false,
        user: null,
        jwtToken: ""
    },
    reducers: {
        addUser: (state, action) => {
            state.user = action.payload
        },
        addToken: (state, action) => {
            state.jwtToken = action.payload
        },
        deleteUser: state => {
            state.user = null
            state.jwtToken = ""
        },
        setClicked: state => {
            state.clicked = !state.clicked
        },
        setClickedPostComments: (state, action) => {
            state.clickedPostComments = action.payload
        }
    }
})

export const AsyncClickedPostComments = (amount) => (dispatch) => {
    setTimeout(() => {
        dispatch(setClickedPostComments(amount))
    }, 1)
}

export const selectClicked = state => state.user.clicked

export const selectClickedPostComments = state => state.user.clickedPostComments

export const selectUser = state => state.user.user

export const selectToken = state => state.user.jwtToken

export const { addUser, deleteUser, addToken, setClicked, setClickedPostComments } = userSlice.actions

export default userSlice.reducer