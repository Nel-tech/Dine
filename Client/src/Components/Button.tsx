type ButtonProps = {
    name: string;
    padding: string;
    radius: string;
    border:string;
    textColor: string;
    backgroundColor:string;
    className:string
    
};

function Button({ name,backgroundColor,  padding, radius, textColor, className,border, }: ButtonProps) {
    return (
        <button className={`${backgroundColor} ${padding} ${radius} ${textColor} ${className} ${border}`}>
            {name}
        </button>
    );
}

export default Button;
