// src/hooks/useCourses.ts

import { useState, useEffect } from 'react';
import axios from 'axios';
import { Course } from '../util/ulti';


const useCourses = () => {
    const [courses, setCourses] = useState<Course[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axios.get('http://localhost:8080/v1/api/courses');
                setCourses(response.data);
            } catch (err) {
                setError('Không thể tải dữ liệu khóa học.');
            } finally {
                setLoading(false);
            }
        };

        fetchCourses();
    }, []);

    return { courses, loading, error };
};

export default useCourses;
