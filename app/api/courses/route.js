import courses from './data.json'
import { NextResponse } from 'next/server'
import { v4 as uuidv4 } from 'uuid'

export async function GET(request) {
	return NextResponse.json(courses)
}

export async function POST(request) {
	const {title, description, level, link} = await request.json()

const newCourse = {
		id: uuidv4(),
		title,
		description,
		level,
		link
}

courses.push(newCourse)	
	return NextResponse.json(courses)
}

// to add
// Post to http://localhost:3000/api/courses
// raw or json data:
// {
// 	"title": "My Title",
// 	"description": "My Desc", 
// 	"level": "Loser", 
// 	"link": "https://www.google.com"
// }