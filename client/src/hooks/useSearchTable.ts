import { useState, useMemo } from 'react';
import { useQuery, type QueryKey } from '@tanstack/react-query';
type FilterFn<TData> = (
    data: TData[], 
    query: string, 
) => TData[];

interface UseSearchTableOptions<TData> {
    queryKey: QueryKey;                        
    queryFn: () => Promise<TData[]>;           
    filterFn: FilterFn<TData>;                 
    itemsPerPage?: number;                     
}

export const useSearchTable = <TData>({queryKey, queryFn, filterFn, itemsPerPage = 8, }: UseSearchTableOptions<TData>) => {

    const { data: allData, isLoading, isError, error } = useQuery<TData[], Error>({ 
        queryKey: queryKey,
        queryFn: queryFn,
    });

    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    const filteredData = useMemo(() => {
        return filterFn(allData || [], searchQuery);
    }, [allData, searchQuery, filterFn]);

    const paginatedData = useMemo(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return filteredData.slice(startIndex, endIndex);
    }, [filteredData, currentPage, itemsPerPage]);

    const totalPages = useMemo(() => {
        return Math.ceil(filteredData.length / itemsPerPage);
    }, [filteredData, itemsPerPage]);

    return {
        isLoading,
        isError,
        error,

        paginatedData, 

        searchQuery,
        setSearchQuery,
        
        currentPage,
        setCurrentPage,
        totalPages,
        totalFilteredItems: filteredData.length
    };
}