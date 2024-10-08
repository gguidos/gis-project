import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: any = {
    shapes: [
        {
            id: undefined,
            wallet: undefined,
            username: undefined
        }
    ]
}

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        registerUser: (state, action: PayloadAction<any>) => {
            state.shapes.push(action.payload);
        },
    }
});

export const {
    registerUser,
} = userSlice.actions

export default userSlice.reducer