const Button = ({ children, color = '' }) => {
    return (
      <button style={{
        backgroundColor: color
      }} className="p-2 rounded transition-all hover:opacity-80 text-white bg-indigo-700 font-bold">{children}</button>
    )
  }
export default Button