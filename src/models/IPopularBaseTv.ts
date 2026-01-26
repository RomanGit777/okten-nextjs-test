import {IPopularTv} from "@/models/IPopularTv";

export interface IPopularBaseTv {
    page: number,
    results: IPopularTv[],
    total_pages: number,
    total_results: number
}