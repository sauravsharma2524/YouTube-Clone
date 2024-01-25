const ButtonList = () => {
  const buttons =  ["All", "Mixes", "Music", "Live", "News", "Ram Janmbhoomi", "Ramayan", "Podcasts", "Horror", "Krishna", "Spirtuality"]
  return <div className="flex flex-wrap">
    {buttons.map((btn) => <div className="m-2  cursor-pointer hover:bg-gray-200 px-4 py-1 bg-gray-100 rounded-lg font-semibold" >{btn}</div> )}
  </div>;
};

export default ButtonList;
