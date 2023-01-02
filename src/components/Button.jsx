import React from "react"
import styles from "./Button.module.scss"

const Button = ({ text, href, color, backgroundColor, type }) => {
  const onMouseEnter = e => {
    e.target.style.color = backgroundColor
    e.target.style.backgroundColor = color
  }
  const onMouseLeave = e => {
    e.target.style.color = color
    e.target.style.borderColor = backgroundColor
    e.target.style.backgroundColor = backgroundColor
  }
  return (
    <a href={href}>
      <button
        type={type ? type : "button"}
        className={styles.button}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        style={{
          color: color,
          borderColor: backgroundColor,
          backgroundColor: backgroundColor,
        }}
      >
        {text}
      </button>
    </a>
  )
}
export default Button
