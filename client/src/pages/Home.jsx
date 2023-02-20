import React,{useState,useEffect} from 'react'
import { Loader, Card, FormField } from '../components'



const Home = () => {
    const [loading, setLoading] = useState(false)
    const [allposts, setAllPosts] = useState(null)

  return (
    <section className='max-w-7xl mx-auto'>
        <div className=''>
            <h1 className='font-extrabold text-[32px]'>
                The Community Showcase
            </h1>
            <p className='mt-2 text-[#666e75] text-[14px] max-w-[500px] '>
                Browse Through a collection of imaginationative AI image generation using ZEUS DALLE
            </p>
        </div>
    </section>
  )
}

export default Home