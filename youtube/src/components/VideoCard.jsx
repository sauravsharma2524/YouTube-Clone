const VideoCard = ({ info }) => {
  console.log(info?.snippet);
  // const { snippet, statistics } = info;
  // const { channelTitle, title, thumbnails } = info?.snippet;

  return (
    <div className="w-[343px] hover:scale-105 h-[313px] p-2 m-2 ">
      <img
        className="xl:rounded-xl cursor-pointer w-[343px] h-[193px]"
        src={info?.snippet?.thumbnails?.medium?.url}
        alt="image"
      />
      <ul>
        <li className="font-bold cursor-pointer  h-14 flex justify-start p-1 overflow-ellipsis overflow-hidden text-pretty">
          {info?.snippet?.title}
        </li>
        <div className="text-sm text-gray-600   font-medium">
          <li>{info?.snippet?.channelTitle}</li>
          <li>{info?.statistics.viewCount} views</li>
        </div>
      </ul>
    </div>
  );
};

export default VideoCard;
