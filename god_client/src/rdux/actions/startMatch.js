
import { START_MATCH } from "./actions";
import { AxiosService } from "../../services";

export const startMatch = (p1Name, p2Name) => {
    AxiosService.createUser(p1Name);
    AxiosService.createUser(p2Name);
    return {
        type: START_MATCH, 
        payload: {
            p1Name,
            p2Name
        }
    }
}