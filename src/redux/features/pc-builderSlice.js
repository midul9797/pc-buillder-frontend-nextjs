import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  processor: {},
  motherboard: {},
  powerSupply: {},
  casing: {},
  monitor: {},
  ram: {},
  storage: {},
  others: [],
  required: 0,
  total: 0,
};
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProcessor: (state, action) => {
      state.processor = action.payload;

      state.total += action.payload?.price;
      state.required++;
    },
    removeProcessor: (state, action) => {
      state.processor = {};
      state.required--;
      state.total -= action.payload?.price;
    },
    addMotherboard: (state, action) => {
      state.motherboard = action.payload;

      state.total += action.payload?.price;
      state.required++;
    },
    removeMotherboard: (state, action) => {
      state.motherboard = {};
      state.required--;
      state.total -= action.payload?.price;
    },
    addPowerSupply: (state, action) => {
      state.powerSupply = action.payload;

      state.total += action.payload?.price;
      state.required++;
    },
    removePowerSupply: (state, action) => {
      state.powerSupply = {};
      state.required--;
      state.total -= action.payload?.price;
    },
    addRAM: (state, action) => {
      state.ram = action.payload;

      state.total += action.payload?.price;
      state.required++;
    },
    removeRAM: (state, action) => {
      state.ram = {};
      state.required--;
      state.total -= action.payload?.price;
    },
    addStorage: (state, action) => {
      state.storage = action.payload;

      state.total += action.payload?.price;
      state.required++;
    },
    removeStorage: (state, action) => {
      state.storage = {};
      state.required--;
      state.total -= action.payload?.price;
    },
    addCasing: (state, action) => {
      state.casing = action.payload;

      state.total += action.payload?.price;
      state.required++;
    },
    removeCasing: (state, action) => {
      state.casing = {};
      state.required--;
      state.total -= action.payload?.price;
    },
    addMonitor: (state, action) => {
      state.monitor = action.payload;

      state.total += action.payload?.price;
    },
    removeMonitor: (state, action) => {
      state.monitor = {};

      state.total -= action.payload?.price;
    },
    addOthers: (state, action) => {
      state.others.push({ ...action.payload });
      state.total += action.payload?.price;
    },
    removeOthers: (state, action) => {
      state.others = state.others.filter(
        (product) => product._id !== action.payload._id
      );
      state.total -= action.payload?.price;
    },
    removeAll: (state, action) => {
      state.processor = {};
      state.motherboard = {};
      state.powerSupply = {};
      state.monitor = {};
      state.casing = {};
      state.others = [];
      state.ram = {};
      state.storage = {};
      state.total = 0;
      state.required = 0;
    },
  },
});

export const {
  addCasing,
  addMonitor,
  addMotherboard,
  addOthers,
  addPowerSupply,
  addProcessor,
  removeCasing,
  removeMonitor,
  removeMotherboard,
  removeOthers,
  removePowerSupply,
  removeProcessor,
  removeRAM,
  removeStorage,
  addRAM,
  addStorage,
  removeAll,
} = productSlice.actions;

export default productSlice.reducer;
