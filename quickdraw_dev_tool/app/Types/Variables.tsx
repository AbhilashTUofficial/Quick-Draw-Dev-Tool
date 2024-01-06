//* Variables
export interface bookmarkType {
    bookmarkId: number;
    title: string;
    url: string;
    imgUrl: string;
}

export interface bookmarkCollectionsType {
    bookmarksCollectionId: number;
    bookmarksImgUrl: string;
    title: string;
    bookmarks: bookmarkType[]
}