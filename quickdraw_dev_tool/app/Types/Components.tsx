//* Components

import { bookmarkCollectionsType, bookmarkType } from "./Variables";

export interface BookmarkCollectionsType {
    (arg0: { bookmarkCollections: bookmarkCollectionsType[] }): React.JSX.Element;
}

export interface BookmarkCollectionType {
    (arg0: {
        onClick: any;
        collection: {
            id: number;
            count: number;
            title: string;
        }
    }): React.JSX.Element;
}

export interface BookmarkCollectionModalType{
    (arg0:{
        closeModal:any;
        bookmarks:bookmarkType[];
    }):React.JSX.Element;
}