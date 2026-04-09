import styles from "./Tela01.module.css";

export default function Tela01({ status }) {
    const isOnline = status === 'online';
    const statusClass = isOnline ? styles.active : styles.inactive;

    return (
        <span className={`${styles.container} ${statusClass}`}>
            {isOnline ? 'Online' : 'Offline'}
        </span>
    )
}