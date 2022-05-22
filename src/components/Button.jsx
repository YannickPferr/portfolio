import React from "react"
import styles from "./Button.module.scss"

const Button = ({ text, href, color, backgroundColor }) => {
  const onMouseEnter = e => {
    e.target.style.backgroundColor = color
    e.target.style.color = backgroundColor
  }
  const onMouseLeave = e => {
    e.target.style.backgroundColor = backgroundColor
    e.target.style.color = color
  }
  return (
    <a href={href}>
      <button
        className={styles.button}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        style={{
          color: color,
          borderColor: color,
          backgroundColor: backgroundColor,
        }}
      >
        {text}
      </button>
    </a>
  )
}
export default Button
