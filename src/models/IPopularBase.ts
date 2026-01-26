import {IPopularTv} from "@/models/IPopularTv";

export interface IPopularBase {
    page: number,
    results: IPopularTv[],
    total_pages: number,
    total_results: number
}