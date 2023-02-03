import MyStore from "../../ReduxStore/Store"
export const CountryAction=(CountryData,dispatch)=>{
//  alert(cityData);
 dispatch({
   type:"COUNTRY",
   payload:CountryData,
 });
}