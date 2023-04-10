'use client';
import { useState } from 'react';

const CourseSearch = ({ getSearchResults }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`/api/courses/search?query=${query}`);
    const courses = await res.json();
    getSearchResults(courses);
  };

  return (
		<form onSubmit={handleSubmit} className='flex items-center'>
			<input
				type='text'
				className='flex-grow p-[.8rem] border-0 rounded-[4px] text-[1rem] text-[#333] outline-none'
				onSubmit={handleSubmit}
				placeholder='Search Courses...'
				value={query}
				onChange={(e) => setQuery(e.target.value)}
			/>
			<button
				className='py-[.7rem] px-[1rem] ml-2 bg-[blue] text-[#fff] border-0 rounded-[4px] text-[1rem] hover:bg-[#0058b7]'
				type='submit'>
				Search
			</button>
		</form>
	)
};
export default CourseSearch;