import moment from "moment";

export const getFormatDate = (date?: string): string => {
  if (!date) {
    return "-";
  }
  return moment(date).format("DD/MM/YYYY");
};
