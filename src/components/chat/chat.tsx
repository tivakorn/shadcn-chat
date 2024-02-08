import { Message, UserData } from "@/app/data";
import ChatTopbar from "./chat-topbar";
import { ChatList } from "./chat-list";
import React from "react";

interface ChatProps {
  messages?: Message[];
  selectedUser: UserData;
  isMobile: boolean;
}

export function Chat({ messages, selectedUser, isMobile }: ChatProps) {

  const [messagesState, setMessages] = React.useState<Message[]>(
    []
  );

  const sendMessage = (newMessage: Message) => {

    let text = 'กรุณาติดต่อเจ้าหน้า'

    switch (newMessage.message) {

      case 'กรมธรรม์ติด MEMO':
        text = 'กรมธรรม์ติด MEMO\n' +
          '\n' +
          'Q : กรมธรรม์ติด MEMO ตัวแทนจะทราบได้อย่างไร ?\n' +
          'A: ตัวแทนจะได้รับ SMS แจ้งเลขกรมธรรม์ที่ติด Memo จากทางฝ่ายพิจารณา\n' +
          '\n' +
          'Q : การส่ง Memo ต้องส่งผ่านช่องทางใด ?\n' +
          'A : ส่งผ่านอีเมลฝ่ายบริหารงานตัวแทน กรณีส่งเอกสารเพิ่ม ที่ sale-co@tokiomarinelife.co.th'
        break;
      case 'กรมธรรม์ติด MEMO ตัวแทนจะทราบได้อย่างไร':
        text = 'ตัวแทนจะได้รับ SMS แจ้งเลขกรมธรรม์ที่ติด Memo จากทางฝ่ายพิจารณา'
        break;
      case 'การส่ง Memo ต้องส่งผ่านช่องทางใด':
        text = 'ส่งผ่านอีเมลฝ่ายบริหารงานตัวแทน กรณีส่งเอกสารเพิ่ม ที่ sale-co@tokiomarinelife.co.th'
        break;
      case 'การจ่ายผลประโยชน์ตัวแทน':
        text = 'การจ่ายผลประโยชน์ตัวแทน\n' +
          '\n' +
          'Q: จ่ายผลประโยชน์กี่รอบ รอบใดบ้าง ?\n' +
          'A: การจ่ายผลตอบแทน ทางบริษัทจะดำเนินการจ่ายเป็นรายสัปดาห์ รายเดือน รายไตรมาส ครึ่งปี และรอบปี\n' +
          '\n' +
          'Q: หากมีแคมเปญ จ่ายเพิ่ม Bonus สำหรับตัวแทน ติดตามข่าวสารช่องทางใด ?\n' +
          'A: สามารถติดตามประกาศผ่าน Agent Web ได้ที่ลิงค์นี้ https://agweb.tokiomarinelife.co.th/agweb-v2' +
          '\n' +
          'Q: กรณีสอบถามผลการจ่ายผลประโยชน์ หรือมีคำถามสงสัย ติดต่อช่องทางใด ?\n' +
          'A: ท่านสามารถติดต่อผ่าน Call Center เพื่อติดต่อฝ่ายสนับสนุนตัวแทน หรือ ติดต่อสำนักงานใหญ่ บมจ.โตเกียวมารีนประกันชีวิต (ประเทศไทย) ณ อาคารเอ็มไพร์ทาวเวอร์ ชั้น 25'
        break;
      case 'จ่ายผลประโยชน์กี่รอบ รอบใดบ้าง':
        text = 'การจ่ายผลตอบแทน ทางบริษัทจะดำเนินการจ่ายเป็นรายสัปดาห์ รายเดือน รายไตรมาส ครึ่งปี และรอบปี'
        break;
      case 'หากมีแคมเปญ จ่ายเพิ่ม Bonus สำหรับตัวแทน ติดตามข่าวสารช่องทางใด':
        text = 'สามารถติดตามประกาศผ่าน Agent Web ได้ที่ลิงค์นี้ https://agweb.tokiomarinelife.co.th/agweb-v2'
        break;
      case 'สอบถามผลการจ่ายผลประโยชน์ หรือมีคำถามสงสัย ติดต่อช่องทางใด':
        text = 'ท่านสามารถติดต่อผ่าน Call Center เพื่อติดต่อฝ่ายสนับสนุนตัวแทน หรือ ติดต่อสำนักงานใหญ่ บมจ.โตเกียวมารีนประกันชีวิต (ประเทศไทย) ณ อาคารเอ็มไพร์ทาวเวอร์ ชั้น 25'
        break;
      case 'การใช้งานระบบของตัวแทน':
        text = 'การใช้งานระบบของตัวแทน\n' +
          '\n' +
          'Q: กรณีตัวแทนใหม่ สอบถามการใช้งานระบบต่างๆ ติดต่อส่วนงานใด ?\n' +
          'A: 1. Download คู่มือผ่าน https://agweb.tokiomarinelife.co.th/agweb-v2\n' +
          '   2. โทร Call center แจ้ง ติดต่อฝ่ายสนับสนุนตัวแทน\n' +
          '   3. สอบถามฝ่ายฝึกอบรม กรณีระบบนั้นมีเปิดรอบสอนการใช้งาน สามารถลงทะเบียนได้\n' +
          '\n' +
          'Q: กรณีตัวแทนส่ง Link EKYC ให้ลูกค้า เพื่อยืนยันตัวตน แต่ไม่สำเร็จมีสาเหตุใดบ้าง ?\n' +
          'A: สาเหตุอาจเกิดได้จาก 4 ปัจจัย ดังนี้\n' +
          '•	ลูกค้าทำไม่ถูกต้องตามวิธีการ\n' +
          '•	บัตรประชาชนของลูกค้าหมดอายุ\n' +
          '•	บัตรประชาชนไม่ใช่ใบปัจจุบัน\n' +
          '•	บัตรประชาชนมีรอนขีดข่วนจนไม่สามารถตรวจสอบข้อมูลได้'
        break;
      case 'ตัวแทนใหม่ สอบถามการใช้งานระบบต่างๆ ติดต่อส่วนงานใด':
        text = '1. Download คู่มือผ่าน https://agweb.tokiomarinelife.co.th/agweb-v2\n' +
          '2. โทร Call center แจ้ง ติดต่อฝ่ายสนับสนุนตัวแทน\n' +
          '3. สอบถามฝ่ายฝึกอบรม กรณีระบบนั้นมีเปิดรอบสอนการใช้งาน สามารถลงทะเบียนได้'
        break;
      case 'ตัวแทนส่ง Link EKYC ให้ลูกค้า เพื่อยืนยันตัวตน แต่ไม่สำเร็จมีสาเหตุใดบ้าง':
        text = 'สาเหตุอาจเกิดได้จาก 4 ปัจจัย ดังนี้\n' +
          '•	ลูกค้าทำไม่ถูกต้องตามวิธีการ\n' +
          '•	บัตรประชาชนของลูกค้าหมดอายุ\n' +
          '•	บัตรประชาชนไม่ใช่ใบปัจจุบัน\n' +
          '•	บัตรประชาชนมีรอนขีดข่วนจนไม่สามารถตรวจสอบข้อมูลได้'
        break;
      case 'การชำระเงินกรมธรรม์ลูกค้า':
        text = 'การชำระเงินกรมธรรม์ลูกค้า\n' +
          '\n' +
          'Q: ระบบแสดงการชำระไม่ผ่าน แต่ทางลูกค้าขึ้นว่าชำระแล้วและมีสลิปจากทางธนาคาร สาเหตุจากอะไร และต้องอย่างไรบ้าง ?\n' +
          'A: ระหว่างรอการชำระจากลูกค้า ตัวแทนต้องปล่อยหน้าจอค้างไว้เพื่อรอผลการชำระระหว่าง ลูกค้า > ธนาคาร > บริษัทฯ หากมีการเปลี่ยนหน้าจอ หรือปิดระบบลง ทางบริษัทจะไม่สามารถรับได้ผลจากธนาคารได้ ต้องรอเวลาประมาณ 30 นาทีเพื่อทางธนาคารส่งสถานะการชำระมายังบริษัทฯ หากสถานะขึ้นว่าไม่สำเร็จ ตัวแทนสามารถใช้วิธี Manual Key ยอดจ่ายลูกค้าเข้าระบบได้ โดยมีสลิปอ้างอิงการชำระเงินจากลูกค้า\n' +
          '\n' +
          'Q: กรณีชำระงวดต่อ ต้องทำอย่างไร ?\n' +
          'A: เมื่อถึงงวดชำระต่อ บริษัทฯ จะส่ง SMS แจ้งตัวแทน ตัวแทนสามารถส่ง QR CODE / การชำระผ่านบัตรเครดิตเพื่อให้ลูกค้าชำระเงินได้ โดย Download QR แต่ละกรมธรรม์ผ่าน https://agweb.tokiomarinelife.co.th/agweb-v2 เพื่อส่งให้ลูกค้าได้\n' +
          '\n' +
          'Q: การชำระเงินกรมธรรม์ ลูกค้าสามารถชำระผ่านช่องทางใดได้บ้าง ?\n' +
          'A: ลูกค้าสามารถชำระเงินกรมธรรม์ได้ 3 ช่องทาง ดังนี้\n' +
          '1. QR code\n' +
          '2. โอนเงินเข้าบัญชีบริษัทฯ\n' +
          '3. บัตรเครดิต\n' +
          'โดยทุกวิธีสามารถทำผ่านทาง ตัวแทน / สาขาของบริษัทโตเกียวมารีน'
        break;
      case 'ระบบแสดงการชำระไม่ผ่าน แต่ทางลูกค้าขึ้นว่าชำระแล้วและมีสลิปจากทางธนาคาร สาเหตุจากอะไร และต้องอย่างไรบ้าง':
        text = 'ระหว่างรอการชำระจากลูกค้า ตัวแทนต้องปล่อยหน้าจอค้างไว้เพื่อรอผลการชำระระหว่าง ลูกค้า > ธนาคาร > บริษัทฯ หากมีการเปลี่ยนหน้าจอ หรือปิดระบบลง ทางบริษัทจะไม่สามารถรับได้ผลจากธนาคารได้ ต้องรอเวลาประมาณ 30 นาทีเพื่อทางธนาคารส่งสถานะการชำระมายังบริษัทฯ หากสถานะขึ้นว่าไม่สำเร็จ ตัวแทนสามารถใช้วิธี Manual Key ยอดจ่ายลูกค้าเข้าระบบได้ โดยมีสลิปอ้างอิงการชำระเงินจากลูกค้า'
        break;
      case 'ชำระงวดต่อ ต้องทำอย่างไร':
        text = 'เมื่อถึงงวดชำระต่อ บริษัทฯ จะส่ง SMS แจ้งตัวแทน ตัวแทนสามารถส่ง QR CODE / การชำระผ่านบัตรเครดิตเพื่อให้ลูกค้าชำระเงินได้ โดย Download QR แต่ละกรมธรรม์ผ่าน https://agweb.tokiomarinelife.co.th/agweb-v2 เพื่อส่งให้ลูกค้าได้'
        break;
      case 'การชำระเงินกรมธรรม์ ลูกค้าสามารถชำระผ่านช่องทางใดได้บ้าง':
        text = 'ลูกค้าสามารถชำระเงินกรมธรรม์ได้ 3 ช่องทาง ดังนี้\n' +
          '1. QR code\n' +
          '2. โอนเงินเข้าบัญชีบริษัทฯ\n' +
          '3. บัตรเครดิต\n' +
          'โดยทุกวิธีสามารถทำผ่านทาง ตัวแทน / สาขาของบริษัทโตเกียวมารีน'
        break;
      case 'การสอบถามหรือดูแลข้อมูลส่วนตัว ของตัวแทน':
        text = 'การสอบถามหรือดูแลข้อมูลส่วนตัว ของตัวแทน\n' +
          '\n' +
          'Q: การสอบถาม / แก้ไข / สมัครสอบ หรือเรื่องที่เกียวกับข้อมูลตัวแทน ทำอย่างไร ?\n' +
          'A: โทร Call center แจ้ง ติดต่อฝ่ายสนับสนุนตัวแทน จะมีฝ่ายดูแลข้อมูลตัวแทนเป็นผู้ให้ข้อมูลโดยเฉพาะ\n' +
          '\n' +
          'Q: การเปลี่ยนแปลงข้อมูลตัวแทน เช่น เบอร์ อีเมล ทำอย่างไร ?\n' +
          'A: Download ใบคำขอเปลี่ยนแปลงผ่าน https://agweb.tokiomarinelife.co.th/agweb-v2 และนำเอกสารตัวจริง ส่งมาที่สาขา หรือ ส่งไปรษณีย์มายังสำนักงานใหญ่\n' +
          '\n' +
          'Q: ตัวแทนสามารถย้ายหน่วยงานภายในได้หรือไม่ ?\n' +
          'A: ไม่สามารถดำเนินการได้\n' +
          '\n' +
          'Q: เมือสอบผ่าน ใช้เวลากี่วันถึงจะสามารถขายประกันได้ ?\n' +
          'A: เมื่อสอบผ่าน และได้รับการออก Code ตัวแทนกับทางบริษัทฯ ท่านสามารถขายประกันได้ในวันรุ่งขึ้นทันที'
        break;
      case 'การสอบถาม / แก้ไข / สมัครสอบ หรือเรื่องที่เกียวกับข้อมูลตัวแทน ทำอย่างไร':
        text = 'โทร Call center แจ้ง ติดต่อฝ่ายสนับสนุนตัวแทน จะมีฝ่ายดูแลข้อมูลตัวแทนเป็นผู้ให้ข้อมูลโดยเฉพาะ'
        break;
      case 'การเปลี่ยนแปลงข้อมูลตัวแทน เช่น เบอร์ อีเมล ทำอย่างไร':
        text = 'Download ใบคำขอเปลี่ยนแปลงผ่าน https://agweb.tokiomarinelife.co.th/agweb-v2 และนำเอกสารตัวจริง ส่งมาที่สาขา หรือ ส่งไปรษณีย์มายังสำนักงานใหญ่'
        break;
      case 'ตัวแทนสามารถย้ายหน่วยงานภายในได้หรือไม่ ?':
        text = 'ไม่สามารถดำเนินการได้'
        break;
      case 'เมือสอบผ่าน ใช้เวลากี่วันถึงจะสามารถขายประกันได้':
        text = 'เมื่อสอบผ่าน และได้รับการออก Code ตัวแทนกับทางบริษัทฯ ท่านสามารถขายประกันได้ในวันรุ่งขึ้นทันที'
        break;
    }

    setMessages([
      ...messagesState,
      ...[newMessage, {
        id: newMessage.id + 1,
        avatar: '/User1.png',
        name: 'Jane Doe',
        message: text.trim()
      }]
    ])
  }

  return (
    <div className="flex flex-col justify-between w-full h-full">
      <ChatTopbar selectedUser={selectedUser} />

      <ChatList
        messages={messagesState}
        selectedUser={selectedUser}
        sendMessage={sendMessage}
        isMobile={isMobile}
      />
    </div>
  );
}
