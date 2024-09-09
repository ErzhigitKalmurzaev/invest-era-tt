import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../api/axios";

export const getData = createAsyncThunk(
    "main/getData",
    async (slug, { rejectWithValue }) => {
        try {
            const { data } = await axiosInstance.get(`api/tables/${slug}/`);
            if(typeof data === 'string') {
                let jsonString = data?.replace(/NaN/g, "null");
                return JSON.parse(jsonString);
            } else {
                return data;
            }
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

const mainSlice = createSlice({
    name: "main",
    initialState: {
        data: [],
        data_status: "pending"
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(getData.pending, (state) => {
                state.data = [];
                state.data_status = "pending";
            })
            .addCase(getData.fulfilled, (state, { payload }) => {
                state.data = [];
                state.data = payload;
                state.data_status = "fulfilled";
            })
            .addCase(getData.rejected, (state) => {
                state.data = [];
                state.data_status = "rejected";
            });
    },
  });
  
  export const mainActions = mainSlice.actions;
  export default mainSlice;