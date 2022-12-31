import React ,{useState} from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';



const Write = () => {


   const [value, setValue] = useState('');
   console.log(value)
   
  return (
    <div className='add'>
      <div className='content'>
        <input placeholder='Title'></input>
        <div className='editor'>
            <ReactQuill className='edit' theme="snow"  value={value} onChange={setValue} />
        </div>
      </div>
      <div className='menu'>
          <div className='item'>
            <h1>Publish</h1>
            <span>
               <b>Status:</b> Draft
            </span>
             
              <span>
               <b>Visibility:</b> Public
            </span>
           
           <input style={{display:'none'}} type='file' id='file'></input>
            <label className='file' htmlFor='file'>Upload Image</label>
                <div className='buttons'>
                    <button>Save as draft</button>
                     <button>Update</button>
                </div>

          </div>
          <div className='item'>
               <h1>Category</h1>

               <div className='cat'>
               <input type='radio' value='art' id='art'></input>
                 <label htmlFor='art'>Art</label>
                </div>
               
               <div className='cat'>
                <input type='radio' value='science' id='science'></input>
                <label htmlFor='science'>Science</label>

               </div>
               <div className='cat'>  <input type='radio' value='technology' id='technology'></input>
                <label htmlFor='technology'>Technology</label>
               </div>
               <div className='cat'><input type='radio' value='design' id='design'></input>
                <label htmlFor='design'>Design</label>  
            </div>
               <div className='cat'> <input type='radio' value='food' id='food'></input>
                <label htmlFor='food'>Food</label>
            </div>
               <div className='cat'>  <input type='radio' value='cinema' id='cinema'></input>
                <label htmlFor='cinema'>cinema</label>
              </div>
             
          </div>
      </div>
    </div>
  )
}

export default Write


