import React from 'react'
import Card from './Card';
import { useState } from 'react';

const Cards = (props) => {

    let courses=props.courses;

    const [likedcourses,setlikedcourses]=useState([]); 
    
    let category = props.category;

    //returns you a list of all courses received from the api response 
   function getcourses() {
    if(category === "All") {
    let allcourses = [];
        Object.values(courses).forEach(array=>{
            array.forEach(courseData =>{
                allcourses.push(courseData);
            });
    } );
    return allcourses;
    }
    else {
        //main sirf specific categiry ka data array krunga  
        return courses[category];      
    }
}
       
    
    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4" >
            {
                //{/* render--sare data ne map kari and har aek data mate card banai devanu  */ }
          getcourses().map((course) => (
                <Card key={course.id} course={course} likedcourses={likedcourses} setlikedcourses={setlikedcourses}/>
                // here card ne data mokalo har aek card ne aek course no data male
         ))
        }
        </div>
    )
}

export default Cards;
// aek task perform thaya pachi perform karava useeffect so here cards ni detail leva api call karavani and use useeffect

