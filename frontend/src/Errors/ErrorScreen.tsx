interface ErrorScreenProps {
    message: string;
}


const ErrorScreen = (props: ErrorScreenProps) =>{
    return (
        <div>
            {props.message&&props.message}
        </div>
    )
}

export default ErrorScreen