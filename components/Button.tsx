import {ReactNode} from "react";
import {atmaSans} from "@/fonts";

type ButtonProps = {
    children?: ReactNode
    className?: string
    text: string
    variant?: "light" | "dark"
    full?: boolean
}

export default function Button({text, variant = "light", full}: ButtonProps) {
    return (
        <button
            className={'rounded-full overflow-hidden duration-200 hover:opacity-60 border-2 border-solid border-yellow-400 ' + (full ? 'grid place-items-center w-full ' : '') + (variant === "dark" ? ' text-white bg-yellow-400 border-yellow-400 ' : ' border-yellow-400')}>
            <p className={'px-6 sm:px-10 whitespace-nowrap py-2 sm:py-3 ' + atmaSans.className}>{text}</p></button>
    )
}