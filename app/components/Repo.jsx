import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa'
import Link from 'next/link'

async function fetchRepo(name) {
	const response = await fetch(
		`https://api.github.com/repos/bobm67/${name}`,
		{
			next: {
				revalidate: 60,
			},
		}
	)

	const repo = await response.json()
	return repo
}

const Repo = async ({ name }) => {
	const repo = await fetchRepo(name)

	return (
		<>
			<h2 className='mt-0 text-2xl font-bold'>{repo?.name}</h2>
			<p>{repo?.description}</p>
			<div className='flex mx-0 my-4'>
				<div className='flex items-center mr-4'>
					<FaStar className='mr-2' />
					<span className='text-[0.9rem]'>{repo?.stargazers_count}</span>
				</div>
				<div className='flex items-center mr-4'>
					<FaCodeBranch className='mr-2' />
					<span className='text-[0.9rem]'>{repo?.forks_count}</span>
				</div>
				<div className='flex items-center mr-4'>
					<FaEye className='mr-2' />
					<span className='text-[0.9rem]'>{repo?.watchers_count}</span>
				</div>
			</div>
		</>
	)
}

export default Repo
