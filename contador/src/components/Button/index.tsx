import { ButtonHTMLAttributes } from "react";
import "./index.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = ({ children, onClick }: ButtonProps) => {
  return <button onClick={onClick}>{children}</button>;
};
