import { useNavigate } from "react-router-dom";

export const Button = ({ className="", size="default", children }) => {
    const baseClasses = "relative overflow-hidden rounded-full font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/80 hover:text-muted/70 shadow-lg shadow-primary/25";

    const sizeClasses = {
        sm: "px-4 py-2 texr-sm",
        default: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg"
    };

    const navigate = useNavigate();

    const classes = `${baseClasses} ${sizeClasses[size]} ${className}` ;
    return (
        <button className={classes} onClick={() => navigate("contact")}>
            <span className="relative flex items-center justify-center gap-2">
                {children}
            </span>
        </button>
    )
}
