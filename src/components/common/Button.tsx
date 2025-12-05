interface ButtonProps{
    type: 'button' | 'submit' | 'reset'
    variant: 'primary' | 'secondary'
    label: string
}
interface ButtonStyles{
    primary: string
    secondary: string
}

function Button({ type, variant, label}: ButtonProps){
    const variantStyles: ButtonStyles = {
        primary: 'bg-blue-800 text-white',
        secondary: 'border border-blue-500 bg-blue-100 text-blue-950'
    }

    const buttonStyle = variant === 'primary' ? variantStyles.primary : variantStyles.secondary

    return(
        <button type={type} className={`px-8 py-2 font-bold text-sm ${buttonStyle} rounded-md`}>
            {label}
        </button>
    )
}

export default Button