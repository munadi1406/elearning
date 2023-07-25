import CardPost from "../../components/home/CardPost";

export default function Index() {
  const samplePosts = [
    {
      course: "Belajar Javascript",
      date: "2023-07-25",
      content: "Kerjakan Tugas Javascript Untuk Looping Sebuah Array",
    },
    {
      course: "Belajar HTML",
      date: "2023-07-26",
      content: "Membuat Struktur Dasar Halaman Web dengan HTML",
    },
    {
      course: "Belajar CSS",
      date: "2023-07-27",
      content: "Mengatur Tampilan Halaman Web dengan CSS",
    },
    {
      course: "Belajar React",
      date: "2023-07-28",
      content: "Membangun Aplikasi Web Interaktif dengan React",
    },
    {
      course: "Belajar Node.js",
      date: "2023-07-29",
      content: "Membangun Backend Aplikasi Web dengan Node.js",
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center w-full gap-2">
      {samplePosts.map((e, i) => (
        <CardPost key={i} course={e.course} date={e.date} content={e.content} />
      ))}
    </div>
  );
}
