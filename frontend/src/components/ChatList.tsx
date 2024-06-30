import { asset } from "../assets/assets"
import ChatBar from "./ChatBar"
import {ChatBarProps1} from "../types/types"
import { StoreContext } from '../context/StoreContext';
import { FC, useContext } from "react";
const ChatList:FC = () => {
    const context = useContext(StoreContext);
    const Chat_list = context?.Chat_list;
    if (!Chat_list) {
        throw new Error("ExampleComponent must be used within a StoreContextProvider");
    }
return (
    <div className="flex flex-col">
        <div className="p-3">
            <div className="p-3 pl-5 flex gap-3  w-25   rounded-xl items-center bg-gray-100 " >
                <img src={asset.search_mini} alt="search_icon " className="w-6" />
                <h2 className="font-normal text-zinc-500">Search Message</h2>
            </div>
        </div>
        <div className="h-full " >

            {
                Chat_list.map((item:ChatBarProps1,index:number)=>{
                    return(
                        <ChatBar
                        key={index}
                        id={item.id}
                        image={item.image}
                        name={item.name}
                        message={item.message}
                        tags={item.tags}
                    />)
                })
            }
        </div>
    </div>
)
}

export default ChatList