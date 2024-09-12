import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: any = {
  addressForm: {
    saved: false,
  },
  addressComponents: {
    administrativeAreaLevel3: '',
    administrativeAreaLevel2: '',
    administrativeAreaLevel1: '',
    formatedAddress: '',
    locality: '',
    postalCode: '',
    route: '',
    streetNumber: ''
  },
  country: {
    name: '',
    code: '',
  },
  geometry: {
    location: {
      lat: '',
      lng: ''
    }
  },
  formatedAddress: '',
  center: {},
};

const mapSlice = createSlice({
  name: "map",
  initialState,
  reducers: {
    setAddressForm: (state, action) => {
      state.addressForm.saved = action.payload;
    },
    setMapAddress: (state, action: PayloadAction<any>) => {
      state.addressComponents.formatedAddress = action.payload.formatedAddress;
      state.addressComponents.administrativeAreaLevel3 = action.payload.administrativeAreaLevel3;
      state.addressComponents.administrativeAreaLevel2 = action.payload.administrativeAreaLevel2;
      state.addressComponents.administrativeAreaLevel1 = action.payload.administrativeAreaLevel1;
      state.addressComponents.locality = action.payload.locality;
      state.addressComponents.postalCode = action.payload.postalCode;
      state.addressComponents.route = action.payload.route;
      state.addressComponents.streetNumber = action.payload.streetNumber;
    },
    setMapCenter: (state, action: PayloadAction<any>) => {
      state.center = action.payload;
    },
    setMapCountryCode: (state, action: PayloadAction<any>) => {
      state.country.code = action.payload.code;
    },
    setMapCountryName: (state, action: PayloadAction<any>) => {
      state.country.name = action.payload.name;
    },
    setMapCoords: (state, action: PayloadAction<any>) => {
      state.geometry.location.lat = action.payload.lat
      state.geometry.location.lng = action.payload.lng
    },
    reset: (state) => {
      state.addressForm.saved = false;
      state.addressComponents.formatedAddress = '';
      state.addressComponents.administrativeAreaLevel3 = '';
      state.addressComponents.administrativeAreaLevel2 = '';
      state.addressComponents.administrativeAreaLevel1 = '';
      state.addressComponents.locality = '';
      state.addressComponents.postalCode = '';
      state.addressComponents.route = '';
      state.addressComponents.streetNumber = '';
      state.country.code = '';
      state.country.name = '';
      state.geometry.location.lat = '';
      state.geometry.location.lng = '';
    }
  },
});

export const {
  setAddressForm,
  setMapAddress,
  setMapCenter,
  setMapCoords,
  setMapCountryCode,
  setMapCountryName,
  reset
} = mapSlice.actions;

export default mapSlice.reducer;
