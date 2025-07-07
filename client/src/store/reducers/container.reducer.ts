import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { request } from "../../utilities/request";

type Container = {
  Id: string;
  shortId: string;
  Created: string;
  State: {
    Status: "running" | "other" | "stopped";
    Running: boolean;
    Paused: boolean;
    Restarting: boolean;
    OOMKilled: boolean;
    Dead: boolean;
    Pid: number;
    ExitCode: number;
    Error: string;
    StartedAt: string;
    FinishedAt: string;
  };
  Name: string;
};

interface ContainerState {
  containers: Container[];
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
    const response = await request("get", `/container/fetch?status=${status}`);

    if (response.status !== 200) {
      return thunkAPI.rejectWithValue("Failed to fetch containers");
    }

    return await response.data;
  }
);

const containerSlice = createSlice({
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

// export const { increment, decrement, incrementByAmount } = containerSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.container.value;

const containerReducer = containerSlice.reducer;

export { containerReducer };
