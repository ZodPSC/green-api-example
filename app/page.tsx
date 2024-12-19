'use client'

import {Button, Col, Input, Row} from "antd";
import TextArea from "antd/es/input/TextArea";
import {useCallback, useState} from "react";

export default function Home() {
    type SettingType = {
        name: number
    }

    type StateInstanceType = {
        instanceType: string
    }

    type SendMessageType = {
        messageType: string
    }

    type SendFileByUrlType = {
        fileType: string
    }

    const [settings, setSettings] = useState<SettingType[]>([])
    const [isSettings, setIsSettings] = useState(false)

    const [stateInstance, setStateInstance] = useState<StateInstanceType[]>([])
    const [isStateInstance, setIsStateInstance] = useState(false)

    const [sendMessage, setSendMessage] = useState<SendMessageType[]>([])
    const [isSendMessage, setIsSendMessage] = useState(false)

    const [sendFileByUrl, setSendFileByUrl] = useState<SendFileByUrlType[]>([])
    const [isSendFileByUrl, setIsSendFileByUrl] = useState(false)

    const [answer, setAnswer] = useState("")

    const getSettings = useCallback(async () => {
        if (isSettings) return
        setIsSettings(true)
        // const response = await fetch('{{apiUrl}}/waInstance{{idInstance}}/getSettings/{{apiTokenInstance}}');
        // const result = await response.json()
        const result: SettingType[] = [{
            name: 1
        }]
        setSettings(result)
        setIsSettings(false)
        console.log("result.field="+result[0]?.name)
        alert("result.field="+result[0]?.name)
    }, [settings])

    const getStateInstance = useCallback(async () => {
        if (isStateInstance) return
        setIsStateInstance(true)
        // const response = await fetch('{{apiUrl}}/waInstance{{idInstance}}/getStateInstance/{{apiTokenInstance}}');
        // const result = await response.json()
        const result: StateInstanceType[] = [{
            instanceType: "standard"
        }]
        setStateInstance(result)
        setIsStateInstance(false)
        console.log("result.instanceType="+result[0]?.instanceType)
        alert("result.instanceType="+result[0]?.instanceType)
    }, [stateInstance])

    const getSendMessage = useCallback(async () => {
        if (isSendMessage) return
        setIsSendMessage(true)
        // const response = await fetch('{{apiUrl}}/waInstance{{idInstance}}/sendMessage/{{apiTokenInstance}}');
        // const result = await response.json()
        const result: SendMessageType[] = [{
            messageType: "client"
        }]
        setSendMessage(result)
        setIsSendMessage(false)
        console.log("result.messageType="+result[0]?.messageType)
        alert("result.messageType="+result[0]?.messageType)
    }, [sendMessage])

    const getSendFileByUrl = useCallback(async () => {
        if (isSendFileByUrl) return
        setIsSendFileByUrl(true)
        // const response = await fetch('{{apiUrl}}/waInstance{{idInstance}}/sendFileByUrl/{{apiTokenInstance}}');
        // const result = await response.json()
        const result: SendFileByUrlType[] = [{
            fileType: "img"
        }]
        setSendFileByUrl(result)
        setIsSendFileByUrl(false)
        console.log("result.fileType="+result[0]?.fileType)
        alert("result.fileType="+result[0]?.fileType)
        const myAnswer = "{\n" +
            "\"message\": \"ist`s okey\"\n" +
            "}\n"
        setAnswer(myAnswer)
    }, [sendFileByUrl])
  return (
      <>
          <Row>
              <Col span={12}>
                  <Input placeholder="idInstance"/><br/>
                  <Input placeholder="ApiTockenInstance"/><br/>
                  <Button disabled={isSettings} onClick={getSettings}>getSettings</Button><br/>
                  <Button disabled={isStateInstance} onClick={getStateInstance}>getStateInstance</Button><br/>
                  <Input placeholder="77771234567"/><br/>
                  <TextArea rows={4} placeholder="Hello world!"/><br/>
                  <Button disabled={isSendMessage} onClick={getSendMessage}>sendMessage</Button><br/>
                  <Input placeholder="77771234567"/><br/>
                  <Input placeholder="https://my.site.com/img/horse.png"/><br/>
                  <Button disabled={isSendFileByUrl} onClick={getSendFileByUrl}>sendFileByUrl</Button><br/>
              </Col>
              <Col span={12}>
                  Ответ:<br/>
                  <TextArea rows={20} disabled={true} value={answer}/><br/>
              </Col>
          </Row>
      </>
  );
}
