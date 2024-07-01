import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { ChatProfiles } from "../types/types";

const GroupChatsList = () => {
  const context = useContext(StoreContext);
  const data = context?.Chat_list;

  const truncateMessage = (message: string, maxLength: number) => {
    return message.length <= maxLength ? message : message.slice(0, maxLength) + "...";
  };

  if (!data) {
    throw new Error("value is not there");
  }

  return (
    <div className="h-4/5 border-b-2">
      <div>
        {data.map((props: ChatProfiles, index: number) => {
          const latestMessage = props.message[props.message.length - 1];
          const truncatedMessage = truncateMessage(latestMessage, 30);

          return (
            <div key={index}>
              <div className="flex px-2 pt-2 gap-2">
                <img className="w-10 h-10 rounded-3xl" src={props.image} alt="profile" />
                <div className="flex flex-col">
                  <h1 className="font-medium text-base" >{props.name}</h1>
                  <p>{truncatedMessage}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default GroupChatsList
