type ButtonProps = {
    name: string;
    padding: string;
    radius: string;
    textColor: string;
    backgroundColor:string
    index:string
};

function Button({ name,backgroundColor,  padding, radius, textColor,index }: ButtonProps) {
    return (
        <button className={`${backgroundColor} ${padding} ${radius} ${textColor} ${index}`}>
            {name}
        </button>
    );
}

export default Button;
