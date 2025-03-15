import { Button } from "@/components/ui/button";
import  {getCourses}  from "@/controllers/course-controller";

export default async function  Home() {
  const courses = await getCourses();
  console.log(courses);
  return (
    <div className="text-4xl font-extrabold text-red-600">
      Hello This is home page
      <Button>Log In </Button>
    </div>
  );
}
