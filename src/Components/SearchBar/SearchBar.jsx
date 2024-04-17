import { useState } from "react";

// Search Data
const searchData = [
  {
      name: 'Fashion',
      image: 'https://i.pinimg.com/564x/9c/d2/81/9cd281cbde0afdfce4ad9e4a1d568690.jpg'
  },
  {
      name: 'Shirt',
      image: 'https://i.pinimg.com/236x/a3/89/62/a38962e3e6e83c1ac8b6570e52c9edf4.jpg'
  },
  {
      name: 'Jacket',
      image: 'https://i.pinimg.com/236x/94/52/ed/9452edcdf6351f1708fbc28a93702778.jpg'
  },
  {
      name: 'Mobile',
      image: 'https://i.pinimg.com/236x/83/39/82/8339823656ee1fb3d5487e9ecd86c971.jpg'
  },
  {
      name: 'Laptop',
      image: 'https://i.pinimg.com/564x/78/bf/a8/78bfa893270a0b531705b1c56f25674d.jpg'
  },
  {
      name: 'Home',
      image: 'https://i.pinimg.com/236x/e7/fe/f2/e7fef2d874ee51324c16af9abaf84b03.jpg'
  },
  {
      name: 'book',
      image: 'https://i.pinimg.com/236x/3a/dc/ff/3adcff7a670cde2ea2bb8ceadb6cceac.jpg'
  },
]

const SearchBar = () => {
   // Search State 
   const [search, setSearch] = useState("");

   // Filter Search Data
   const filterSearchData = searchData.filter((obj) => obj.name.toLowerCase().includes(search)).slice(0, 8)
  return (
    <div className="">
    {/* search input  */}
    <div className="input flex justify-center">
        <input
            type="text"
            placeholder='Search here'
            onChange={(e) => setSearch(e.target.value)}
            className=' bg-gray-200 placeholder-gray-400 rounded-lg px-2 py-2 w-96 lg:w-96 md:w-96 outline-none text-black '
        />
    </div>

    {/* search drop-down  */}
    <div className=" flex justify-center">
        {search && <div className="block absolute bg-gray-200 w-96 md:w-96 lg:w-96 z-50 my-1 rounded-lg px-2 py-2">
            {filterSearchData.length > 0 ?
                <>
                    {filterSearchData.map((item, index) => {
                        return (
                            <div key={index} className="py-2 px-2">
                                <div className="flex items-center gap-2">
                                    <img className="w-10" src={item.image} alt="" />
                                    {item.name}
                                </div>
                            </div>
                        )
                    })}
                </>
                :

                <>
                    <div className="flex justify-center">
                        <img className=" w-20" src="https://cdn-icons-png.flaticon.com/128/10437/10437090.png" alt="img" />
                    </div>
                </>}
        </div>
        }
    </div>
</div>
  );
}

export default SearchBar;