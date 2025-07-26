import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addTransaction,
  deleteTransaction,
  editTransaction,
  getTransactions,
} from "./transactionsApi";

// declaring InitialState

const initialState = {
  transactions: [],
  isLoading: false,
  isError: false,
  error: "",
};

// declaring redux async Thunk

export const fetchTransactions = createAsyncThunk(
  "transaction/fetchTransactions",
  async () => {
    const transactions = await getTransactions();
    return transactions;
  }
);

export const createTransactions = createAsyncThunk(
  "transaction/createTransactions",
  async (data) => {
    const transaction = await addTransaction(data);
    return transaction;
  }
);

export const updateTransactions = createAsyncThunk(
  "transaction/updateTransactions",
  async ({ id, data }) => {
    const transaction = await editTransaction(id, data);
    return transaction;
  }
);

export const removeTransactions = createAsyncThunk(
  "transaction/removeTransactions",
  async (id) => {
    const transaction = await deleteTransaction(id);
    return transaction;
  }
);

// declaring redux Slice

const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  extraReducers: (builder) => {
    builder
    // fetchTransactions

      .addCase(fetchTransactions.pending, (state) => {
       state.isError = false;
       state.isLoading = true;
      })
      .addCase(fetchTransactions.fulfilled, (state, action) => {
       state.isError = false;
       state.isLoading = false;
       state.transactions = action.payload;
      })
      .addCase(fetchTransactions.rejected, (state, action) => {
       state.isError = false;
       state.isLoading = true;
       state.error = action.error.message
       state.transactions = [];
      })
    //   createTransactions

      .addCase(createTransactions.pending, (state) => {
       state.isError = false;
       state.isLoading = true;
      })
      .addCase(createTransactions.fulfilled, (state, action) => {
       state.isError = false;
       state.isLoading = false;
       state.transactions.push(action.payload);
      })
      .addCase(createTransactions.rejected, (state, action) => {
       state.isError = false;
       state.isLoading = true;
       state.error = action.error.message
        
      })
    //   update Transactions

      .addCase(updateTransactions.pending, (state) => {
       state.isError = false;
       state.isLoading = true;
      })
      .addCase(updateTransactions.fulfilled, (state, action) => {
       state.isError = false;
       state.isLoading = false;
       const indexToUpdate = state.transactions.findIndex(t => t.id === action.payload.id)
       state.transactions[indexToUpdate] = action.payload
      })
      .addCase(updateTransactions.rejected, (state, action) => {
       state.isError = false;
       state.isLoading = true;
       state.error = action.error.message
        
      })
    //   delete Transactions

    .addCase(removeTransactions.pending, (state) => {
       state.isError = false;
       state.isLoading = true;
      })
      .addCase(removeTransactions.fulfilled, (state, action) => {
       state.isError = false;
       state.isLoading = false;
       
       state.transactions = state.transactions.filter(t => t.id !== action.payload)
      })
      .addCase(removeTransactions.rejected, (state, action) => {
       state.isError = false;
       state.isLoading = true;
       state.error = action.error.message
        
      })
  },
});

export default transactionsSlice.reducer