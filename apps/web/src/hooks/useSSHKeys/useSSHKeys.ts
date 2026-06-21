import { useQuery } from '@tanstack/react-query'
import { api } from '@/lib'
import { SSH_KEYS_QUERY_KEY } from '@/hooks/useSSHKeys'

const useSSHKeys = () => {
    return useQuery({
        queryKey: SSH_KEYS_QUERY_KEY,
        queryFn: api.getSSHKeys,
        placeholderData: (previousData) => previousData,
        refetchInterval: 30000
    })
}

export default useSSHKeys