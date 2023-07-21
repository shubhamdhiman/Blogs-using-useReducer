export function blogsReducer(state,action){
    switch(action.type){
      case "add":{
        return [...state,action.blog]
      }
      case "remove":{
        return state.filter((item,index)=>
          index !== action.indx)
      }
      default:
        return state;
    }
  }
