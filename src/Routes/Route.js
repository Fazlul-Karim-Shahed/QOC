import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import About from "../Pages/About/About";
import AdminDashboard from "../Pages/Admin/AdminDashboard/AdminDashboard";
import AdminDemoClass from "../Pages/Admin/AdminDemoClass/AdminDemoClass";
import AdminNotice from "../Pages/Admin/AdminNotice/AdminNotice";
import AdminResource from "../Pages/Admin/AdminResource/AdminResource";
import Assignment from "../Pages/Admin/Assignment/Assignment";
import AdminBatch from "../Pages/Admin/Batch/AdminBatch";
import AdminBatchDashboard from "../Pages/Admin/Batch/AdminBatchDashboard";
import BroadQuestion from "../Pages/Admin/BroadQuestion/BroadQuestion";
import Chapter from "../Pages/Admin/Course/Chapter";
import Course from "../Pages/Admin/Course/Course";
import Curriculum from "../Pages/Admin/Course/Curriculum";
import Module from "../Pages/Admin/Course/Module";
import Subject from "../Pages/Admin/Course/Subject";
import Exam from "../Pages/Admin/Exam/Exam";
import ExamDetails from "../Pages/Admin/Exam/ExamDetails";
import FileSystem from "../Pages/Admin/FileSystem/FileSystem";
import Mcq from "../Pages/Admin/Mcq/Mcq";
import Student from "../Pages/Admin/Student/Student";
import Teacher from "../Pages/Admin/Teacher/Teacher";
import Transaction from "../Pages/Admin/Transaction/Transaction";
import TuitionAdmin from "../Pages/Admin/Tuition/TuitionAdmin";
import UpcomingCourse from "../Pages/Admin/UpcomingCourse/UpcomingCourse";
import Cookies from "../Pages/Cookies/Cookies";
import FAQ from "../Pages/FAQ/FAQ";
import FindTuition from "../Pages/FindTuition/FindTuition";
import FindTutors from "../Pages/FindTutors/FindTutors";
import TutorDetails from "../Pages/FindTutors/TutorDetails";
import GetInTouch from "../Pages/GetInTouch/GetInTouch";
import Home from "../Pages/Home/Home";
import Lesson from "../Pages/Lesson/Lesson";
import Login from "../Pages/Login/Login";
import Logout from "../Pages/Logout/Logout";
import Cancel from "../Pages/Payment/Cancel";
import Fail from "../Pages/Payment/Fail";
import Success from "../Pages/Payment/Success";
import PrivacyPolicy from "../Pages/PrivacyPolicy/PrivacyPolicy";
import RequestDemo from "../Pages/RerquestDemo/RequestDemo";
import Resource from "../Pages/Resource/Resource";
import SignUp from "../Pages/SignUp/SignUp";
import AssignmentStudent from "../Pages/Student/Assignment/Assignment";
import Batch from '../Pages/Student/Batch/Batch';
import BatchDashboard from "../Pages/Student/Batch/BatchDashboard";
import MyBatch from "../Pages/Student/Batch/MyBatch";
import BatchPaperSolution from "../Pages/Student/BatchPaperSolution/BatchPaperSolution";
import History from "../Pages/Student/History";
import Payment from "../Pages/Student/Payment/Payment";
import StudentChapter from "../Pages/Student/StudentCourse/StudentChapter";
import StudentCourse from "../Pages/Student/StudentCourse/StudentCourse";
import StudentCurriculum from "../Pages/Student/StudentCourse/StudentCurriculum";
import StudentModule from "../Pages/Student/StudentCourse/StudentModule";
import StudentSubject from "../Pages/Student/StudentCourse/StudentSubject";
import StudentDashboard from "../Pages/Student/StudentDashboard/StudentDashboard";
import StudentAllExam from "../Pages/Student/StudentExam/StudentAllExam";
import StudentExam from "../Pages/Student/StudentExam/StudentExam";
import CreateTuition from '../Pages/Student/Tuition/CreateTuition';
import Tutor from '../Pages/Student/Tutor/Tutor';
import TeacherBatch from "../Pages/Teacher/TeacherBatch/TeacherBatch";
import TeacherBatchDashboard from "../Pages/Teacher/TeacherBatch/TeacherBatchDashboard";
import TeacherChapter from "../Pages/Teacher/TeacherCourse/TeacherChapter";
import TeacherCourse from "../Pages/Teacher/TeacherCourse/TeacherCourse";
import TeacherCurriculum from "../Pages/Teacher/TeacherCourse/TeacherCurriculum";
import TeacherModule from "../Pages/Teacher/TeacherCourse/TeacherModule";
import TeacherSubject from "../Pages/Teacher/TeacherCourse/TeacherSubject";
import TeacherDashboard from "../Pages/Teacher/TeacherDashboard/TeacherDashboard";
import TeacherPayment from "../Pages/Teacher/TeacherPayment/TeacherPayment";
import TuitionTeacher from "../Pages/Teacher/Tuition/TuitionTeacher";
import TermsConditions from "../Pages/TermsCondition/TermsConditions";
import AdminPrivateRouter from "./Private/AdminPrivateRouter";
import StudentPrivateRouter from "./Private/StudentPrivateRouter";
import TeacherPrivateRouter from "./Private/TeacherPrivateRouter";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/lesson",
        element: <Lesson></Lesson>,
      },
      {
        path: "/logout",
        element: <Logout></Logout>
      },

      {
        path: "/request-demo",
        element: <RequestDemo />
      },

      {
        path: "/find-tuition",
        element: <FindTuition />,
      },

      {
        path: "/success",
        element: <Success />,
      },

      {
        path: "/cancel",
        element: <Cancel />,
      },
      {
        path: "/failure",
        element: <Fail />,
      },
      {
        path: "/resource",
        element: <Resource />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/get-in-touch",
        element: <GetInTouch />,
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
      {
        path: "/privacy-and-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/cookies",
        element: <Cookies />,
      },
      {
        path: "/terms-and-conditions",
        element: <TermsConditions />,
      },
      {
        path: "/find-tutors",
        element: <FindTutors />,
      },
      {
        path: "/tutor-details/:id",
        element: <TutorDetails />,
      },

      {
        path: "/admin-dashboard",
        element: <AdminPrivateRouter>  </AdminPrivateRouter>,
        children: [{

          path: "",
          element: <AdminDashboard />,
        },
        {

          path: "exam",
          element: <Exam />,
        },

        {
          path: "teacher",
          element: <Teacher />,
        },
        {
          path: "student",
          element: <Student />,
        },
        {
          path: "course",
          element: <Course />,
        },
        {
          path: "tuition",
          element: <TuitionAdmin />,
        },

        {
          path: "curriculum",
          element: <Curriculum />,
        },
        {
          path: "subject",
          element: <Subject />,
        },
        {
          path: "chapter",
          element: <Chapter />,
        },
        {
          path: "module",
          element: <Module />,
        },
        {
          path: "file-system",
          element: <FileSystem />,
        },


        {
          path: "mcq",
          element: <Mcq />,
        },
        {
          path: "broad-question",
          element: <BroadQuestion />,
        },
        {
          path: "exam-details/:examId",
          element: <ExamDetails />,
        },
        {
          path: "assignment",
          element: <Assignment />,
        },
        {
          path: "batch",
          element: <AdminBatch />,
        },
        {
          path: "batch/dashboard/:batchId",
          element: <AdminBatchDashboard />,
        },
        {
          path: "resource",
          element: <AdminResource />,
        },
        {
          path: "demo-class",
          element: <AdminDemoClass />,
        },
        {
          path: "transaction",
          element: <Transaction />,
        },
        {
          path: "upcoming-course",
          element: <UpcomingCourse />,
        },
        {
          path: "notice",
          element: <AdminNotice />,
        },
        ]
      },


      {
        path: "/teacher-dashboard",
        element: <TeacherPrivateRouter> </TeacherPrivateRouter>,
        children: [
          {
            path: "",
            element: <TeacherDashboard />,
          },
          {
            path: "student",
            element: '<Student />',
          },
          {
            path: "tuition",
            element: <TuitionTeacher />,
          },
          {
            path: "course",
            element: <TeacherCourse />,
          },

          {
            path: "curriculum",
            element: <TeacherCurriculum />,
          },
          {
            path: "subject",
            element: <TeacherSubject />,
          },
          {
            path: "chapter",
            element: <TeacherChapter />,
          },
          {
            path: "module",
            element: <TeacherModule />,
          },
          {
            path: "batch",
            element: <TeacherBatch />,
          },
          {
            path: "batch/dashboard/:batchId",
            element: <TeacherBatchDashboard />,
          },
          {
            path: "payment",
            element: <TeacherPayment />,
          },


        ]
      },
      {
        path: "/student-dashboard",
        element: <StudentPrivateRouter>  </StudentPrivateRouter>,
        children: [
          {
            path: "",
            element: <StudentDashboard />,
          },
          {
            path: "tutor",
            element: <Tutor />,
          },
          {
            path: "batch",
            element: <Batch />,
          },
          {
            path: "create-tuition",
            element: <CreateTuition />,
          },

          {
            path: "course",
            element: <StudentCourse />,
          },

          {
            path: "curriculum",
            element: <StudentCurriculum />,
          },
          {
            path: "subject",
            element: <StudentSubject />,
          },
          {
            path: "chapter",
            element: <StudentChapter />,
          },
          {
            path: "module",
            element: <StudentModule />,
          },
          {
            path: "all-exam",
            element: <StudentAllExam />,
          },
          {
            path: "exam",
            element: <StudentExam />,
          },
          {
            path: "assignment",
            element: <AssignmentStudent />,
          },

          {
            path: "my-batch",
            element: <MyBatch />,
          },
          {
            path: "my-batch/dashboard/:batchId",
            element: <BatchDashboard />,
          },
          {
            path: "batch-paper-solution",
            element: <BatchPaperSolution />,
          },
          {
            path: "payment",
            element: <Payment />,
          },

          {
            path: "history",
            element: <History />,
          },

        ]
      },
      {
        path: "*",
        element: (
          <div className="text-3xl flex items-center justify-center h-[50vh]">
            Page Not found
          </div>
        ),
      },
    ],
  },
]);
