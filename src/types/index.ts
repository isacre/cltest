export declare type PaginatedResponse<T> = {
    count: number;
    previous: string | null;
    next: string | null;
    result: T[];
}

