

import React from 'react'
import { FcLike } from 'react-icons/fc';
import { toast } from 'react-toastify';
const Card = (props) => {

  let course = props.course;
  let likedcourses=props.likedcourses
  let setlikedcourses=props.setlikedcourses
  function ClickHandler(){
if(likedcourses.includes(course.id)){
  //pele thi likha hua pada he 
  setlikedcourses((prev)=>prev.filter((cid!==course.id)));
  toast.warning("like removed");
}
else{

  //pele thi like nahi aa course
  //insert karana h ye course liked courses me 
  if(likedcourses.length===0){
    setlikedcourses([course.id]);
  }
  else{
    setlikedcourses((prev)=>[...prev,course.id]);
  }
  toast.success("liked successfully");
}
  }
  return (
    <div>
      <div>
        <img src={course.image.url}   alt=''></img>
      </div>
      <div>
          <button onClick={ClickHandler}>
             {/* create react icon use react doc. */}
//             {/* fclike-dilvala icon nu name */}
            <FcLike/>
          </button>
      </div>

      <div>
        <p>{course.title}</p>
        <p>{course.description}</p>
      </div>
    </div>
  )
}

export default Card