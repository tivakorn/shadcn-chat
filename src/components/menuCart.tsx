/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/cXBFoBGbjgT
 */
import { CardHeader, CardContent, Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import * as React from 'react'
import menuCard from '../static/json/menu_card.json'
import { useStore } from '../store/zustand'
import { Message } from "@/app/data";

type Props = {
  type: string
  id: string
  sendMessage: (newMessage: Message) => void
}

interface Data {
  id?: string
  type?: string
  title?: string
  menu?: Array<{
    title?: string
    text_link?: string
  }>
}

export const MenuCart: React.FC<Props> = ({ type, id, sendMessage }) => {

  const [data, setData] = React.useState<Data>({})

  const { messagesState } = useStore()

  React.useEffect(() => {

    const menu: Data | undefined = menuCard.find((item) => {

      return item.id === id
    })

    if (menu) setData(menu)
  }, [id])

  const RenderMenu = () => {

    const memu = data.menu?.map((item, key) => {

      return (
        <li
          key={key}
          className="flex items-center justify-between p-2 hover:bg-accent hover:text-accent-foreground"
          onClick={() => sendMessage(
            {
              id: messagesState.length + 1,
              avatar: '/LoggedInUser.jpg',
              name: 'Jakob Hoeg',
              message: item.text_link || ''
            })}
        >
          <div className="flex items-center space-x-4">
            <label
              className="text-sm peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="todo1"
            >
              {item.title}
            </label>
          </div>
        </li>
      )
    })

    return (
      <CardContent className="flex flex-col p-0">
        <div className="border-t border-gray-200 dark:border-gray-800">
          <ul className="divide-y divide-gray-200 dark:divide-gray-800">
            {
              memu
            }
          </ul>
        </div>
      </CardContent>
    )
  }


  if (!data.id) return

  return (
    <Card>
      <CardHeader className="flex items-start bg-teal-500">
        <h2 className="text-lg peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white">{data.title}</h2>
      </CardHeader>
      <RenderMenu />
    </Card>
  )
}