const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return {
        ...state, 
        [action.property]: action.value
      }
    
    default:
      return state;
  }
}

export default reducer;