interface AlertProps { 
    type: "warning" | "Information";
    heading?: string;
    children: React.ReactNode;

}


// export function Alert(props: AlertProps) {
//     return (
//         <div>
//             <div>
//                 <span role="img" aria-label={props.type === "warning" ? "warning" : "Information"}> 
//                     {props.type === "warning" ? "⚠️" : "ℹ️"}
//                 </span>
//                 <span>{props.heading}</span>
//             </div>
//             <div>{props.children}</div>
//         </div>
//     )
// }


export function Alert({ type , heading, children}: AlertProps) {
    return(
        <div>
            <div>
                <span role="img" aria-label={type === "warning" ? "warning" : "Information"}> 
                    {type === "warning" ? "⚠️" : "ℹ️"}
                </span>
                <span>{heading}</span>
            </div>
            <div>{children}</div>
        </div>
    )
}