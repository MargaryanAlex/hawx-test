export interface IAddNewsModel {

    link: string;
    newsTitle: {
        "eng": string;
        "rus": string;
    };
    newsContent: {
        "eng": string;
        "rus": string;
    };
    smallThumbnail: string;
    fullScreenThumbnail: string;
    order: number,
}

export interface INewsModel {
    link: string;
    newsTitle: {
        "eng": string;
        "rus": string;
    };
    newsContent: {
        "eng": string;
        "rus": string;
    };
    smallThumbnail: string;
    fullScreenThumbnail: string;
    order: number,
    _id: string,

    "createdAt": string,
    "updatedAt": string,

}