import "./input.css"

export default function Input({
  type, 
  placeholder, 
  className,
  name,
  value,
  onChange,
  error
}) {
  return (
    <>
    <input 
    className={className}
    type={type} 
    placeholder={placeholder}
    name={name}
    value={value}
    onChange={onChange}
    />
    <p className="err"> <span className="text-red-400 text-[10px]">{error}</span></p>
    </>
  )
}

