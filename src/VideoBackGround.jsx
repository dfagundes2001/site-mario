// StyledBackgroundVideo.js
import { BackgroundWrapper, Video } from "./style";

const VideoBackGround = ({ videoSource }) => (
  <BackgroundWrapper>
    <Video autoPlay loop muted>
      <source src={videoSource} type="video/mp4" />
    </Video>
  </BackgroundWrapper>
);

export default VideoBackGround;
