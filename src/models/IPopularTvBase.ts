import {IPopularTv} from "@/models/IPopularTv";

export interface IPopularTvBase {
    page: number,
    results: IPopularTv[],
    total_pages: number,
    total_results: number
}