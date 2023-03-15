import styles from './logo.module.css';

const LogoBanner = ({imagen}) => {
  return (
    <div className={styles.logo}>
      <a href="#">
        <img src={imagen} height="250"/>
      </a>
  </div>
  )
}

export default LogoBanner