const InputStyless = ({ label = '', placeholder = '', type = "text", name }) => {
    return (
        <div className="inputDiv">
            <label className="inputDiv-label">{label}</label>
            <input required placeholder={placeholder} className="inputDiv-input" type={type} {...name} />
        </div>
    )
}

export default InputStyless