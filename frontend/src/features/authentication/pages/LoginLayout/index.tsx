'use client'

import styles from './styles.module.scss'

interface Props {
  title?: string | null,
  children?: React.ReactNode,
}

export default function LoginLayout({ title=null, children=null }: Props) {
  return (
    <main className={styles.main}>
      <section className={styles.main__section}>
        {title && <h1 className={styles.main__title}>{title}</h1>}
        {children}
      </section>
    </main>
  )
}
