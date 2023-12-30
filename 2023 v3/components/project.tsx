

export default function Project(props){
    return(
        <div className="flex flex-col w-full gap-10">
            <div className="w-full h-96 bg-white/50 rounded-lg border border-stone-300/75 shadow-xl cursor-pointer grayscale hover:grayscale-0 hover:scale-105 transition">
                <div className="bg-stone-200/50 py-2.5 px-4 flex justify-between items-center">
                    <div className="flex">
                        <div className="w-3 h-3 bg-red-300 rounded-full mr-1.5"></div>
                        <div className="w-3 h-3 bg-yellow-300 rounded-full mr-1.5"></div>
                        <div className="w-3 h-3 bg-green-300 rounded-full mr-1.5"></div>
                    </div>
                    <div className="bg-stone-200 w-3/5 py-0.5 text-xs text-stone-500 rounded-md text-center">
                        {props.name}
                    </div>
                    <div className="w-8"></div>
                </div>
            </div>
            <p className="text-center text-sm">{props.desc}</p>
        </div>
    )
}