import { asset } from '../assets/assets';

const TextBar = () => {
    return (
        <div className='w-full p-3 flex items-center'>
            <div className='w-full h-full flex gap-2 items-center px-2'>
                <img src={asset.gear} alt="attach" className='w-6 h-6' />
                <div className='bg-gray-200 flex-grow flex items-center rounded'>
                    <input
                        className='w-full p-2 bg-transparent border-none outline-none'
                        type="text"
                        placeholder="Type a message..."
                    />
                    <img src="" alt="send_icon" className='w-6 h-6 m-2 cursor-pointer' />
                </div>
            </div>
        </div>
    );
}

export default TextBar;
