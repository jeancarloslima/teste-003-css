import styles from "./Tela02.module.css";

export default function Tela02({ type }) {
    const isSucess = type === "sucess";
    const typeClass = isSucess ? styles.sucess : styles.error;

    return (
        <span className={`${styles.container} ${typeClass}`}>
            {isSucess ? "Sucesso!" : "Erro!"}
        </span>
    )
}