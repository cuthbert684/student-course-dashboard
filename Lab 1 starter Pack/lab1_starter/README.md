Student Course Dashboard

Project Overview

Student Course Dashboard is a responsive React application that helps students view their courses and monitor their academic progress. The dashboard uses a clean blue-and-white colour theme and presents course information in an organised layout.

Features

* Welcome section: Displays a welcoming message for students.
* Course statistics: Shows the total number of courses, completed courses, courses in progress, and average course progress.
* Reusable course cards: Displays each course using a reusable React component.
* Course details: Shows the course title, lecturer, category, and description.
* Progress indicators: Displays each course’s progress as a percentage with a visual progress bar.
* Course status: Identifies courses as completed or in progress.
* Responsive design: Uses CSS media queries to adapt the layout to different screen sizes.
* Empty state: Displays a message when no courses are available.

Technologies Used

* React
* JavaScript (JSX)
* CSS3
* Vite
* HTML5

Courses Included

No.	Course	Lecturer	Progress	Status
1	Web Development	Dr. Kato	70%	In progress
2	Database Systems	Ms. Auma	100%	Completed
3	Computer Networks	Mr. Okello	45%	In progress
4	Software Engineering	Ms. Nakato	25%	In progress

Dashboard Statistics

* Total courses: 4
* Completed courses: 1
* Courses in progress: 3
* Average progress: 60%

Project Structure

lab1_starter/
├── public/
├── src/
│   ├── App.jsx
│   ├── styles.css
│   └── main.jsx
├── index.html
├── package.json
├── package-lock.json
└── README.md

Note: The exact files and folders may differ slightly depending on the starter project.

Installation and Setup

Prerequisites

Install Node.js and npm before running the application.

Steps

1. Download or clone the project repository.
2. Open the project folder in VS Code.
3. Open the VS Code terminal.
4. Install the project dependencies:

npm install

5. Start the development server:

npm run dev

6. Open the local URL shown in the terminal, usually:
    http://localhost:5173

How the Application Works

The course information is stored in a JavaScript array. The application uses React components and the map() method to render a card for each course. Each card receives its course data through props and uses a unique course ID as its React key.

The dashboard calculates course statistics from the course data using JavaScript array methods. Conditional rendering displays the appropriate course status and an empty-state message when the course list contains no items.

CSS styles control the layout, colours, course cards, progress bars, and responsive behaviour.

Learning Outcomes

This project demonstrates:

* Building a React application.
* Creating reusable components and passing props.
* Rendering arrays with map() and stable keys.
* Using conditional rendering and empty states.
* Calculating statistics from application data.
* Styling a responsive interface with CSS.
* Displaying course progress visually.

Author

Student Course Dashboard — React practical assignment.

License

This project was created for educational purposes.