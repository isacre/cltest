import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import type { CreatePostFormProps } from '../components/createPostForm';
import toast from 'react-hot-toast';
import type { PaginatedResponse, PostType } from '../types';

export interface EditPostFormProps {
    id: number;
    title: string;
    content: string;
}

export interface DeletePostFormProps {
    id: number;
}

export default function usePosts() {
    const username = localStorage.getItem('username');
    const url = import.meta.env.VITE_API_URL;
    const queryClient = useQueryClient();
    const { data, isLoading, error } = useQuery<PaginatedResponse<PostType>>({
        queryKey: ['posts'],
        queryFn: () => fetch(url).then(res => res.json()),
        staleTime: Infinity,
    })

    const { mutate: createPost, isPending: isCreatingPostPending } = useMutation({
        mutationFn: (data: CreatePostFormProps) => fetch(url, {
            method: 'POST',
            body: JSON.stringify({ ...data, created_datetime: new Date().toISOString(), author_ip: window.location.hostname, username: username }),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(res => res.json()),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['posts'] });
            toast.success('Post created successfully');
        },
        onError: () => {
            toast.error('Failed to create post');
        },
    });

    const { mutate: editPost, isPending: isEditingPostPending } = useMutation({
        mutationFn: (data: EditPostFormProps) => fetch(`${url}${data.id}/`, {
            method: 'PATCH',
            body: JSON.stringify({ title: data.title, content: data.content }),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(res => res.json()),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['posts'] });
            toast.success('Post updated successfully');
        },
        onError: () => {
            toast.error('Failed to update post');
        },
    });


    const { mutate: deletePost, isPending: isDeletingPostPending } = useMutation({
        mutationFn: (id: number) => fetch(`${url}${id}/`, {
            method: 'DELETE',
        }).then(res => res.json()),
        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: ['posts'] });
        },
    });

    return { data, createPost, deletePost, editPost, isLoading, error, isCreatingPostPending, isEditingPostPending, isDeletingPostPending };
}
