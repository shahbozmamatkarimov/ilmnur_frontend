<template>
  <div class="main">
    <div class="main__left">
      <div class="main__videos">
        <div id="video-grid"></div>
      </div>
      <div class="main__controls">
        <div class="main__controls_block">
          <div
            class="main__controls_button"
            id="muteButton"
            onclick="muteUnmute()"
          >
            <i class="fa fa-microphone"></i>
            <span>Mute</span>
          </div>
          <div
            class="main__controls_button"
            id="playPauseVideo"
            onclick="playStop()"
          >
            <i class="fa fa-video-camera"></i>
            <span>Pause Video</span>
          </div>
        </div>

        <div class="main__controls_block">
          <div class="main__controls_button">
            <i class="fa fa-shield"></i>
            <span>Security</span>
          </div>
          <div class="main__controls_button">
            <i class="fa fa-users"></i>
            <span>Participants</span>
          </div>
          <div class="main__controls_button">
            <i class="fa fa-comment"></i>
            <span>Chat</span>
          </div>
        </div>

        <div class="main__controls_block">
          <div class="main__controls_button leaveMeeting" id="leave-meeting">
            <i class="fa fa-times"></i>
            <span class="">Leave Meeting</span>
          </div>
        </div>
      </div>
    </div>
    <div class="main__right">
      <div class="main__header">
        <h6>Chat</h6>
      </div>
      <div class="store.main__chat__window" id="store.main__chat__window">
        <ul class="messages" id="store.all_messages"></ul>
      </div>
      <div class="main__message_container">
        <input
          type="text"
          id="chat_message"
          placeholder="Type message here.."
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import Peer from "peerjs";
import { useLoadingStore } from "@/store";
import { io } from "socket.io-client";
const runtime = useRuntimeConfig();
const baseUrl = runtime.public.baseURL;
const realtimeUrl = runtime.public.realtimeURL;
// const socket = io(realtimeUrl);
const router = useRouter();
const isLoading = useLoadingStore();

const socket = io(realtimeUrl, {
  reconnectionDelayMax: 10000000, // Maximum delay between reconnection attempts (milliseconds)
  reconnectionAttempts: 5,
  query: {
    id: isLoading.user.data.id,
  },
});

const store = reactive({
  chatInputBox: "",
  all_messages: "",
  main__chat__window: "",
  videoGrid: "",
  myVideo: "",
  myVideoStream: "",
});

let peer = new Peer(undefined, {
  path: "/peerjs",
  host: realtimeUrl,
  port: 4000,
});

let getUserMedia =
  navigator.getUserMedia ||
  navigator.webkitGetUserMedia ||
  navigator.mozGetUserMedia;

onMounted(() => {
  store.chatInputBox = document.getElementById("chat_message");
  store.all_messages = document.getElementById("store.all_messages");
  store.main__chat__window = document.getElementById(
    "store.main__chat__window"
  );
  store.videoGrid = document.getElementById("video-grid");
  store.myVideo = document.createElement("video");
  store.myVideo.muted = true;
});

navigator.mediaDevices
    .getUserMedia({
      video: true,
      audio: true,
    })
    .then((stream) => {
      store.myVideoStream = stream;
      addVideoStream(store.myVideo, stream);

      peer.on("call", (call) => {
        console.log(call, "call=======");
        call.answer(stream);
        const video = document.createElement("video");

        call.on("stream", (userVideoStream) => {
          addVideoStream(video, userVideoStream);
        });
      });
      console.log(peer.on);
      socket.on("user-connected", (userId) => {
        connectToNewUser(userId, stream);
      });

      document.addEventListener("keydown", (e) => {
        if (e.which === 13 && store.chatInputBox.value != "") {
          socket.emit("message", store.chatInputBox.value);
          store.chatInputBox.value = "";
        }
      });

      socket.on("chats", (msg) => {
        console.log(msg);
        let li = document.createElement("li");
        li.innerHTML = msg;
        store.all_messages.append(li);
        store.main__chat__window.scrollTop =
          store.main__chat__window.scrollHeight;
      });
    });


peer.on("call", function (call) {
  console.log(call, "call=======");
  getUserMedia(
    { video: true, audio: true },
    function (stream) {
      console.log(stream, "steam video =================================");
      call.answer(stream); // Answer the call with an A/V stream.
      const video = document.createElement("video");
      call.on("stream", function (remoteStream) {
        addVideoStream(video, remoteStream);
      });
    },
    function (err) {
      console.log("Failed to get local stream", err);
    }
  );
});

const remotePeer = peer.connect("dsjdksjksdjs");

remotePeer.on("open", () => {
  // Send data to the remote peer
  remotePeer.send("Hello from peer " + peer.id);
});

remotePeer.on("data", (data) => {
  console.log("Received data:", data);
});
peer.on("open", (id) => {
  console.log("Local stream", id);
  socket.emit("join-room", {
    roomId: router.currentRoute.value.query.room_id,
    id,
  });
});
// CHAT
const connectToNewUser = (userId, streams) => {
  var call = peer.call(userId, streams);
  console.log(call);
  var video = document.createElement("video");
  call.on("stream", (userVideoStream) => {
    console.log(userVideoStream);
    addVideoStream(video, userVideoStream);
  });
};

const addVideoStream = (videoEl, stream) => {
  videoEl.srcObject = stream;
  videoEl.addEventListener("loadedmetadata", () => {
    videoEl.play();
  });

  store.videoGrid.append(videoEl);
  let totalUsers = document.getElementsByTagName("video").length;
  if (totalUsers > 1) {
    for (let index = 0; index < totalUsers; index++) {
      document.getElementsByTagName("video")[index].style.width =
        100 / totalUsers + "%";
    }
  }
};

const playStop = () => {
  let enabled = store.myVideoStream.getVideoTracks()[0].enabled;
  if (enabled) {
    store.myVideoStream.getVideoTracks()[0].enabled = false;
    setPlayVideo();
  } else {
    setStopVideo();
    store.myVideoStream.getVideoTracks()[0].enabled = true;
  }
};

const muteUnmute = () => {
  const enabled = store.myVideoStream.getAudioTracks()[0].enabled;
  if (enabled) {
    store.myVideoStream.getAudioTracks()[0].enabled = false;
    setUnmuteButton();
  } else {
    setMuteButton();
    store.myVideoStream.getAudioTracks()[0].enabled = true;
  }
};

const setPlayVideo = () => {
  const html = `<i class="unmute fa fa-pause-circle"></i>
<span class="unmute">Resume Video</span>`;
  document.getElementById("playPauseVideo").innerHTML = html;
};

const setStopVideo = () => {
  const html = `<i class=" fa fa-video-camera"></i>
<span class="">Pause Video</span>`;
  document.getElementById("playPauseVideo").innerHTML = html;
};

const setUnmuteButton = () => {
  const html = `<i class="unmute fa fa-microphone-slash"></i>
<span class="unmute">Unmute</span>`;
  document.getElementById("muteButton").innerHTML = html;
};
const setMuteButton = () => {
  const html = `<i class="fa fa-microphone"></i>
<span>Mute</span>`;
  document.getElementById("muteButton").innerHTML = html;
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  height: 100%;
  font-family: "Roboto", sans-serif;
}

#video-grid {
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  align-items: center;
  flex-wrap: wrap;
  overflow-y: auto;
}

video {
  display: block;
  flex: 1;
  object-fit: cover;
  border: 5px solid #000;
  max-width: 600px;
}

.main {
  height: 100%;
  display: flex;
}

.main__left {
  flex: 0.8;
  display: flex;
  flex-direction: column;
}

.main__right {
  flex: 0.2;
  display: flex;
  flex-direction: column;
  background-color: #242324;
  border-left: 1px solid #3d3d42;
}

.main__videos {
  flex-grow: 1;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.main__controls {
  display: flex;
  background-color: #1c1e20;
  color: #d2d2d2;
  padding: 5px;
  justify-content: space-between;
}

.main__controls_block {
  display: flex;
}

.main__controls_button {
  display: flex;
  flex-direction: column;
  cursor: pointer;
  padding: 10px;
  justify-content: center;
  align-items: center;
  min-width: 80px;
  transition: all 0.3s ease-in-out;
  border-radius: 10px;
  margin: 5px;
}

.main__controls_button span {
  margin-top: 10px;
  display: block;
}

.main__controls_button:hover {
  background-color: #34383b;
}

.main__controls_button i {
  font-size: 25px;
}

.leaveMeeting {
  background-color: red;
  color: #fff;
}

.main__header {
  color: #f5f5f5;
  text-align: center;
  padding: 20px;
  border-bottom: 2px solid #3d3d42;
}

.store.main__chat__window {
  flex-grow: 1;
  overflow: auto;
  padding: 20px 20px 0 20px;
}

.main__message_container {
  padding: 22px 11px;
  display: flex;
}

.main__message_container input {
  flex-grow: 1;
  background-color: transparent;
  border: none;
  color: #f5f5f5;
  user-select: none;
  outline: none;
}

#store.all_messages li {
  color: #fff;
  list-style: none;
  border-bottom: 1px solid #3d3d42;
  padding: 10px 0;
}

.unmute {
  color: red;
}
</style>
