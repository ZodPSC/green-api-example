import {Button, Input} from "antd";
import TextArea from "antd/es/input/TextArea";


export default function Home() {
  return (
      <>
          <Input placeholder="idInstance"/><br/>
          <Input placeholder="ApiTockenInstance"/><br/>
          <Button>getSettings</Button><br/>
          <Button>getStateInstance</Button><br/>
          <Input placeholder="77771234567"/><br/>
          <TextArea rows={4} placeholder="Hello world!"/><br/>
          <Button>sendMessage</Button><br/>
          <Input placeholder="77771234567"/><br/>
          <Input placeholder="https://my.site.com/img/horse.png"/><br/>
          <Button>sendFileByUrl</Button><br/>
          Ответ:<br/>
          <TextArea rows={20}/><br/>
      </>
  );
}
