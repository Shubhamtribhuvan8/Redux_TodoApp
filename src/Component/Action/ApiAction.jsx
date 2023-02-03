import MyStore from "../../ReduxStore/Store"
export const ApiAction=(ApiData,dispatch)=>{
//  alert(cityData);
 dispatch({
   type:"API",
   payload:ApiData,
 });
}