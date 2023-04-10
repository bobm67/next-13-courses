import Repo from '@/app/components/Repo'
import RepoDirs from '@/app/components/RepoDirs'
import Link from 'next/link'
import { Suspense } from 'react'

const RepoPage = ({ params: { name } }) => {
	return (
		<div className='border rounded bg-white text-[#333] m-4 p-4  border-[#ccc]'>
			<Link
				className='inline-block bg-[#f4f4f4] py-2 px-4 border-0 rounded-md text-[0.8rem] cursor-pointer decorator-none hover:bg-[#0058b7] hover:text-[#fff] mb-][1.3rem]'
				href='/code/repos'>
				Back To Repositories
			</Link>
			<Suspense fallback={<div>Loading repo...</div>}>
				<Repo name={name} />
			</Suspense>
			<Suspense fallback={<div>Loading directories...</div>}>
				<RepoDirs name={name} />
			</Suspense>
		</div>
	)
}

export default RepoPage
