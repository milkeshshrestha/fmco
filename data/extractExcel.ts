import * as xlsx from "xlsx";
const getDataFromExcel = async (file: File) => {
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  // Read the file using xlsx
  const workbook = xlsx.read(buffer, { type: "buffer" });
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const data = xlsx.utils.sheet_to_json(sheet, {
    header: 1,
    defval: null, // to consider empty cell value
    blankrows: false,
  });
  return data;
};
export default getDataFromExcel;
