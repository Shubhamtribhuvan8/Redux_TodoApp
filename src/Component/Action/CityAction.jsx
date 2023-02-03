
import MyStore from "../../ReduxStore/Store"
export const CityAction=(cityData,dispatch)=>{
//  alert(cityData);
 dispatch({
   type:"CITY",
   payload:cityData,
 });
}