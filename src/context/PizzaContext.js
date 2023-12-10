import { useContext,createContext,useReducer } from "react";
import { reducer } from "../reducers/Reducer";

const PizzaContext=createContext();

const initialState={

    pizzatypes:[],
    quickview:false,
    quickviwedata:[],
    pizzashome:[]

}


const PizzaProvider=({children})=>{
const[state,dispatch]=useReducer(reducer,initialState);
return <PizzaContext.Provider value={{state,dispatch}}>
{children}
</PizzaContext.Provider>
}

const usePizzaContext=()=>{
    const context=useContext(PizzaContext);
    return context;
}

export {usePizzaContext,PizzaProvider}

