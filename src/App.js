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
    const [category, setCategory] = useState(filterData[0].title);

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
        <div className="min-h-screen flex flex-col bg-bgDark2">
            <div>
            <Navbar/>
            </div>
            
<div  className="bg-bgDark2">
    <div>
<Filter 
filterData={filterData}
// filterdatane props no use kari declare karyu
category={category}
setCategory={setCategory}
/>
</div>

<div className="w-11/12 max-w-[1200px] 
        mx-auto flex flex-wrap justify-center items-center min-h-[50vh]" >
{
            loading ? (<Spinner/>) : (<Cards courses={courses}  category={category}/>)
          }
{/* data ne pass karyo courses na cards ma  */}
</div> 
</div>
        </div>
    );
};
export default App;