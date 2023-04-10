import Link from 'next/link'

const Header = () => {
	return (
		<header className='flex items-center justify-center bg-[#0047ab] text-[#ffffff] p-4 border-b-[5px] border-[#ffffff]'>
			<div className='max-w-[1100px] my-0 mx-auto py-0 px-4'>
				<div className='mb-2 text-center text-[#ffffff]'>
					<Link className='text-lg font-bold' href='/'>
						Moniz Media
					</Link>
				</div>
				<div className='links'>
					<Link
						className='text-[#ffffff] decoration-none hover:underline my-0 mx-2'
						href='/about'>
						About
					</Link>
					<Link
						className='text-[#ffffff] decoration-none hover:underline my-0 mx-2'
						href='/about/team'>
						Our Team
					</Link>
					<Link
						className='text-[#ffffff] decoration-none hover:underline my-0 mx-2'
						href='/code/repos'>
						Code
					</Link>
				</div>
			</div>
		</header>
	)
}

export default Header
