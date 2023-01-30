import { createSlice } from "@reduxjs/toolkit";
import { UsersProps } from "../../api/interface";

const initialState = [
    {
        id: "0",
        name: "Jun"
    },
    {
        id: "1",
        name: "Shiro"
    },
    {
        id: "2",
        name: "Run"
    }
]

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {}
});

export const selectAllUsers = (state: UsersProps) => state.users;

export default usersSlice.reducer;