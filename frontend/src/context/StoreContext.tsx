import  { createContext, ReactNode, FC } from "react";
import {ChatBarProps,ChatLog} from "../types/types"
import chatdata from "../assets/assets";
export const StoreContext = createContext<StoreContextProps | null>(null);

interface StoreContextProps {
    url: number;
    Chat_list:ChatBarProps[];
    chat_data:ChatLog[];
}

interface StoreContextProviderProps {
    children: ReactNode;
}

const StoreContextProvider: FC<StoreContextProviderProps> = ({ children }) => {
    const url: number = 9883;
    const Chat_list: ChatBarProps[] = [
{
    id: '1',
    name:'siva',
    image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*DdnXquBUvghgIhH0L56t-A.jpeg',
    message: ['hi what are you doing  dfagasgasdgfasfdsafffffffffadfadfadsfasfadsfadsfdsfdsfadfasfadsfafdsfadsfasdfasdfadsfasdfaf','what','hi what are you doing  dfagasgasdgfasfdsafffffffffadfadfadsfasfadsfadsfdsfdsfadfasfadsfafdsfadsfasdfasdfadsfasdfaf'],
    tags: ['important', 'friend'],
    status:true,
},
{
    id: '2',
    name:'siva1',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs890mhCthao7eQ8QbUfT-O5b292JDCogbEw&s',
    message: ['hi','what'],
    tags: ['work'],
    status:false,
},
];
const chat_data:ChatLog[]=chatdata;

    // definening what are values we are gonna pass to them
    const contextValue: StoreContextProps = {
        url,
        Chat_list,
        chat_data,
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
