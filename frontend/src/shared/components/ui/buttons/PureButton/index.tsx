'use client'

import { forwardRef } from 'react'
import { Url } from 'next/dist/shared/lib/router/router'
import Link from 'next/link'
import { Tooltip } from '@mantine/core'
import styles from './styles.module.scss'

export interface Props
  extends React.HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  disabled?: boolean
  label?: string
  href?: Url
}

const PureButton = forwardRef<HTMLButtonElement | HTMLAnchorElement, Props>(
  function PureButton(
    { className = '', disabled = false, label = '', ...defaultProps },
    ref
  ) {
    const getContent = () => {
      if (defaultProps.href !== undefined) {
        return (
          <Link
            href={defaultProps.href}
            className={`${styles.pure_button} ${className}`}
            aria-disabled={disabled}
            tabIndex={disabled ? -1 : 1}
            aria-label={label}
            {...defaultProps}
            ref={ref as React.RefObject<HTMLAnchorElement>}
          />
        )
      }

      return (
        <button
          className={`${styles.pure_button} ${className}`}
          aria-label={label}
          aria-disabled={disabled}
          tabIndex={disabled ? -1 : 1}
          {...defaultProps}
          ref={ref as React.RefObject<HTMLButtonElement>}
        />
      )
    }

    const content = getContent()

    return label ? (
      <Tooltip
        className={styles.pure_button__tip}
        zIndex={999999}
        offset={16}
        label={label}
      >
        {content}
      </Tooltip>
    ) : (
      <>{content}</>
    )
  }
)

export default PureButton
