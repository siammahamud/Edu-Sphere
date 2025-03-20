import React from "react";
import CourseDetailsIntro from "./_components/CourseDetailsIntro";
import { getCourseDetails } from "@/controllers/course-controller";
import Testimonials from "./_components/Testimonials";
import RelatedCourses from "./_components/RelatedCourses";
import CourseCurriculum from "./_components/CourseCurriculum";
import CourseDetails from "./_components/CourseDetails";

export async function CourseDetailsPage({ params: { id } }) {
  const course = await getCourseDetails(id);
  return (
    <div className="py-5 px-[4vw]">
      <CourseDetailsIntro
        title={course?.title}
        subtitle={course.subtitle}
        thumbnail={course.thumbnail}
      />
      <section>
        <CourseCurriculum course={course} />
        <CourseDetails course={course}/>
      </section>
      <section>
        {course.testimonials.length > 0 && (
          <Testimonials testimonials={course?.testimonials} />
        )}
      </section>
      <section>
        <RelatedCourses />
      </section>
    </div>
  );
}

export default CourseDetailsPage;
