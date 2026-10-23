import "./styles.css";

const courses = [
  {
    id: 1,
    title: "Web Development",
    lecturer: "Dr. Kato",
    progress: 70,
    completed: false,
    category: "Programming",
    description: "Learn to build interactive websites using web technologies.",
  },
  {
    id: 2,
    title: "Database Systems",
    lecturer: "Ms. Auma",
    progress: 100,
    completed: true,
    category: "Data Management",
    description: "Explore database design, data storage and management.",
  },
  {
    id: 3,
    title: "Computer Networks",
    lecturer: "Mr. Okello",
    progress: 45,
    completed: false,
    category: "Networking",
    description: "Understand network devices, protocols and connectivity.",
  },
  {
    id: 4,
    title: "Software Engineering",
    lecturer: "Ms. Nakato",
    progress: 25,
    completed: false,
    category: "Software Development",
    description: "Explore software design, development and testing.",
  },
];

function CourseCard({ course }) {
  return (
    <article className="course-card">
      <div className="course-card-top">
        <span className="course-category">{course.category}</span>

        <span
          className={`status ${
            course.completed ? "status-completed" : "status-progress"
          }`}
        >
          {course.completed ? "Completed" : "In progress"}
        </span>
      </div>

      <h3>{course.title}</h3>
      <p className="lecturer">Lecturer: {course.lecturer}</p>
      <p className="course-description">{course.description}</p>

      <div className="progress-heading">
        <span>Course progress</span>
        <strong>{course.progress}%</strong>
      </div>

      <div
        className="progress-track"
        role="progressbar"
        aria-label={`${course.title} progress`}
        aria-valuenow={course.progress}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="progress-fill"
          style={{ width: `${course.progress}%` }}
        />
      </div>

      <p className="progress-note">
        {course.completed
          ? "Well done! You have completed this course."
          : "Keep learning to complete this course."}
      </p>
    </article>
  );
}

export default function App() {
  const totalCourses = courses.length;
  const completedCourses = courses.filter(
    (course) => course.completed
  ).length;
  const inProgressCourses = courses.filter(
    (course) => !course.completed
  ).length;

  const overallProgress =
    totalCourses === 0
      ? 0
      : Math.round(
          courses.reduce((total, course) => total + course.progress, 0) /
            totalCourses
        );

  return (
    <main className="dashboard">
      <header className="topbar">
        <a className="brand" href="#home">
          <span className="brand-icon">C</span>
          CourseTrack
        </a>
        <span className="topbar-label">Student Portal</span>
      </header>

      <section className="welcome" id="home">
        <div>
          <p className="eyebrow">YOUR LEARNING SPACE</p>
          <h1>Welcome to your dashboard!</h1>
          <p className="welcome-text">
            Keep track of your courses and celebrate your learning progress.
          </p>
        </div>

        <div className="welcome-icon" aria-hidden="true">
          <span>✦</span>
        </div>
      </section>

      <section className="overview" aria-label="Course statistics">
        <div className="stat-card">
          <span className="stat-icon blue-icon">▤</span>
          <div>
            <p>Total courses</p>
            <strong>{totalCourses}</strong>
          </div>
        </div>

        <div className="stat-card">
          <span className="stat-icon green-icon">✓</span>
          <div>
            <p>Completed</p>
            <strong>{completedCourses}</strong>
          </div>
        </div>

        <div className="stat-card">
          <span className="stat-icon orange-icon">◷</span>
          <div>
            <p>In progress</p>
            <strong>{inProgressCourses}</strong>
          </div>
        </div>

        <div className="stat-card">
          <span className="stat-icon purple-icon">↗</span>
          <div>
            <p>Average progress</p>
            <strong>{overallProgress}%</strong>
          </div>
        </div>
      </section>

      <section className="courses-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">YOUR LEARNING JOURNEY</p>
            <h2>My Courses</h2>
            <p className="section-subtitle">
              Review your courses and track your progress.
            </p>
          </div>

          <span className="course-count">{totalCourses} courses</span>
        </div>

        <div className="course-grid">
          {courses.length > 0 ? (
            courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))
          ) : (
            <p className="empty-state">
              No courses available yet. Add a course to get started.
            </p>
          )}
        </div>
      </section>

      <footer className="footer">
        Keep learning, one course at a time.
      </footer>
    </main>
  );
}