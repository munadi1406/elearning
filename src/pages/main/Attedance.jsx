import CardAttedance from "../../components/main/CardAttedance";

const Attedance = () => {
  const dataAttedance = [
    {
      course: "Jaringan Syaraf Tiruan",
      pengajar: "Jamal",
      fromDate: "08:00 26-07-2023",
      toDate: "09:00 26-07-2023",
      attedance: [
        {
          opsi: "GPS",
        },
        {
          opsi: "QR Code",
        },
        {
          opsi: "Token",
        },
      ],
    },
    {
      course: "Sistem Basis Data",
      pengajar: "Jamal",
      fromDate: "08:00 26-07-2023",
      toDate: "09:00 26-07-2023",
      attedance: [
        {
          opsi: "GPS",
        },
        {
          opsi: "Token",
        },
      ],
    },
  ];


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 ">
      {dataAttedance.map((e, i) => (
        <CardAttedance course={e.course} dateFrom={e.fromDate} toDate={e.toDate} opsi={e.attedance} pengajar={e.pengajar} key={i}/>
      ))}
    </div>
  );
};

export default Attedance;
