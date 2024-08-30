
import React, { useEffect, useState } from "react";
import {apiUrl,filterData} from "./data";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";

const App=()=>{

    const[courses, setCourses]=useState([] );
    const [loading, setLoading] =  useState(true);

   async function fetchData(){
    setLoading(true);
        try{
            const res = await fetch(apiUrl);
            const output=await res.json();
            // save data into a variable
            setCourses(output.data);
            // data ne copy kari lidho courses ma
            console.log("courses value updated");
            console.log(courses);
            
        }
        catch(error){
          toast.error("sorry..something went wrong");
        }
        setLoading(false);
        }



        useEffect(()=>{
            fetchData();
        },[])

    return (
        <div>
            <div>
            <Navbar/>
            </div>
            
<div>
<Filter 
filterData={filterData}
// filterdatane props no use kari declare karyu
/>
</div>

<div>
{
            loading ? (<Spinner/>) : (<Cards courses={courses} />)
          }
{/* data ne pass karyo courses na cards ma  */}
</div> 
        </div>
    )
};
export default App;