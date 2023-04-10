import Header from './components/Header'
import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
	weight: ['400', '700'],
	subsets: ['latin'],
})

export const metadata = {
	title: 'Moniz Media',
	description: 'Web development and design',
	keywords: 'web development, web design, next.js, react',
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={poppins.className}>
        <Header />
        <main className='max-w-[1100px] my-0 mx-auto py-0 px-4'>
        {children}
        </main>
      </body>
		</html>
	)
}
