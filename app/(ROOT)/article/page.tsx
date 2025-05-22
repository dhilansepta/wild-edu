import ArticleCard from '@/app/components/ArticleCard'
import React from 'react'

const Article = () => {
    return (
        <>
            <section className='primary_container'>
                <h1 className='heading !text-dark'>Article</h1>
            </section>
            <div className='grid grid-cols-3 max-w-screen'>
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
            </div>
        </>
    )
}

export default Article