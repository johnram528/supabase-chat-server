import '../styles/globals.css'
import useSupabase from '../utils/useSupabase'

function MyApp({ Component, pageProps }) {
  const { session, supabase, currentUser } = useSupabase()
  return <Component currentUser={currentUser} session={session} supabase={supabase} {...pageProps} />
}

export default MyApp
