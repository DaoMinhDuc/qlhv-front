
import React from 'react';
import useCourses from '../../hooks/getCourse';
import { Course } from '../../util/ulti';


const CoursesList: React.FC = () => {
    const { courses, loading, error } = useCourses();

    if (loading) return <p>Đang tải...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h1>Danh sách khóa học</h1>
            {courses.length === 0 ? (
                <p>Không có khóa học nào để hiển thị.</p>
            ) : (
                <ul>
                    {courses.map((course: Course, index: number) => (
                        <li key={index}>
                            <h2>{course.courseName} ({course.courseType})</h2>
                            <p>{course.courseInfo}</p>
                            <h3>Chapters:</h3>
                            <ul>
                                {course.chapters.map((chapter, chapterIndex) => (
                                    <li key={chapterIndex}>
                                        <h4>{chapter.chapterName}</h4>
                                        <ul>
                                            {chapter.lessons.map((lesson, lessonIndex) => (
                                                <li key={lessonIndex}>
                                                    <p><strong>{lesson.lessonName}</strong> ({lesson.duration} phút)</p>
                                                    <p>{lesson.description}</p>
                                                    <a href={lesson.videoUrl} target="_blank" rel="noopener noreferrer">Xem video</a>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CoursesList;
