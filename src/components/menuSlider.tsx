/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/m46tuJAo5Zs
 */
import { Button } from "@/components/ui/button"
import Slider from "react-slick"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import * as React from 'react'
import { useStore } from '../store/zustand'
import menuCarousel from '../static/json/menu_carousel.json'
import { Message } from "@/app/data";
import Image from 'next/image'
interface Data {
  id?: string
  type?: string
  title?: string
  menu?: Array<{
    title?: string,
    desc?: string
    text_link?: string
    link?: string
    image?: string
  }>
}

type Props = {
  type: string
  id: string
  sendMessage: (newMessage: Message) => void
}

export const MenuSlider: React.FC<Props> = ({ type, id, sendMessage }) => {

  const [data, setData] = React.useState<Data>({})

  const { messagesState } = useStore()

  React.useEffect(() => {

    const menu: Data | undefined = menuCarousel.find((item) => {

      return item.id === id
    })

    if (menu) setData(menu)
  }, [id])

  const renderCoruselItem = () => {

    const memu = data.menu?.map((item, key) => {

      return (
        <CarouselItem key={key} >
          <div className="relative">
            <Image
              alt="Patient receiving a document"
              className="rounded-t-lg"
              height="200"
              src={item?.image || ''}
              style={{
                aspectRatio: "280/200",
                objectFit: "cover",
              }}
              width="380"
            // blurDataURL={item.image || ''}
            />
          </div>
          <div className="p-4 bg-white rounded-b-lg shadow">
            <h5 className="text-lg font-semibold">{item.title || ''}</h5>
            {item.desc && (<p className="text-lg font-semibold">{item.desc || ''}</p>)}
            {
              item.text_link ?
                <Button className="w-full mt-2" variant="outline"
                  onClick={
                    () => sendMessage(
                      {
                        id: messagesState.length + 1,
                        avatar: '/LoggedInUser.jpg',
                        name: 'Jakob Hoeg',
                        message: item.text_link || ''
                      })
                  }>
                  {'คลิก'}
                </Button> :
                <a href={item.link} target="_blank">
                  <Button className="w-full mt-2" variant="outline">
                    {'คลิก'}
                  </Button>
                </a>
            }
          </div>
        </CarouselItem>
      )
    })

    return memu
  }

  return (
    <div className="max-w-sm mx-auto ml-12">
      <Carousel>
        <CarouselContent>
          {
            renderCoruselItem()
          }
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}


function ChevronLeftIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}


function ChevronRightIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}
