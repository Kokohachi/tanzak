import { Paper, Text } from "@mantine/core";
import {Itim} from "next/font/google";

const TextFont = Itim({
    weight: "400",
    subsets: ["latin"],
  });

export default function Header() {
    return (
        <Paper p={"md"} px={"xl"} withBorder radius={"lg"} style={{ marginBottom: 20, backgroundColor:"#ffff9c" }} mx={"5%"} my={"10px"} >
            <Text fz="30" className={TextFont.className}>tanzak</Text>
        </Paper>
    );
    }