import RequestService from "src/utilits/request-service";
import {ISuccessResponse} from "../../../models/response.module";
import {IData} from "../../../pages/booster";

interface IEmail {
    name: string,
    email: string
}

class EmailAPI {
    static sendEmail = (data: IData & IEmail) => {
        return RequestService.POST<IEmail, ISuccessResponse>(`email`, data);
    };


}

export default EmailAPI;
