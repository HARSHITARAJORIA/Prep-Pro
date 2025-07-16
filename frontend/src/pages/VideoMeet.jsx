import React, { useEffect, useRef, useState } from 'react'
const server_url="http://localhost:8000";
import "../styles/videoComponent.css"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

var connections={};
const peerConfigConnections={
    iceServers:[{
        urls:"https://stun.l.google.com.19302"
    }]
}
const VideoMeet = () => {
  var socketRef=useRef();
  let socketIdRef=useRef();
  let localVideoRef=useRef();

  let [videoAvailable,setVideoAvailable]=useState(true);
  let[audioAvailable,setaudioAvailable]=useState(true);

  let[video,setVideo]=useState();
  let[audio,setAudio]=useState();

  let[screen,setScreen]=useState();
  let[showModal,setModal]=useState();

  let[screenAvailable,setScreenAvailable]=useState();
  let[messages,setMessages]=useState([]);
  let[message,setMessage]=useState("");
  let[newMessages,setNewMessage]=useState(0);

  let[askForUsername,setAskForUsername]=useState(true);
  let[username,setUsername]=useState("");

  const videoRef=useRef([]);

  const[videos,setVideos]=useState([]);

  // if(isChrome()===false){}
  const getPermissions=async()=>{
    try{
      const videoPermission=await navigator.mediaDevices.getUserMedia({video:true})
      if(videoPermission){
        setVideoAvailable(true);
      }
      else{
        setVideoAvailable(false);
      }
      const audioPermission=await navigator.mediaDevices.getUserMedia({audio:true})
      if(audioPermission){
        setaudioAvailable(true);
      }
      else{
        setaudioAvailable(false);
      }

    }
    catch{

    }
  }

  useEffect(()=>{
    getPermissions();
  },[]);





  return (
    <div>
      {askForUsername===true?
      <div>

        <h2>Enter into Lobby</h2>
        {username}
        <TextField id="outlined-basic" label="username" value={username} onChange={e=>setUsername(e.target.value)}/>
        <Button variant='contained'>Connect</Button>

        <div>
          <video ref={localVideoRef} autoPlay muted></video>
        </div>

      </div>:<></>
}
    </div>
  )
}

export default VideoMeet


