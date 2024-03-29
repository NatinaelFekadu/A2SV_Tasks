import { ReactNode } from "react";

interface Props{
    class_name:string;
    children:ReactNode
}
export const Button = ({class_name,children}:Props) => {
  return (
    <button className={class_name}>{children}</button>
  )
}
