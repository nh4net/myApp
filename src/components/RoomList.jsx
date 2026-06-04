import React from "react"
import Room from "./Room.jsx"

import img_room_A from "../assets/room_icon_A.png";
import img_room_B from "../assets/room_icon_B.png";
import img_room_C from "../assets/room_icon_C.png";
import img_room_D from "../assets/room_icon_D.png";
import img_room_E from "../assets/room_icon_E.png";

export default function RoomList(props) {
    return (
        <div style={ 
            { display: "flex", }
        } >
        <Room name="A" status="사용가능"
            img_icon={img_room_A} />       
        <Room name="B" status="사용가능"
            img_icon={img_room_B} />
        <Room name="C" status="사용불가능"
            img_icon={img_room_C} />
        <Room name="D" status="사용가능"
            img_icon={img_room_D} />
        <Room name="E" status="사용가능"
            img_icon={img_room_E} />
        </div>
    )
}

