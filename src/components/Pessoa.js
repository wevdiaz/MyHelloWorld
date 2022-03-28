import styles from "./Pessoa.module.css";

function Pessoa ({name, photo, age, city, occupation}) {
    return (
        <div className={styles.container}>
            <img src={photo} alt={name} />
            <h1>Nome: {name}</h1>
            <p>Idade: <strong>{age}</strong></p>
            <p>Cidade: <strong>{city}</strong></p>
            <p>Profissão: <strong>{occupation}</strong></p>
        </div>
    );
}

export default Pessoa;