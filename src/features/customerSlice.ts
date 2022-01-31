import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CustomerState {
  value: Customer[];
}

interface AddFoodToCustomerPayload {
  food: string;
  id: string;
}

interface Customer {
  id: string;
  name: string;
  food: string[];
}

const initialState: CustomerState = {
  value: [],
};

export const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    addCustomer: (state, action: PayloadAction<Customer>) => {
      state.value.push(action.payload);
    },
    addFoodToCustomer: (
      state,
      action: PayloadAction<AddFoodToCustomerPayload>
    ) => {
      const customer = state.value.find(
        (customer) => customer.id === action.payload.id
      );
      customer?.food.push(action.payload.food);

      /*       // author's method:
      state.value.forEach((customer) => {
        if (customer.id === action.payload.id) {
          customer.food.push(action.payload.food);
        }
      }); */
    },
    deleteCustomer: (state, action: PayloadAction<string>) => {
      const index = state.value.findIndex(
        (customer) => customer.id === action.payload
      );
      if (index > -1) {
        state.value.splice(index, 1);
      }
    },
  },
});

export const {
  addCustomer,
  addFoodToCustomer,
  deleteCustomer,
} = customerSlice.actions;

export default customerSlice.reducer;
