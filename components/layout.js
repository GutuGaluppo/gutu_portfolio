import styles from './layout.module.scss'

export default function Layout({ children }) {
  return <div className={styles.main}>{children}</div>
}