import dnsResolverDarwin from '@/main/services/dnsResolverDarwin'
import dnsResolverWindows from '@/main/services/dnsResolverWindows'

const dnsResolver =
    process.platform === 'win32' ? dnsResolverWindows : dnsResolverDarwin

export default dnsResolver