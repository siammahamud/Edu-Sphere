import React from "react";
import CourseDetailsIntro from "./_components/CourseDetailsIntro";
import { getCourseDetails } from "@/controllers/course-controller";

export async function CourseDetailsPage({ params: { id } }) {
  const course = await getCourseDetails(id);
  return (
    <div>
      <CourseDetailsIntro
        title={course?.title}
        subtitle={course.subtitle}
        thumbnail={course.thumbnail}
      />
    </div>
  );
}

export default CourseDetailsPage;
