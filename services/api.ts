import { FormData, ApiResponse } from '../types';

export const submitForm = async (data: FormData): Promise<ApiResponse> => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1500));

  console.log('Form payload sent to backend:', data);

  // Simulate success
  // In a real Next.js app, this would fetch('/api/submit', { method: 'POST', body: JSON.stringify(data) })
  return {
    success: true,
    message: 'Solicitação recebida com sucesso.',
  };
};