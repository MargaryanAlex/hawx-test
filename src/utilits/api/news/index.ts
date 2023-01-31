import RequestService from "src/utilits/request-service";
import {INewsModel} from "src/models/news.model";
import {ISuccessResponse} from "src/models/response.module";

class NewsAPI {
    static addNews = (data: INewsModel) => {
        return RequestService.POST<INewsModel, INewsModel>(`news`, data);
    };

    static getNews = () => {
        return RequestService.GET<null, INewsModel[]>('news')
    }
    static updateNews = (id: string, data: INewsModel) => {
        return RequestService.PATCH<INewsModel, ISuccessResponse>('news/' + id, data)
    }

    static getNewsById = (id: string) => {
        return RequestService.GET<null, INewsModel>('news/'+id)
    }
}

export default NewsAPI;
