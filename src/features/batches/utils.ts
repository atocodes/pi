export enum BATCHSTATUS {
  ExpiringSoon = "Expiring Soon",
  Expired = "Expired",
  OK = "OK",
}

const MINEXPRIEDATE = -60;

export function getBatchStatus(
  manufacturedDate: Date | string,
  expiredDate: Date | string,
): BATCHSTATUS {
  const expDate = new Date(expiredDate).getTime();
  const manuDate = new Date(manufacturedDate).getTime();

  const diffInDays = Math.floor((manuDate - expDate) / (1000 * 60 * 60 * 24));
  if (diffInDays >= MINEXPRIEDATE) {
    return BATCHSTATUS.ExpiringSoon;
  } else if (diffInDays >= 0) {
    return BATCHSTATUS.Expired;
  }
  return BATCHSTATUS.OK;
}

export function formatDateForInput(date: Date | string) {
  return new Date(date).toISOString().split("T")[0];
}
