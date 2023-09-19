import moment from "moment";

export function calculateTimeAgo(createdAt) {
  const postDate = moment(createdAt);
  const currentDate = moment();
  const duration = moment.duration(currentDate.diff(postDate));

  const years = duration.years();
  const months = duration.months();
  const days = duration.days();
  const hours = duration.hours();
  const minutes = duration.minutes();
  const seconds = duration.seconds();

  if (years > 0) {
    return `${years} tahun yang lalu`;
  } else if (months > 0) {
    return `${months} bulan yang lalu`;
  } else if (days > 0) {
    return `${days} hari yang lalu`;
  } else if (hours > 0) {
    return `${hours} jam yang lalu`;
  } else if (minutes > 0) {
    return `${minutes} menit yang lalu`;
  } else {
    return `${seconds} detik yang lalu`;
  }
}
export function calculateTimeRemaining(endTime) {
  const currentTime = moment();
  const endTimeDate = moment(endTime);

  // Periksa jika waktu sudah habis
  if (currentTime.isAfter(endTimeDate)) {
    return "Waktu Pengerjaan Quiz Sudah Habis";
  }

  const duration = moment.duration(endTimeDate.diff(currentTime));
  const days = duration.days();
  const hours = duration.hours();
  const minutes = duration.minutes();
  const seconds = duration.seconds();

  let timeRemaining = "";

  if (days > 0) {
    timeRemaining += `${days} hari `;
  }
  if (hours > 0) {
    timeRemaining += `${hours} jam `;
  }
  if (minutes > 0) {
    timeRemaining += `${minutes} menit `;
  }
  if (seconds > 0) {
    timeRemaining += `${seconds} detik `;
  }

  return `Sisa waktu: ${timeRemaining.trim()}`;
}
