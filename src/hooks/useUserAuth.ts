import { useEffect } from 'react'
import type { FeedModalStates } from '../pages/feed'


export default function useUserAuth({ setModalState }: { setModalState: (modalState: FeedModalStates) => void }) {
    const username = localStorage.getItem('username');

    function handlePreventingUnauthorizedAccess() {
        if (!username) {
            setModalState('register')
        }
    }
    useEffect(() => {
        handlePreventingUnauthorizedAccess();
    }, [username])

    return { username }
}
