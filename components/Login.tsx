import {ReactNode} from "react";

import {atmaSans, nunitoSans} from "@/fonts";
import Button from "@/components/Button";

type LoginProps = {
    children?: ReactNode
    className?: string
}

export default function Login({className}: LoginProps) {
    return (
        <div className={'flex flex-col flex-1 justify-center items-center gap-4 ' + className}>
            <h3 className={'text-4xl sm:text-5xl md:text-6xl ' + atmaSans.className}> Log In or Register</h3>
            <p className={nunitoSans.className}>You&#39;re one step away from a brighter life.</p>
            <input
                className="w-full max-w-[400px] mx-auto px-3 duration-200 hover:border-yellow-500 focus:border-yellow-500 py-2 sm:py-3 border border-solid border-yellow-400 rounded-full outline-none"
                placeholder='Email'/>
            <input
                className="w-full max-w-[400px] mx-auto px-3 duration-200 hover:border-yellow-500 focus:border-yellow-500 py-2 sm:py-3 border border-solid border-yellow-400 rounded-full outline-none"
                placeholder='Password' type="password"/>
            <div className='max-w-[400px] w-full mx-auto'>
                <Button text="Submit" variant="light" full/>
            </div>
        </div>
    )
}