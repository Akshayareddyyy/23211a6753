import { useState,useEffect } from "react";
import { fetchNotifications } from "../api/notifications";
import { Log } from "../../../logging-middleware/logger";

export function useNotifications(){

const [notifications,setNotifications]=useState([]);
const [loading,setLoading]=useState(true);
const [error,setError]=useState(null);


useEffect(()=>{


Log(
"debug",
"hook",
"useNotifications hook executed"
);


const load=async()=>{

try{

const data=await fetchNotifications();

setNotifications(data.notifications || []);

setError(null);


}
catch(err){

setError(err.message);

}
finally{

setLoading(false);

}


};


load();

},[]);



const totalPages=1;


return{

notifications,
loading,
error,
totalPages


};


}