import CardCourseWork from "../../components/main/CardCourseWork";

const CourseWork = () => {
  const courseData = [
    {
      course: "Belajar Javascript",
      desc: "Tugas 1: Implementasikan fungsi dalam JavaScript untuk menghitung luas dan keliling lingkaran. Anda diharapkan menggunakan formula yang tepat dan mengikuti standar penulisan kode yang baik. Pastikan untuk menyertakan komentar yang jelas dan dokumentasi tentang fungsi yang Anda buat. Selain itu, lakukan pengujian terhadap fungsi Anda dengan berbagai kasus uji untuk memastikan keakuratannya. Anda dapat menggunakan metode rekursif atau iteratif dalam perhitungan lingkaran ini. Jika Anda menghadapi kesulitan, jangan ragu untuk berkonsultasi dengan sesama peserta atau pengajar kami, Jamal. Ingat, latihan ini bertujuan untuk memperkuat pemahaman Anda tentang bahasa JavaScript dan konsep matematis yang terkait.",
      pengajar: "Jamal",
      fromDate: "08:00 26-07-2023",
      toDate: "09:00 26-07-2023",
    },
    {
      course: "Web Development 101",
      desc: "Tugas 2: Desain halaman beranda situs web menggunakan HTML, CSS, dan JavaScript dengan tema bebas. Anda diminta untuk menggambarkan kreativitas dan keahlian Anda dalam mengatur tata letak, warna, dan elemen-elemen interaktif. Selain itu, pastikan situs web Anda responsif dan dapat diakses dengan baik pada berbagai perangkat, seperti desktop, tablet, dan ponsel. Anda bebas menggunakan kerangka kerja front-end seperti React atau Vue.js jika Anda ingin menunjukkan kemampuan dalam penggunaannya. Tugas ini juga mencakup implementasi animasi dan efek transisi yang menarik untuk meningkatkan pengalaman pengguna. Jangan lupa untuk menerapkan best practices dalam pengembangan web dan mengikuti pola desain yang baik. Jika Anda membutuhkan bantuan, instruktur kami, Sarah, akan dengan senang hati membantu Anda menyelesaikan tugas ini.",
      pengajar: "Sarah",
      fromDate: "08:00 26-07-2023",
      toDate: "09:00 26-07-2023",
    },
  ];

  return (
    <div>
      {courseData.map((e, i) => (
        <CardCourseWork
          key={i}
          course={e.course}
          pengajar={e.pengajar}
          desc={e.desc}
          fromDate={e.fromDate}
          toDate={e.toDate}
        />
      ))}
    </div>
  );
};

export default CourseWork;
