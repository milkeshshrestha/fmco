export type ResponseObject = {
  message: String;
  data?: any;
  success: boolean;
  fields: Record<string, string> | undefined;
  error?: {};
};
