export interface Lesson {
    lessonName: string;
    duration: number;
    description: string;
    videoUrl: string;
}

export interface Chapter {
    chapterName: string;
    lessons: Lesson[];
}

export interface Course {
    image: string;
    id: string;
    description: string;
    courseName: string;
    courseType: string;
    courseInfo: string;
    chapters: Chapter[];
}