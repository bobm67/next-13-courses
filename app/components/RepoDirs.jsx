import Link from 'next/link'

async function fetchRepoContents(name) {
	await new Promise((resolve) => setTimeout(resolve, 3000))

	const response = await fetch(
		`https://api.github.com/repos/bobm67/${name}/contents`,
		{
			next: {
				revalidate: 60,
			},
		}
	)

	const contents = await response.json()
	return contents
}

const RepoDirs = async ({ name }) => {
	const contents = await fetchRepoContents(name)
	const dirs = contents.filter((content) => content.type === 'dir')

	return (
		<>
			<h3 className='m-0 text-2xl font-bold'>Directories</h3>
			<div>
				{dirs?.map((dir) => (
					<li className='pl-2 m-0' key={dir.path}>
						<Link
							className='mx-0 my-2 block bg-white text-[#333] rounded shadow-[0_2px_4px_rgba(0,0,0,0.1)] transition-all duration-[0.3s] ease-[ease-in-out] p-4 hover:translate-y-[-5px] hover:shadow-[0_5px_10px_rgba(0,0,0,0.2)] text-sm'
							href={`/code/repos/${name}/${dir.path}`}>
							<h4 className='ml-2 text-sm underline text-[blue]'>{dir.path}</h4>
						</Link>
					</li>
				))}
			</div>
		</>
	)
}

export default RepoDirs
