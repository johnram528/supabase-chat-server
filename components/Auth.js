import { useRef, useState } from 'react'
import styles from '../styles/Auth.module.css'

const Auth = ({supabase}) => {
    const singInWithGithub = () => {
        supabase.auth.signIn({ provider: 'github'});
    }
    return <div className={styles.container}>
        <h1 className={styles.title}>Supabase Chat</h1>
        <button className={styles.github} onClick={singInWithGithub}>
            Log in with GitHub
        </button>
    </div>
}

export default Auth