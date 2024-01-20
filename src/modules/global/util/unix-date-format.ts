import moment from 'moment';
import 'moment/locale/id';

moment.locale('id');

export const UnixDateBahasa = (date: number) => {
  if (date) {
    const tempDate = new Date(date * 1000);
    const months = [
      'Januari',
      'Februari',
      'Maret',
      'April',
      'Mei',
      'Juni',
      'Juli',
      'Agustus',
      'September',
      'Oktober',
      'November',
      'Desember',
    ];
    const tahun = tempDate.getFullYear();
    const bulan = months[tempDate.getMonth()]?.slice(0, 3);
    const tanggal = tempDate.getDate();
    const finalDate = `${tanggal} ${bulan} ${tahun} `;
    return finalDate;
  }
  return '';
};

export const UnixtoYear = (date: number) => {
  if (date) {
    const tempDate = new Date(date * 1000);
    // const finalDate = tempDate.getTimezoneOffset;
    const tahun = tempDate.getFullYear();
    return tahun;
  }
  return '';
};

export const UnixtoDate = (date: number) => {
  if (date) {
    const tempDate = new Date(date * 1000);
    // const finalDate = tempDate.getTimezoneOffset;
    const tahun = tempDate.getFullYear();
    const bulan =
      String(tempDate.getMonth())?.length > 1
        ? tempDate.getMonth() + 1
        : `0${tempDate.getMonth() + 1}`;
    const tanggal =
      String(tempDate.getDate())?.length > 1
        ? tempDate.getDate()
        : `0${tempDate.getDate()}`;
    const finalDate = `${tahun}-${bulan}-${tanggal}`;
    return finalDate;
  }
  return '';
};

export const DateToUnix = (date: string) => {
  if (date) {
    const tempDate = new Date(date);

    // const timeInMillisecond = tempDate.getTime();

    const unixTimestamp = Math.floor(tempDate.getTime() / 1000);
    return unixTimestamp;
  }
  return '';
};
