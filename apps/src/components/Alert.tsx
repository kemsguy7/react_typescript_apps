import { useState } from "react";
interface AlertProps { 
    type: "warning" | "Information";
    heading?: string;
    children: React.ReactNode;
    closable: boolean;
    onClose?: () => void;
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


export function Alert({ type , heading, children, closable, onClose}: AlertProps) {
    const [visible, setVisible] = useState(true);
    if (!visible) return null;

    function handleCloseClick() { 
        setVisible(false);
        console.log("Close button clicked");
        if (onClose) {
            onClose();
        }
    }

    return(
        <div>
            <div>
                <span role="img" aria-label={type === "warning" ? "warning" : "Information"}> 
                    {type === "warning" ? "⚠️" : "ℹ️"}
                </span>
                <span>{heading}</span>
            </div>
            {closable && (
            <button aria-label="Close" onClick ={handleCloseClick}> 
                <span role="img" aria-label="Close"> X</span>
            </button>
            )}
            <div>{children}</div>
        </div>
    )
}