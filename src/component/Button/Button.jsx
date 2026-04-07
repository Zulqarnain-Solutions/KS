import "./button.css"

export default function Button({type, text, className, disabled}) {
  return (
    <button 
    type={type}
    className={className}
    disabled={disabled}
    >
      {text}
    </button>
  )
}


// , isSubmitting
// { isSubmitting? "Logging in..." :  text }