function Button({label, click, ...otherprops}){
    return <button onClick={click} {...otherprops}>{label}</button>
}
export default Button