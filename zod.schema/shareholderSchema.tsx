import { z } from "zod";
const yearRegex = /^(19[0-9]{2}|20[0-7][0-9]|208[0-1])$/;
const monthRegex = /^(0[1-9]|1[0-2])$/;
const dayRegex = /^(0[1-9]|[12][0-9]|3[01])$/;

const dateSchema = z.string({ message: "Date is required." }).refine(
  (dateString) => {
    // // Check if the date matches the format YYYY-MM-DD
    // const match = value.match(/^(\d{4})-(\d{2})-(\d{2})$/);
    // if (!match) return false;

    // const [_, year, month, day] = match;

    // // Validate year, month, and day separately
    // return yearRegex.test(year) && monthRegex.test(month) && dayRegex.test(day);
    // Check format using regex: yyyy-mm-dd
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    if (!regex.test(dateString)) {
      return false;
    }

    // Parse the date parts
    const [year, month, day] = dateString.split("-").map(Number);

    // Create a Date object
    const date = new Date(year, month - 1, day); // Month is 0-based in JS

    // Check if the date components match (to catch invalid dates like 2023-02-30)
    return (
      date.getFullYear() === year &&
      date.getMonth() === month - 1 &&
      date.getDate() === day
    );
  },
  {
    message:
      "Invalid date format (expected YYYY-MM-DD, with valid ranges for year, month, and day)",
  }
);
export const shareholderDividendSearchSchema = z.object({
  number: z.string().min(1, { message: "Enter valid shareholder number" }),
  dob: dateSchema,
});
export const shareholderSchema = z.object({
  id: z.number().optional(),
  name: z.string().min(1, { message: "Shareholder name is required" }),
  type: z.enum(["Individual", "Institution"]),
  number: z.coerce
    .number({ message: "Shareholder number should be number " })
    .min(1, { message: "Shareholder unique number is required" }),
  ctzOrRegNumber: z.string().nullable(),
  ctzIssueDateOrRegDate: z.string().date().nullable(),
  fatherName: z
    .string()
    .min(1, { message: "Father name is required" })
    .nullable(),
  address: z.string().nullable(),
  contact: z.string().nullable(),
  bankName: z.string().nullable(),
  bankAccount: z.string().nullable(),
  remarks: z.string().nullable(),
});
