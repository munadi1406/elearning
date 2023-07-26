import { motion } from "framer-motion";
import { useState } from "react";
import { HiOutlineSwitchHorizontal, HiSearch } from "react-icons/hi";
import CardCourse from "../../components/home/CardCourse";


const MyCourse = () => {
  const [switchCoursesActive, setSwitchCoursesActive] = useState(true);
  // true === my courses
  // false === courses

  const handleSwitch = () => {
    setSwitchCoursesActive(!switchCoursesActive);
  };

  const courseData = [
    {
      course: "Belajar Javascript",
      desc: "Ini adalah kelas untuk mempelajari dasar-dasar JavaScript. Anda akan belajar tentang sintaks dasar, tipe data, struktur kendali, dan fungsi. Selain itu, Anda juga akan memahami konsep pemrograman berorientasi objek dalam konteks JavaScript. Dengan keterampilan JavaScript yang kuat, Anda akan dapat membuat situs web yang interaktif dan dinamis.",
      pengajar: "Jamal",
    },
    {
      course: "Web Development 101",
      desc: "Kursus ini membawa Anda dari pemula ke tingkat lanjutan dalam pengembangan web. Anda akan memulai dengan memahami dasar-dasar HTML dan CSS. Kemudian Anda akan belajar tentang front-end development dengan JavaScript dan kerangka kerja populer seperti React. Selain itu, Anda akan memperoleh pengetahuan tentang backend development menggunakan Node.js dan Express.",
      pengajar: "Sarah",
    },
    {
      course: "Python Fundamentals",
      desc: "Python adalah salah satu bahasa pemrograman paling populer dan kuat. Kursus ini akan membantu Anda menguasai dasar-dasar Python. Anda akan belajar tentang variabel, tipe data, struktur kontrol, fungsi, dan modul. Selain itu, Anda akan diperkenalkan dengan konsep pemrograman berorientasi objek dan pemrograman fungsional dalam Python.",
      pengajar: "John",
    },
    {
      course: "Data Science with R",
      desc: "Data Science menggunakan R sebagai bahasa pemrograman dan lingkungan analisisnya telah menjadi tren yang berkembang pesat. Dalam kursus ini, Anda akan mempelajari statistik dasar, manipulasi data, visualisasi data, serta penerapan algoritma Machine Learning menggunakan R. Kursus ini akan memberi Anda keahlian yang diperlukan untuk menjadi seorang Data Scientist yang handal.",
      pengajar: "Emily",
    },
    {
      course: "React for Beginners",
      desc: "React adalah salah satu kerangka kerja JavaScript paling populer untuk membangun antarmuka pengguna yang interaktif dan dinamis. Dalam kursus ini, Anda akan memahami dasar-dasar React, konsep komponen, state, dan props. Selain itu, Anda akan belajar tentang React Hooks dan bagaimana mengintegrasikan React dengan backend menggunakan API.",
      pengajar: "Michael",
    },
    {
      course: "Introduction to HTML",
      desc: "HTML adalah bahasa markup dasar yang digunakan untuk membuat struktur dan konten situs web. Kursus ini akan memberikan pengantar lengkap tentang HTML, termasuk tag, atribut, gambar, tautan, tabel, dan formulir. Anda akan belajar cara membuat halaman web yang dapat diakses dari berbagai perangkat dan browser.",
      pengajar: "Emma",
    },
    {
      course: "CSS Masterclass",
      desc: "CSS adalah bahasa gaya yang digunakan untuk mengatur tampilan dan tata letak halaman web. Dalam kursus ini, Anda akan mempelajari CSS dari dasar hingga tingkat lanjutan. Anda akan belajar tentang selektor, box model, fleksibilitas, grid, animasi, dan transisi CSS. Setelah menyelesaikan kursus ini, Anda akan menjadi ahli dalam desain tampilan web yang menarik.",
      pengajar: "William",
    },
    {
      course: "Java Programming",
      desc: "Java adalah bahasa pemrograman yang populer dan kuat yang digunakan untuk berbagai aplikasi, mulai dari perangkat lunak desktop hingga aplikasi seluler dan backend web. Kursus ini akan membawa Anda melalui konsep dasar Java, seperti variabel, tipe data, struktur kontrol, dan objek. Anda juga akan belajar tentang pemrograman berorientasi objek dan bagaimana menerapkannya dalam Java.",
      pengajar: "Alex",
    },
    {
      course: "Machine Learning Basics",
      desc: "Machine Learning adalah cabang dari kecerdasan buatan yang berfokus pada pengembangan sistem yang dapat belajar dari data. Kursus ini akan memperkenalkan Anda pada konsep-konsep dasar Machine Learning, seperti supervised learning, unsupervised learning, dan reinforcement learning. Anda akan belajar tentang berbagai algoritma Machine Learning dan bagaimana mengimplementasikannya menggunakan Python.",
      pengajar: "Sophia",
    },
    {
      course: "Node.js Fundamentals",
      desc: "Node.js adalah platform runtime yang dibangun di atas mesin JavaScript V8 yang memungkinkan Anda untuk menjalankan kode JavaScript di sisi server. Dalam kursus ini, Anda akan memahami dasar-dasar Node.js, modul built-in, dan cara mengelola dependensi menggunakan npm. Anda juga akan belajar tentang Express, kerangka kerja web yang populer untuk Node.js, dan bagaimana membuat API yang efisien menggunakan Node.js.",
      pengajar: "Daniel",
    },
  ];

  const myCourseData = [
    {
      course: "Introduction to Computer Science",
      desc: "This course introduces the fundamentals of computer science, including algorithms, data structures, programming languages, and problem-solving techniques.",
      pengajar: "Jamal",
    },
    {
      course: "Calculus I",
      desc: "This course covers the basics of calculus, including limits, derivatives, and integrals of functions. It is essential for various fields such as engineering and physics.",
      pengajar: "Jamal",
    },
    {
      course: "Principles of Economics",
      desc: "This course provides an overview of microeconomics and macroeconomics, covering topics such as supply and demand, market structures, and national income.",
      pengajar: "Jamal",
    },
    {
      course: "Introduction to Psychology",
      desc: "This course introduces the scientific study of behavior and mental processes. Topics include perception, learning, memory, and psychological disorders.",
      pengajar: "Jamal",
    },
    {
      course: "World History",
      desc: "This course explores major events, developments, and societies throughout world history, from ancient civilizations to the modern era.",
      pengajar: "Jamal",
    },
    {
      course: "Introduction to Sociology",
      desc: "This course examines the basic concepts of sociology, including social institutions, culture, socialization, and the impact of social forces on individuals.",
      pengajar: "Jamal",
    },
    {
      course: "English Literature",
      desc: "This course studies significant works of English literature, including poetry, prose, and drama, from different historical periods and literary movements.",
      pengajar: "Jamal",
    },
    {
      course: "Environmental Science",
      desc: "This course explores environmental issues, ecological systems, natural resources, and sustainable practices to address environmental challenges.",
      pengajar: "Jamal",
    },
    {
      course: "Introduction to Business Management",
      desc: "This course provides an overview of business management principles, organizational behavior, marketing, finance, and human resources management.",
      pengajar: "Jamal",
    },
    {
      course: "Public Speaking",
      desc: "This course helps students overcome the fear of public speaking and improve their presentation skills, including effective techniques for delivering speeches.",
      pengajar: "Jamal",
    },
  ];

  return (
    <div>
      <div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
          <div className="flex md:justify-start justify-between items-center gap-2">
            <h1 className="text-2xl text-blue1 font-sans font-semibold ">
              {switchCoursesActive ? "My Courses" : "Courses"} /
            </h1>
            <motion.button
              whileTap={{ scale: 0.9, opacity: 0.8 }}
              className="bg-blue2 text-white font-semibold font-sans text-lg p-2 rounded-md flex justify-center items-center gap-2"
              onClick={handleSwitch}
            >
              Switch To {switchCoursesActive ? "Courses" : "My Courses"}
              <span>
                <HiOutlineSwitchHorizontal />
              </span>
            </motion.button>
          </div>
          <div className="flex md:justify-end justify-center items-center">
            <div className="flex md:w-max w-full md:justify-center justify-between items-center border-blue1 border-2 py-1 px-2 rounded-md">
              <input type="search" placeholder="Search..." className="border-none outline-none bg-transparent h-full" />
              <motion.div whileTap={{scale:0.9}} className="bg-blue1 rounded-md p-1">
                <HiSearch color="white"/>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="py-2 ">
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2">
            {switchCoursesActive
              ? courseData.map((e, i) => (
                <CardCourse
                  key={i}
                  course={e.course}
                  desc={e.desc}
                  pengajar={e.pengajar}
                />
              ))
              : myCourseData.map((e, i) => (
                <CardCourse
                  key={i}
                  course={e.course}
                  desc={e.desc}
                  pengajar={e.pengajar}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCourse;
