import React from 'react'
import {FcLike,FcLikePlaceholder} from "react-icons/fc"
import { toast } from 'react-toastify';
const Card = (props) => {

  let course = props.course;

  let likedcourses = props.likedcourses;
  let setlikedcourses = props.setlikedcourses;

  function ClickHandler() {
    if (likedcourses.includes(course.id)) {
      //pele thi likha hua pada he 
      setlikedcourses((prev) => prev.filter((cid)=> (cid !== course.id)));
      toast.warning("like removed");
    }
    else {

      //pele thi like nahi aa course
      //insert karana h ye course liked courses me 
      if (likedcourses.length === 0) {
        setlikedcourses([course.id]);
      }
      else {
        setlikedcourses((prev) => [...prev, course.id]);
      }
      toast.success("liked successfully");
    }
  }
  return (
    <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden'>
      <div className='relative'>
        <img src={course.image.url} alt=''></img>

        <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px]
            grid place-items-center'>
          <button onClick={ClickHandler}>
            {/* create react icon use react doc. */}
//             {/* fclike-dilvala icon nu name */}
            {
              likedcourses.includes(course.id) ?
                (<FcLike fontSize="1.75rem" />)
                : (<FcLikePlaceholder fontSize="1.75rem" />)
            }
          </button>
        </div>
      </div>
      <div className='p-4'>
        <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
        <p className='mt-2 text-white'>
          {
            course.description.length > 100 ?
              (course.description.substr(0, 100)) + "..." :
              (course.description)
          }
        </p>
      </div>
    </div>
  )
}

export default Card