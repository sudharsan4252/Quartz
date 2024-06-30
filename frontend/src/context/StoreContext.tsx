import  { createContext, ReactNode, FC } from "react";
import {ChatBarProps} from "../types/types"
interface StoreContextProps {
    url: number;
    Chat_list:ChatBarProps[];
}

export const StoreContext = createContext<StoreContextProps | null>(null);

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

    const contextValue: StoreContextProps = {
        url,
        Chat_list,
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
