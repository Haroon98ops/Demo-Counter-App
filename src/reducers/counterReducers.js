const initialState = {
  counter: [{ value: 0 }],
};

const CounterReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "INCREMENT":
      state.counter[action.payload].value =
        state.counter[action.payload].value + 1;
      return { ...state, counter: [...state.counter] };

    case "DECREMENT":
      const variable = state.counter[action.payload].value - 1;
      if (variable < 0) {
        return state;
      }
      state.counter[action.payload].value =
        state.counter[action.payload].value - 1;
      return { ...state, counter: [...state.counter] };
    case "DELETE":
      return {
        counter: state.counter.filter(
          (item, index) => index !== action.payload
        ),
      };
    case "REFRESH":
      return {
        counter: state.counter.map((item) => ({ value: 0 })),
      };
    case "RESET":
      return {
        counter: [{ value: 0 }],
      };
    case "ADD_COUNTER":
      return {
        ...state,
        counter: [...state.counter, { value: 0 }],
        totalCount: state.count + 1,
      };

    default:
      return state;
  }
};
export default CounterReducer;
