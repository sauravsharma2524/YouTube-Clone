const VideoCard = ({ info }) => {
  console.log(info?.snippet);
  // const { snippet, statistics } = info;
  // const { channelTitle, title, thumbnails } = info?.snippet;

  return (
    <div className="w-[343px] h-[313px] p-2 m-2 ">
      <img className="rounded-xl w-[343px] h-[193px]" src={info?.snippet?.thumbnails?.medium?.url} alt="image" />
      <ul>
        <li className="font-semibold p-1">{info?.snippet?.title}</li>
        <li>{info?.snippet?.channelTitle}</li>
        <li>{info?.statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
