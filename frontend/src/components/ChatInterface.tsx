import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

const ChatInterface = () => {
    const context = useContext(StoreContext);
    const data = context?.Chat_list;

    if (!data) {
        throw new Error("data is not defined");
    }

    return (
        <div className="border-b-2 pb-2 h-5/6">
            {/* Sender */}
            <div className="sender flex gap-2 p-1 w-auto">
                <img className="w-10 h-10 rounded" src={data[0]?.image} alt={data[0]?.name} />
                <div className="mt-2 gap-1 flex flex-col px-2 items-start">
                    {data[0]?.message.map((item, index) => (
                        <div key={index} className="w-auto max-w-xs break-words px-1 border rounded-lg bg-gray-100">
                            {item}
                        </div>
                    ))}
                </div>
            </div>
            {/* Receiver */}
            <div className="receiver flex gap-2 p-1 w-auto justify-end">
                <div className="mt-2 gap-1 flex flex-col px-2 items-end">
                    {data[1]?.message.map((item, index) => (
                        <div key={index} className="w-auto max-w-xs break-words px-1 border rounded-lg bg-gray-100">
                            {item}
                        </div>
                    ))}
                </div>
                <img className="w-10 h-10 rounded" src={data[1]?.image} alt={data[1]?.name} />
            </div>
        </div>
    );
};

export default ChatInterface;
