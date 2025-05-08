'use client'

import Button from '@/shared/components/ui/buttons/Button'
import AccentButton from '@/shared/components/ui/buttons/AccentButton'
import styles from './styles.module.scss'

export default function HeroBlock() {
  return (
    <section className={styles.hero_section}>
      <h1 className={styles.hero_section__title}>WorkQuorum</h1>
      <h4 className={styles.hero_section__subtitle}>
        Фриланс маркет для эффективного роста и успеха
      </h4>
      <div className={styles.hero_section__buttons}>
        <AccentButton href='/login'>Присоединиться</AccentButton>
        <Button href='/login'>Уже участник</Button>
      </div>
    </section>
  )
}
