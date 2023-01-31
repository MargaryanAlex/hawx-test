export interface INewsModel {
    _id: string;
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
    order: number
}