import { GET_ALL_PIZZA,SHOW_QUICK_VIEW,SENT_PIZZA_QUICKVIEW,GET_PIZZA_FOR_HOME } from "../actions/Actions";

export const reducer=(state,action)=>{

switch (action.type) {

    case GET_ALL_PIZZA :
        
        return {...state,pizzatypes:action.payload}
   case SHOW_QUICK_VIEW:
    return {...state, quickview:!state.quickview}
    case SENT_PIZZA_QUICKVIEW:
        return {...state,quickviwedata:[action.payload]}
        case GET_PIZZA_FOR_HOME:
            return {...state,pizzashome:action.payload}
    default:
        return state ;
}

}