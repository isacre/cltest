export declare type PaginatedResponse<T> = {
    count: number;
    previous: string | null;
    next: string | null;
    results: T[];
}

export declare type PostType = {
    id: number;
    username: string;
    created_datetime: string;
    title: string;
    content: string;
    author_ip: string;
}

