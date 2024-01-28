const ButtonList = () => {
  const buttons =  ["All", "Mixes", "Music", "Live", "News", "Ram Janmbhoomi", "Ramayan", "Podcasts", "Horror", "Krishna"]
  return <div className="flex justify-center h-auto p-b-1 xl:top-20 w-full bg-white sticky  flex-wrap">
    {buttons.map((btn) => <div className="xl:m-2 m-1 lg:mx-1 cursor-pointer hover:bg-gray-200 px-4 py-1 bg-gray-100 rounded-lg font-semibold" >{btn}</div> )}
  </div>;
};

export default ButtonList;
