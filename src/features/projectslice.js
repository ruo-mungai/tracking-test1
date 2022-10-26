import axios from "axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

 // for fetching from backend
export const fetchALLProjects = createAsyncThunk("projects/getAPI", async () => {
  const response = await axios.get("http://127.0.0.1:3000/projects");
  return response.data;
});

//adding new items
export const saveNewProject = createAsyncThunk(
  "projects/createAPI",
  async (payload) => {
    const response = await axios.post(
      "http://127.0.0.1:3000/projects",
      payload
    );
    return response.data;
  }
);
 //instiall state 
const initialState = {
  projectsData: [],
  loading: "idle",
};

//project slice 
const projectslice = createSlice({
  name: "projects",
  initialState,
  reducers: {},
  // data fetching extra reducers ///
  extraReducers: (builder) => {
    builder.addCase(fetchALLProjects.pending, (state, action) => {
      state.loading = "pending";
    });
    builder.addCase(fetchALLProjects.fulfilled, (state, action) => {
      state.loading = "idle";
      state.projectsData = action.payload;
    });
    //// data fetch reducers

    //data add extra reducers
    builder.addCase(saveNewProject.pending, (state, action) => {
      state.loading = "pending";
    });
    builder.addCase(saveNewProject.fulfilled, (state, action) => {
      state.loading = "idle";
      state.projectsData.unshift(action.payload);
    });
 /////////// data add
  },
});

export const getAllProjects = (state) => state.project.projectsData;
export const getLoading = (state) => state.project.loading;

export default projectslice.reducer;
