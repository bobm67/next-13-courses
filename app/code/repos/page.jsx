import Link from 'next/link'
import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa'

async function fetchRepos() {
	const response = await fetch(
		'https://api.github.com/users/bobm67/repos', {
      next: {
        revalidate: 60
      }
    }
	)

  await new Promise((resolve) => setTimeout(resolve, 1000))
	const repos = await response.json()
	return repos
}

const ReposPage = async () => {
	const repos = await fetchRepos()
	return (
		<div className='max-w-[800px] my-0 mx-auto py-8 px-0'>
			<h2 className='text-xl font-bold'>Repositories</h2>
			<ul className='p-0 m-0 list-none'>
				{repos?.map((repo) => (
					<li className='p-0 m-0 list-none' key={repo.id}>
						<Link
							className='mx-0 my-8 block bg-white text-[#333] rounded no-underline shadow-[0_2px_4px_rgba(0,0,0,0.1)] transition-all duration-[0.3s] ease-[ease-in-out] p-4 hover:translate-y-[-5px] hover:shadow-[0_5px_10px_rgba(0,0,0,0.2)'
							href={`/code/repos/${repo.name}`}>
							<h3 className='m-0 text-2xl font-bold'>{repo.name}</h3>
							<p className='m-0 text-[#666] text-lg'>{repo.description}</p>
							<div className='w-full flex justify-between mt-4 text-[#999]'>
								<span className='flex items-center'>
									<FaStar className='mr-2' /> {repo.stargazers_count}
								</span>
								<span className='flex items-center'>
									<FaCodeBranch className='mr-2' /> {repo.forks_count}
								</span>
								<span className='flex items-center'>
									<FaEye className='mr-2' /> {repo.watchers_count}
								</span>
							</div>
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export default ReposPage
