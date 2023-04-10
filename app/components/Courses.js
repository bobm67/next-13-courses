import Link from 'next/link'

const CoursesPage = ({courses}) => {
//  const courses = await fetchCourses()

  return (
		<div className=''>
			{courses?.map((course) => (
				<div className='border-[#ccc] border rounded-[4px] p-4 m-4 bg-[#fff] text-[#333]' key={course.id}>
					<h2 className='text-[1rem] mt-0 font-bold'>{course.title}</h2>
					<small className=''>Level: {course.level}</small>
					<p className='my-2'>{course.description}</p>
					<Link
						className='inline-block bg-[color:var(--primary-color)] text-white rounded text-base cursor-pointer no-underline px-4 py-2 border-0'
						href={course.link}
						target='_blank'>
						Go To Course
					</Link>
				</div>
			))}
		</div>
	)
}

export default CoursesPage