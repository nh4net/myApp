import React from "react"
//import imgUserIcon from "../assets/user_icon.png"

const styles = {
    wrapper: {
        margin: 8, padding: 8,
        //display: "flex",        
        //flexDirection: "row",
        display: "block",
        border: "1px solid grey",
        borderRadius: 16,
        width: "120px"        
    },
    imageContainer: {
        textAlign : "center",
    },
    image: {
        width: 50, height: 50,
        borderRadius: 25,
    },
    contentContainer: {
        marginLeft: 10,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    nameText: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
        textAlign : "center",
    },
    commentText: {
        color: "black",
        fontSize: 16,
        textAlign : "center",
    },
};

export default function Room(props) {
    return (
        <div style={styles.wrapper}>
            <div style={styles.imageContainer}>
                <img src={props.img_icon}
                    style={styles.image}
                ></img>
            </div>
            <div style={styles.contentContainer}>
                <span style={styles.nameText}>
                    {props.name}</span>
                <span style={styles.commentText}>
                    {props.status}</span>
            </div>
        </div>
    )
}