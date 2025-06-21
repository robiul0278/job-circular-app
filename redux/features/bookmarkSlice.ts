import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type TBookmark = {
    id: string;
    title: string;
    description: string;
    isCompleted?: boolean;
}

type TInitialState = {
    bookmark: TBookmark[]
}

const initialState: TInitialState = {
    bookmark: []
}

export const bookmarkSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addBookmark: (state, action: PayloadAction<TBookmark>) => {
            state.bookmark.push({...action.payload, isCompleted: false})
        },
        removeBookmark: (state, action: PayloadAction<string>) => {
            state.bookmark = state.bookmark.filter((item) => item.id !== action.payload)
        },
        toggleComplete : (state, action: PayloadAction<string>) => {
            const task = state.bookmark.find((item) => item.id === action.payload)
            task!.isCompleted = !task?.isCompleted
            state.bookmark = state.bookmark.sort((task) => task.isCompleted === true ? 1 : -1)
        }
    }
  })

  export const {addBookmark, removeBookmark, toggleComplete} = bookmarkSlice.actions;

  export default bookmarkSlice.reducer;