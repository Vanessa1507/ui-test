const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return {
        ...state, 
        [action.property]: action.vaalue
      }
    
    default:
      return state;
  }
}

export default reducer;