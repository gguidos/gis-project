import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: any = {
    shapes: [
        {
            id: 'unique-polygon-id',
            type: '',
            markers: [],
        }
    ]
}

const calculationSlice = createSlice({
    name: 'calculation',
    initialState: initialState,
    reducers: {
        addShape: (state, action: PayloadAction<any>) => {
            state.shapes.push(action.payload);
        },
    }
});

export const {
    addShape,
} = calculationSlice.actions

export default calculationSlice.reducer