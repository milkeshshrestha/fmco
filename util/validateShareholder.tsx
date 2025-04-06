import { shareholderDividendSearchSchema } from "@/zod.schema/shareholderSchema";

const validateShareholder = (shareholderNumber: any, dateOfBirth: any) => {
  const searchSchema = shareholderDividendSearchSchema;
  const validationResponse = searchSchema.safeParse({
    number: shareholderNumber,
    dob: dateOfBirth,
  });
  //console.log(validationResponse);
  return validationResponse;
};
export default validateShareholder;
