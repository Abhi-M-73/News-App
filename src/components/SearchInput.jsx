import axios from "axios";
import React, { useState } from "react";
import NewsCard from "./NewsCard";



const SearchInput = () => {
    const Api_Key = "a12b74a2d83642b2848d58c833dbe950";
    const [search, setSearch] = useState("");
    const [data, setData] = useState([]);

    const fetchNews = async () => {
        try {
            const response = await axios.get(`https://newsapi.org/v2/everything?q=${search}&apiKey=${Api_Key}`);
            setData(response.data.articles)
        } catch (error) {
            console.log(error.message)
        }
    }


    const handleSearch = (e) => {
        e.preventDefault();
        if (search.trim() === "") {
            alert("Please enter a search term");
            return;
        }
        fetchNews();
    };

    return (
        <div className="flex flex-col bg-gray-100 ">
            <form
                onSubmit={handleSearch}
                className="flex items-center w-full max-w-md mx-auto space-x-2 bg-white p-4 rounded-lg shadow-md"
            >
                {/* Input Field */}
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    type="text"
                    placeholder="Search for something..."
                    className="flex-grow px-4 py-2 border-2 border-gray-400 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />

                {/* Search Button */}
                <button
                    type="submit"
                    className="px-5 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Search
                </button>
            </form>

            <div className="md:p-10 ">
                <NewsCard data={data} />
            </div>
        </div>
    );
};

export default SearchInput;
