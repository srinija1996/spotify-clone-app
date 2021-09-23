import ReactAudioPlayer from "react-audio-player";

const AudioPlayer = () => (
  <ReactAudioPlayer
    style={{ width: "80vw", opacity: "90%", borderRadius: 0 }}
    src="my_audio_file.ogg"
    autoPlay
    controls
  />
);

export default AudioPlayer;
