
export const ADD_USER = 'ADD_USER'
export const REQUEST_EXPENSE = 'REQUEST_EXPENSE';
export const RESPONSE_EXPENSE_SUCCESS = 'RESPONSE_EXPENSE_SUCCESS';
export const RESPONSE_EXPENSE_ERROR = 'RESPONSE_EXPENSE_ERROR';

export const addUser = (email) => ({
    type: ADD_USER,
    email,
  });

  export const requestExpense = () => ({
    type: REQUEST_EXPENSE,
  });
  
  export const responseExpenseSuccess = (wallet) => ({
    type: RESPONSE_EXPENSE_SUCCESS,
    wallet,
  });

  export const responseExpenseError = (error) => ({
    type: RESPONSE_EXPENSE_ERROR,
    error,
  });