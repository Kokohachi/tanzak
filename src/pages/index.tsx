import { Button, Card, Center, Group, Input, Modal, Stack, Text } from "@mantine/core";
import {Itim, Hachi_Maru_Pop} from "next/font/google";
import { IoPaperPlane, IoPricetagOutline, IoReload, IoReloadCircle } from "react-icons/io5";
import { useDisclosure } from '@mantine/hooks';
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const TextFont = Itim({
    weight: "400",
    subsets: ["latin"],
  });

const CardFont = Hachi_Maru_Pop({
    weight: "400",
    subsets: ["latin"],
  });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL as string,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
);

export default function Home() {
  const [opened, { open, close }] = useDisclosure(false);
  const [tanzakData, setTanzakData] = useState("");
  const [tanzakAuthor, setTanzakAuthor] = useState("");
  const [tanzakList, setTanzakList] = useState<any[]>([]);

  const handleSendTanzak = async() => {
    console.log(tanzakData);
    console.log(tanzakAuthor);
    const { data, error } = await supabase.from("tanzak").insert([
      { tanzak_data: tanzakData, tanzak_author: tanzakAuthor }
    ]);
    close();
  }
  const handleReadTanzak = async() => {
    const { data, error } = await supabase.from("tanzak").select("*");
    //randomly pick six tanzak
    const randomTanzak = data?.sort(() => Math.random() - Math.random()).slice(0, 6) || [];
    setTanzakList(randomTanzak);
    console.log(data);
  }
  useEffect(() => {
    handleReadTanzak();
  }
  , []);

  return (
    <>
      <Group mt={"30px"} mx={"10%"}>
        <Text fz="40" className={TextFont.className} color="white">tanzak</Text>
        <Button  variant="transparent" leftSection={<IoPricetagOutline color="white" size={"20"} />} ml={"auto"} onClick={open}>
        <Text fz="20" className={TextFont.className} color="white">Write Tanzak</Text>
        </Button>
      </Group>
      <Center>
      <Modal style={{"backgroundColor":"#ffff9c", flex:1}} centered opened={opened} onClose={close} withCloseButton={false}>
        <Stack>
        <Input variant="filled" placeholder="Text? (<30)" required onChange={
          (e) => {
            setTanzakData(e.currentTarget.value);
          }
        }
        //only 30 characters allowed
        maxLength={30}
        />
        <Input variant="filled" placeholder="By who? (<10)" required onChange={
          (e) => {
            setTanzakAuthor(e.currentTarget.value);
          }
        } 
        maxLength={10}/>
        <Button variant="transparent" disabled={
          tanzakData.length === 0 || tanzakAuthor.length === 0
        } leftSection={<IoPaperPlane color="black" size={"20"} />} onClick={handleSendTanzak}><Text fz="20" className={TextFont.className} color="black">Send Tanzak to Milky Way</Text></Button>
        </Stack>
      </Modal>
        <Button variant="transparent" leftSection={<IoReloadCircle color="white" size={"15"} />} onClick={handleReadTanzak}><Text fz="15" className={TextFont.className} color="white">Read New Tanzak</Text></Button>
      </Center>
      <Group mt={"20px"} mx={"10%"}>
        <Card mr={"30px"} ml={"auto"} style={{"backgroundColor":"#ffff9c", opacity:"0.8", msWritingMode:"vertical-rl", writingMode:"vertical-rl"}} w="150px" h={"500px"}>
          <Text fz="30" className={CardFont.className} >{tanzakList[0]?.tanzak_data}</Text>
          <Text fz="20" className={CardFont.className} pt={"350px"} >{tanzakList[0]?.tanzak_author}</Text>
        </Card>
        <Card mr={"30px"}  style={{"backgroundColor":"#ffff9c", opacity:"0.8", msWritingMode:"vertical-rl", writingMode:"vertical-rl"}} w="150px" h={"500px"}>
          <Text fz="30" className={CardFont.className} >{tanzakList[1]?.tanzak_data}</Text>
          <Text fz="20" className={CardFont.className} pt={"350px"} >{tanzakList[1]?.tanzak_author}</Text>
        </Card>
        <Card mr={"30px"}  style={{"backgroundColor":"#ffff9c", opacity:"0.8", msWritingMode:"vertical-rl", writingMode:"vertical-rl"}} w="150px" h={"500px"}>
          <Text fz="30" className={CardFont.className} >{tanzakList[2]?.tanzak_data}</Text>
          <Text fz="20" className={CardFont.className} pt={"350px"} >{tanzakList[2]?.tanzak_author}</Text>
        </Card>
        <Card mr={"30px"} style={{"backgroundColor":"#ffff9c", opacity:"0.8", msWritingMode:"vertical-rl", writingMode:"vertical-rl"}} w="150px" h={"500px"}>
          <Text fz="30" className={CardFont.className} >{tanzakList[3]?.tanzak_data}</Text>
          <Text fz="20" className={CardFont.className} pt={"350px"} >{tanzakList[3]?.tanzak_author}</Text>
        </Card>
        <Card mr={"30px"} style={{"backgroundColor":"#ffff9c", opacity:"0.8", msWritingMode:"vertical-rl", writingMode:"vertical-rl"}} w="150px" h={"500px"}>
          <Text fz="30" className={CardFont.className} >{tanzakList[4]?.tanzak_data}</Text>
          <Text fz="20" className={CardFont.className} pt={"350px"} >{tanzakList[4]?.tanzak_author}</Text>
        </Card>
        <Card mr={"auto"} style={{"backgroundColor":"#ffff9c", opacity:"0.8", msWritingMode:"vertical-rl", writingMode:"vertical-rl"}} w="150px" h={"500px"}>
          <Text fz="30" className={CardFont.className} >{tanzakList[5]?.tanzak_data}</Text>
          <Text fz="20" className={CardFont.className} pt={"350px"} >{tanzakList[5]?.tanzak_author}</Text>
        </Card>

      </Group>
      <Center mt={"20px"}>
        <Text fz="10" className={TextFont.className} color="white">©Kokohachi 2024</Text>
      </Center>
    </>
  );
}