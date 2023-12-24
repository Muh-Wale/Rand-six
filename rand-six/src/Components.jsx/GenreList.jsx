import React, { useEffect, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'

const GenreList = ({genereId, selectedGenresName}) => {

    const [genreList, SetGenreList] = useState([])
    const [activeIndex, setActiveIndex]=useState(0)
    useEffect(()=>{
        getGenreList()
    },[])
    const getGenreList=()=>{
        GlobalApi.getGenreList.then((resp)=>{
            console.log(resp.data.results)
            SetGenreList(resp.data.results)
        })
    }
    return (
        <div className='px-6'>
            <h2 className="font-bold text-[30px] dark:text-white">Genre</h2>
            {
                genreList.map((item,index)=>(
                    <div 
                        onClick={()=>{setActiveIndex(index);genereId(item.id);selectedGenresName(item.name)}}
                        className={`flex gap-2 items-center mb-2 cursor-pointer hover:bg-gray-300 p-2 rounded-lg hover:dark:bg-gray-600 group ${activeIndex==index?"bg-gray-300 dark:bg-gray-600":null}`}
                    >
                        <img 
                            src={item.image_background} alt=""
                            className={`w-[40px] h-[40px] object-cover rounded-lg group-hover:scale-105 transition-all ease-out duration-300 ${activeIndex==index?"scale-105":null}`}
                        />
                        <h3 className={`dark:text-white text-[18px] group-hover:font-bold transition-all ease-out duration-300 ${activeIndex==index?"font-bold":null}`}>{item.name}</h3>
                    </div>
                ))
            }
        </div>
    )
}

export default GenreList
