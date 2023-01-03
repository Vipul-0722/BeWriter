import axios from 'axios';
import React ,{useState} from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';



const Write = () => {

 
const [img,setImage]=useState(null)
const [category,setCategory]=useState("")
const [title,setTitle]=useState("") 

const upload=async()=>{
   try{
    const formData=new FormData();

    formData.append("file",img);
    console.log(img)
    const res=await axios.post("/upload",formData)
    console.log(res.data);
   }catch(err){
    console.log(err);
   }
}



const handleSubmit=async(e)=>{
  e.preventDefault();
   upload();
}


  // const handleChange=(e)=>{
  //   setData({...inputData,[e.target.name]:e.target.value})
  //   console.log(inputData)
  // }

   const [value, setValue] = useState('');
   console.log(value)
   
  return (
    <div className='add'>
      <div className='content'>
        <input placeholder='Title' name='title' onChange={e=>setTitle(e.target.value)}></input>
        <div className='editor'>
            <ReactQuill  className='edit' theme="snow"  value={value} onChange={setValue} />
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
           
           <input style={{display:'none'}} type='file' id='file' onChange={e=>setImage(e.target.files[0])}></input>
            <label className='file' htmlFor='file'>Upload Image</label>
                <div className='buttons'>
                    <button>Save as draft</button>
                     <button onClick={handleSubmit}>Publish</button>
                </div>

          </div>
          <div className='item'>
               <h1>Category</h1>

              <div className='cat'>
               <input type='radio' value='art' id='art' onChange={e=>setCategory(e.target.value)}></input>
                 <label htmlFor='art'>Art</label>
                </div>
               
               <div className='cat'>
                <input type='radio' value='science' id='science' onChange={e=>setCategory(e.target.value)}></input>
                <label htmlFor='science'>Science</label>

               </div>
               <div className='cat'>  <input type='radio' value='technology' id='technology' onChange={e=>setCategory(e.target.value)}></input>
                <label htmlFor='technology'>Technology</label>
               </div>
               <div className='cat'><input type='radio' value='design' id='design' onChange={e=>setCategory(e.target.value)}></input>
                <label htmlFor='design'>Design</label>  
            </div>
               <div className='cat'> <input type='radio' value='food' id='food' onChange={e=>setCategory(e.target.value)}></input>
                <label htmlFor='food'>Food</label>
            </div>
               <div className='cat'>  <input type='radio' value='cinema' id='cinema' onChange={e=>setCategory(e.target.value)}s></input>
                <label htmlFor='cinema'>cinema</label>
              </div>
             
          </div>
      </div>
    </div>
  )
}

export default Write


