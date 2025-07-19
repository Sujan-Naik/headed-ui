import { Switch } from '@headlessui/react'
import React from 'react'
import styles from './headed-switch.module.css'
import { VariantEnum } from '../variants'

interface HeadedSwitchProps {
  checked: boolean
  onChange: (checked: boolean) => void
  className?: string
  variant: VariantEnum
  label?: React.ReactNode
}

export const HeadedSwitch: React.FC<HeadedSwitchProps>= ({
  checked,
  onChange,
  className = '',
  variant,
  label,
}) => {
  return (
    <div className={`flex items-center ${className}`}>
      {label && (
        <span className={styles[`hui-${variant}-switch-label`]}>{label}</span>
      )}
      <Switch
        checked={checked}
        onChange={onChange}
        className={` ${styles[`hui-${variant}-switch`] }`}
      >
      </Switch>
    </div>
  )
}