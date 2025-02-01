interface AlertProps { 
    type: "warning" | "Information";
    heading?: string;
    children: React.ReactNode;

}
export function Alert(props: AlertProps) {
    return (
        <div>
            <div>
                <span role="img" aria-label={props.type === "warning" ? "warning" : "Information"}> 
                    {props.type === "warning" ? "⚠️" : "ℹ️"}
                </span>
                <span>{props.heading}</span>
            </div>
            <div>{props.children}</div>
        </div>
    )
}