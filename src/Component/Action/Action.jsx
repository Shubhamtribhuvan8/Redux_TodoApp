import React from 'react' 
import MyStore from '../../ReduxStore/Store';  
export const MyAction =(data)=>{
    //   alert(data);
    MyStore.dispatch({
   type:"NAME",
   payload:data,
    });
}; 