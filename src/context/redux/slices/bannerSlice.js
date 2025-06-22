import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import commonApis from "../../../services/commonApis";

const initialState = {
  banner: [],
  userBanner: [],
  vendorBanner: null,
  aboutBanner: null,

  ourServicesBanner: null,
  error: null,
  status: "idle",
};

// Existing thunks
export const fetchBanner = createAsyncThunk(
  "banner/fetchBanner",
  async (_, { rejectWithValue }) => {
    try {
      const response = await commonApis.getAllBanner();
      return response.data?.banners;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchUserBanner = createAsyncThunk(
  "banner/fetchUserBanner",
  async (_, { rejectWithValue }) => {
    try {
      const response = await commonApis.getUserBanner();
      return response.data?.banners;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchVendorBanner = createAsyncThunk(
  "banner/fetchVendorBanner",
  async (_, { rejectWithValue }) => {
    try {
      const response = await commonApis.getVendorBanner();
      return response.data?.banners;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// New thunks for additional banner types
export const getAboutUsBanners = createAsyncThunk(
  "banner/get-getAboutUsBanners",
  async (_, { rejectWithValue }) => {
    try {
      const response = await commonApis.getAbout1banner();
      return response.data?.banners;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// export const fetchAbout2Banner = createAsyncThunk(
//   "banner/fetchAbout2Banner",
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await commonApis.getAbout2banner();
//       return response.data?.banners;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

export const fetchOurServicesBanner = createAsyncThunk(
  "banner/fetchOurServicesBanner",
  async (_, { rejectWithValue }) => {
    try {
      const response = await commonApis.getOurServicesBanner();
      return response.data?.banners;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const bannerSlice = createSlice({
  name: "banner",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Existing cases
      .addCase(fetchBanner.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBanner.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.banner = action.payload;
      })
      .addCase(fetchBanner.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(fetchUserBanner.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUserBanner.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.userBanner = action.payload;
      })
      .addCase(fetchUserBanner.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(fetchVendorBanner.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchVendorBanner.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.vendorBanner = action.payload;
      })
      .addCase(fetchVendorBanner.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
     
      .addCase(getAboutUsBanners.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAboutUsBanners.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.aboutBanner = action.payload;
      })
      .addCase(getAboutUsBanners.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(fetchOurServicesBanner.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchOurServicesBanner.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.ourServicesBanner = action.payload;
      })
      .addCase(fetchOurServicesBanner.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default bannerSlice.reducer;