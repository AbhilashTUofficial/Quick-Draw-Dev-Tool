'use client'

import React, { useEffect } from 'react'

type BookmarkCollectionModalProp = {
    (arg0: ({ key: string; id: string; onClose: (id: string|null) => void })): React.JSX.Element;
}
const BookmarkCollectionModal: BookmarkCollectionModalProp = ({ key, id, onClose }) => {

    return (
        <dialog id="my_modal_3" className="modal">
                        <div className="modal-box">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                            <h3 className="font-bold text-lg">Hello!</h3>
                            <p className="py-4">Press ESC key or click on ✕ button to close</p>
                        </div>
                    </dialog>
    )
}

export default BookmarkCollectionModal