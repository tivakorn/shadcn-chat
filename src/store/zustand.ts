import { create } from 'zustand'

interface Message {
    id: number;
    avatar: string;
    name: string;
    message: string;
}

type TextStore = {
    messagesState: Message[],
    setMessages: (text: Message[]) => void
}

export const useStore = create<TextStore>((set) => ({
    messagesState: [
        {
            id: 1,
            avatar: '/User1.jpeg',
            name: 'Jane Doe',
            message: 'สวัสดีค่ะ โตเกียวมารีนยินดีต้อนรับ คุณสามารถสอบถามข้อมูลด้านล่างได้เลยค่ะ'
        },
        {
            id: 2,
            avatar: '/User1.jpeg',
            name: 'Jane Doe',
            message: 'menu-card:0'
        }
    ],
    setMessages: (textInput: Message[]) => set((state) => ({
        messagesState: [
            ...state.messagesState,
            ...textInput
        ]
    }))
}));