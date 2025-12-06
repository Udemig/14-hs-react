import type { JSX } from "react";
import type { FC } from "react";
import type { IProps } from "../types";


// 1) Component tipi tanımlama
// Prop type: Tanımladık
// Return type: Oto algılama
const Button1= ({text}: IProps) => {
    return <button>{text}</button>
}

// 2) Component tipi tanımlama
// Prop type: Tanımladık
// Return type: JSX.Element
const Button2= ({text}: IProps): JSX.Element => {
    return <button>{text}</button>
}


// 3) Component tipi tanımlama
// Prop type: Tanımladık
// Return type: React.ReactNode
const Button3 = ({text}: IProps): React.ReactNode => {
    return <button>{text}</button>
}

// 4) Component tipi tanımlama
// Prop type: FC
// Return type: FC
const Button4:FC<IProps> = ({text}) => {
    return <button>{text}</button>
}



