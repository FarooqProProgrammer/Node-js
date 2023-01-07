import React from 'react'
import { useNavigate } from 'react-router-dom'
function Blog() {
  const navigate = useNavigate();

  return (
  <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div className="bar w-full h-[80px] flex justify-around items-center" >
      <h1 class="text-3xl font-medium title-font text-gray-900 mb-12 text-center">Current Courses</h1>
      <button  class="text-3xl font-medium title-font text-gray-900 mb-12 text-center border-2 border-[#f1c40f] py-3 pb-2 pt-2 pl-3 pr-3 hover:text-[#f1c40f] hover:bg-[#000] ">Add New Course</button>
    </div>
    <div class="flex flex-wrap -m-4">
      <div class="p-4 md:w-1/2 w-full" onClick={()=> navigate("/Course/PYTHON")}>
        <div class="h-full bg-gray-100 p-8 rounded">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
          </svg>
          <p class="leading-relaxed mb-6">Python is a high-level, interpreted programming language that is widely used for web development, artificial intelligence, data analysis, and scientific computing. It is an easy-to-learn language that is ideal for beginners, and it is known for its simplicity, readability, and flexibility. Python has a large standard library that supports many common programming tasks, such as connecting to web servers, reading and writing files, and using data structures like lists and dictionaries. </p>
          <a class="inline-flex items-center">
            <img alt="testimonial" src="data:image/png;base64,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" class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
            <span class="flex-grow flex flex-col pl-4">
              <span class="title-font font-medium text-gray-900">Python</span>
        
            </span>
          </a>
        </div>
      </div>
      <div class="p-4 md:w-1/2 w-full" onClick={()=> navigate("/Course/MS_OFFICE")}>
        <div class="h-full bg-gray-100 p-8 rounded">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
          </svg>
          <p class="leading-relaxed mb-6"> Microsoft Office is a suite of productivity software that includes applications, servers, and services for creating, editing, and managing documents, presentations, and spreadsheets.</p>
          <a class="inline-flex items-center">
            <img alt="testimonial" src="data:image/png;base64,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" class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
            <span class="flex-grow flex flex-col pl-4">
              <span class="title-font font-medium text-gray-900">MS OFFICE</span>
            </span>
          </a>
        </div>
      </div>
      <div class="p-4 md:w-1/2 w-full" onClick={()=> navigate("/Course/WEB")}>
        <div class="h-full bg-gray-100 p-8 rounded">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
          </svg>
          <p class="leading-relaxed mb-6">Web development refers to the process of creating and maintaining websites. It involves a combination of tasks such as designing the website's layout and appearance, implementing functionality, and ensuring that the site is easy to use and performs well..</p>
          <a class="inline-flex items-center">
            <img alt="testimonial" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS66t95IlG1H99oLVRsEEBEPYIPIi0Thdj27A&usqp=CAU" class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
            <span class="flex-grow flex flex-col pl-4">
              <span class="title-font font-medium text-gray-900">Web Development</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Blog