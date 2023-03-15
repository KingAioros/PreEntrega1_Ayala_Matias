import styles from "./ItemListContainer.module.css";

const ItemListContainer = ({greeting}) => {
    return (
        <div className={styles.ItemListContainer}>
            <p>{greeting}</p>
        </div>
    )
}

export default ItemListContainer;