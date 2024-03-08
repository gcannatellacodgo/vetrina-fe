import colors from "tailwindcss/colors";

export default function MyButton(props:{testoBottone:string, myOnClick:()=>void}){
    return(
        <div onClick={props.myOnClick}>
            <div className={`w-auto h-12 bg-orange-700 min-w-20 mb-10  hover:opacity-100 rounded-2xl hover:scale-110 duration-500 cursor-pointer  flex flex-col items-center justify-center px-20`}>
                <p className={'text-sm font-mono text-white '}>{props.testoBottone}</p>
            </div>
        </div>
    )
}