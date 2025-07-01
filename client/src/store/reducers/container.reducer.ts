import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface ContainerState {
  containers: any[];
  loading: boolean;
  containerListLoading: boolean;
  pageError: boolean;
  segment: "active" | "stopped" | "all";
  activeIndex: number;
  isShowingSideSheet: boolean;
  logData: object;
  showModal: false;
  selectedContainer: object;
}

const initialState: ContainerState = {
  containers: [],
  loading: false,
  containerListLoading: true,
  pageError: false,
  segment: "active",
  activeIndex: 0,
  isShowingSideSheet: false,
  logData: {},
  showModal: false,
  selectedContainer: {},
};

export const getContainers = createAsyncThunk(
  "containers/fetchByIdStatus",
  async (status: string, thunkAPI) => {
    const response = await fetch(`/api/container/fetch?status=${status}`, {});

    if (!response.ok) {
      return thunkAPI.rejectWithValue("Failed to fetch containers");
    }

    return await response.json();
  }
);

export const containerReducer = createSlice({
  name: "containers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getContainers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getContainers.fulfilled, (state, action) => {
        state.loading = false;
        state.containers = action.payload;
      })
      .addCase(getContainers.rejected, (state) => {
        state.loading = false;
        state.pageError = true;
      });
  },
});

// export const { increment, decrement, incrementByAmount } = containerReducer.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.container.value;

export default containerReducer.reducer;
