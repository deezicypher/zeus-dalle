import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { preview } from '../assets'
import { FormField, Loader } from '../components'
import { getRandomPrompt } from '../utils'


const CreatePost = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name:"", 
    prompt:"",
    photo:"",

  })

  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);
  

  return (
    <section className='max-w-7xl mx-auto'>
         <div>
            <h1 className='font-extrabold text-[32px]'>
                The Community Showcase
            </h1>
            <p className='mt-2 text-[#666e75] text-[14px] max-w-[500px] '>
                Browse Through a collection of imaginationative AI image generation using DALL-E AI
            </p>
        </div>
    </section>
  )
}

export default CreatePost