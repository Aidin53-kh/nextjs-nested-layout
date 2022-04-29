import AppLayout from '../components/layouts/AppLayout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
    const getLayout = Component.getLayout || (page => page)
    
    return (
        <AppLayout>
            {getLayout(<Component {...pageProps} />)}
        </AppLayout>
    )
}

export default MyApp
