'use client'

import React, { useEffect } from 'react'

type BookmarkCollectionModalProp={
    (arg0:({key:string;id:string;onClose:any})):React.JSX.Element;
}
const BookmarkCollectionModal:BookmarkCollectionModalProp = ({key,id, onClose}) => {
    useEffect(()=>{
        document.getElementById('modal')?.setAttribute('display','visible');
    },[])
    return (
        <div id={'modal'} className=' w-full bg-gray-700/50 absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center '>
        <dialog id="bookmarkModal" className="">

            <div className="modal-box w-[400px]">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                </form>
                <h3 className="font-bold text-lg">Hello!</h3>
                <p className="py-4">Press ESC key or click on ✕ button to closefdfafaf</p>
            </div>
        </dialog>
        </div>
    )
}

export default BookmarkCollectionModal