type ButtonProps = {
    name: string;
    padding: string;
    radius: string;
    textColor: string;
    backgroundColor:string
    
};

function Button({ name,backgroundColor,  padding, radius, textColor }: ButtonProps) {
    return (
        <button className={`${backgroundColor} ${padding} ${radius} ${textColor}`}>
            {name}
        </button>
    );
}

export default Button;
