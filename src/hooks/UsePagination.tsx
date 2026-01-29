// 'use client';
// import {useSearchParams} from "next/navigation";
// import {useRouter} from "next/router";
//
// export function usePagination<T> (items: T[] = [], itemsPerPage: number = 6) {
//
//
//     const currentPage = Number(searchParams.get("page") || 1);
//
//     const totalPages = Math.ceil(items.length / itemsPerPage);
//     const firstIndex = (currentPage - 1) * itemsPerPage;
//     const currentItems = items.slice(firstIndex, currentPage * itemsPerPage);
//
//
//
//     return {currentPage, totalPages, goToPage, currentItems};
// }
