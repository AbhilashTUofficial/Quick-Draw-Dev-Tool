'use client'
import React from 'react'

type BookmarkColletionProps = {
    (arg0: { onClick: any; id: string }): React.JSX.Element;
}

const BookmarkCollection: BookmarkColletionProps = ({ onClick, id }) => {

    return (
        <>
            <div key={id} onClick={() => onClick(id)} data-theme='dark' className=' w-[120px] aspect-square card componentStyle m-2'>
                <figure><img className='w-80 h-80' src="next.svg" alt="Album" /></figure>
                <div className='text-center'>
                    <text>Collection</text>
                </div>
            </div>
        </>
    )
}

export default BookmarkCollection