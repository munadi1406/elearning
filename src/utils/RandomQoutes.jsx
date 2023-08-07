import PropTypes from 'prop-types'

export default function RandomQoutes({qouteNumber}) {
    const qoutes = {
        quote1: "Ngoding Aja Dulu Jagonya Belakangan",
        quote2: "Inovasi memisahkan pemimpin dari pengikut.",
        quote3: "Teknologi ubah hidup manusia secara mendalam.",
        quote4: "Kreativitas mengalahkan kesempurnaan, lampaui batas diri.",
        quote5: "Mimpi besar menggerakkan kemajuan teknologi masa depan.",
        quote6: "Ciptakan hari esok dengan teknologi hari ini.",
        quote7: "Imajinasi menginspirasi inovasi tanpa batas waktu.",
        quote8: "Teknologi sebagai alat, manusia yang menentukan arahnya.",
        quote9: "Ketekunan adalah kunci keberhasilan dalam teknologi.",
        quote10: "Sederhana, kuat, dan revolusioner - teknologi hebat.",
        quote11: "Tantangan memunculkan kreativitas dan inovasi yang tak terduga."
    }
  return (
    <>
        {qoutes[`quote${qouteNumber}`]}
    </>
  )
}
RandomQoutes.propTypes={
    qouteNumber:PropTypes.number.isRequired
}
