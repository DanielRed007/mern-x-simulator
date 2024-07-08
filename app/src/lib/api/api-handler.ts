interface ApiHandlerProps {
  endpoint: string;
  method: string;
  headers: { [key: string]: string };
  requestBody?: { [key: string]: any; action?: string };
}

export const apiHandler = async ({
  endpoint,
  method,
  headers,
  requestBody,
}: ApiHandlerProps) => {
  return await fetch(endpoint, {
    method,
    headers,
    body: JSON.stringify(requestBody),
  });
};
