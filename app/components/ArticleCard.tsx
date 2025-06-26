import React from 'react'
import Button from './Button'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const ArticleCard = () => {
  return (
    <div className='flex flex-col items-start justify-center gap-2 bg-secondary sw-[calc(100% - 4rem)] h-[calc(100% - 3rem)] m-4 p-4 rounded-md text-light'>
        <h1 className='text-xl font-bold mb-2'>Ini Judul Article</h1>
        <p className='font-montserrat'>Ini Konten</p>
        <Button href='#' icon={faArrowRight} text='Read More' />
    </div>
  )
}

export default ArticleCard