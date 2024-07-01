import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { ChatLog } from "../types/types";
import { asset } from "../assets/assets";

const CallLogs = () => {
    const context = useContext(StoreContext);
    const data = context?.chat_data;

    if (!data) {
        throw new Error("Chat_list is not defined");
    }

    return (
        <div className='w-full h-full overflow-y-auto custom-scrollbar px-2'>
            <div className="sticky top-0 w-full bg-stone-400 items-center rounded-sm flex px-3 py-1.5 font-medium text-base z-10 mb-2">Call log</div>
            {data.map((props: ChatLog, index: number) => (
                <div className="w-full bg-slate-100 mb-2 gap-1 rounded-lg flex items-center p-2 " key={index}>
                    <div className="flex  items-center gap-3 leading-none">
                        <img className="w-8 h-8 rounded-2xl mb-1" src={asset.gear} alt={props.name} />
                        <div className="flex flex-col" >
                            <h2 className="font-medium text-base" >{props.name}</h2>
                            <p>{props.time}</p>
                        </div>
                    </div>
                    <div className="w-14 rounded-md bg-slate-300 py-2 items-center flex justify-center" > 
                        <h1>helo</h1>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CallLogs;
