import gear from './gear.png'
import home from './home.png'
import calendar from './calendar.png'
import logo from './Logo.png'
import message from './message.png'
import pie from './pie.png'
import search from './search.png'
import add from './add.png'
import down from './down.png'
import oval from './oval.png'
import search_mini from './search_mini.png'
import profile from './profile.png'
import { ChatLog } from '../types/types'
export const asset ={
    gear,
    home,
    calendar,
    logo,
    message,
    pie,
    search,
    add,
    down,
    oval,
    search_mini,
    profile,
}
const chatdata: ChatLog[] = [
  {
    id: '1',
    image: 'path/to/image1.jpg',
    name: 'Alice',
    time: '2023-06-28T14:12:00Z',
    newtime: '2023-06-29T10:30:00Z',
  },
  {
    id: '2',
    image: 'path/to/image2.jpg',
    name: 'Bob',
    time: '2023-06-28T15:45:00Z',
  },
  {
    id: '3',
    image: 'path/to/image3.jpg',
    name: 'Charlie',
    time: '2023-06-28T16:20:00Z',
    newtime: '2023-06-29T11:00:00Z',
  },
  {
    id: '4',
    image: 'path/to/image4.jpg',
    name: 'Diana',
    time: '2023-06-28T18:10:00Z',
  },
  {
    id: '5',
    image: 'path/to/image5.jpg',
    name: 'Eve',
    time: '2023-06-28T19:00:00Z',
    newtime: '2023-06-29T12:45:00Z',
  },
  {
    id: '4',
    image: 'path/to/image4.jpg',
    name: 'Diana',
    time: '2023-06-28T18:10:00Z',
  },
  {
    id: '5',
    image: 'path/to/image5.jpg',
    name: 'Eve',
    time: '2023-06-28T19:00:00Z',
    newtime: '2023-06-29T12:45:00Z',
  },
];

export default chatdata;