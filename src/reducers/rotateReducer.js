const rotateReducer = (state, action) => {
  switch (action.type) {
    case "rotate":
      return {
        ...state, rotating: action.payload
      }
    case "toggle":
      return {
       ...state, toggle: !state.toggle
      }
    case "disabletoggle":
        return {
         ...state, toggle: false
        }
    case "scrollmenuactive":
      return {
        ...state, scrollmenu: action.payload
       }
    case "scrollmenudisable":
        return {
          ...state, scrollmenu: action.payload
         }
    default:
      return state;
  }
};
export default rotateReducer;