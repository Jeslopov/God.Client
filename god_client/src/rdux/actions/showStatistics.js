import { SHOW_STATISTICS } from "./actionTypes";
import { AxiosService } from "../../services";

export const showStatistics = (page, data) => {
    return {
        type: SHOW_STATISTICS,
        payload: {
            page,
            data
        }
    }
}

export const showStatisticsAsync = (page) => {
    return dispatch => {
        AxiosService.getStatistics((data) => dispatch(showStatistics(page, data)));
    }
}