import styles from "./HelloWorld.module.css";

function HelloWorld({message}) {
    return (
        <div>
            <p>Olá, mundo direto do React!</p>
            <p className={styles.text}>{message}</p>
        </div>
    );
}

export default HelloWorld;