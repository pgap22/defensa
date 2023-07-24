const Input = ({ label = '', placeholder = '', type = "text", name }) => {
    return (
        <div className="flex flex-col gap-2">
            <label className="text-gray-500 capitalize	">{label}</label>
            <input required placeholder={placeholder} className="p-1 px-2 focus:border-blue-500 transition-all valid:border-blue-500 rounded border border-gray-300 outline-none" type={type} {...name} />
        </div>
    )
}

export default Input