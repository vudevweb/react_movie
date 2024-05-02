import ReactPlayer from 'react-player'

function Phim() {
     return ( 
          <ReactPlayer  url={`https://s3.phim1280.tv/20240423/V7EdgRk5/index.m3u8`} playing={true} controls={true} width='100%' height='500' />
     );
}

export default Phim;