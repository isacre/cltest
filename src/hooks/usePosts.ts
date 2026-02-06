import { useMutation, useQuery } from '@tanstack/react-query'
import type { CreatePostFormProps } from '../components/createPostForm';

export default function usePosts() {
    const url = import.meta.env.VITE_API_URL;
    const { data, isLoading, error } = useQuery({
        queryKey: ['posts'],
        queryFn: () => fetch(url).then(res => res.json()),
    })

    const { mutate: createPost } = useMutation({
        mutationFn: (data: CreatePostFormProps) => fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(res => res.json()),

    })

    return { data, createPost, isLoading, error }
}
