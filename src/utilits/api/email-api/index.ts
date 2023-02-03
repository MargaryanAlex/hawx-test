import RequestService from "src/utilits/request-service";
import {ISuccessResponse} from "../../../models/response.module";

interface IEmail {
    name: string,
    email: string
}

class EmailAPI {
    static sendEmail = (data: IEmail) => {
        return RequestService.POST<IEmail, ISuccessResponse>(`email`, data);
    };


}

export default EmailAPI;
