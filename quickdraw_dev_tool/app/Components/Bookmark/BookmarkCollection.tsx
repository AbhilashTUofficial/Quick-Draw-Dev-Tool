'use client'
import { BookmarkCollectionType } from '@/app/Types/Components'
import React from 'react'


const BookmarkCollection: BookmarkCollectionType = ({ onClick, collection }) => {

    return (
        <>
            <div key={collection.id} onClick={() => onClick(collection.id)} data-theme='dark' className='group w-[120px] h-[120px] aspect-square card tileSyle m-2'>
                <figure><img className='w-80 h-80' src="next.svg" alt="Album" /></figure>
                <div className='text-center'>
                    <text>{collection.title}</text>
                </div>
                <div className='badge badge-info absolute -top-2 -right-2 text-white opacity-80 '>+{collection.count}</div>
            </div>
        </>
    )
}

export default BookmarkCollection