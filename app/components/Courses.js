import Link from 'next/link'

async function fetchCourses() {
  const response = await fetch('http://localhost:3000/api/courses')
  
  const courseList = await response.json()
  return courseList
}

const CoursesPage = async () => {
  const courses = await fetchCourses()

  return (
		<div className=''>
			{courses?.map((course) => (
				<div className='mb-0' key={course.id}>
					<h2>{course.title}</h2>
					<small>LevelL {course.level}</small>
					<p>{course.description}</p>
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