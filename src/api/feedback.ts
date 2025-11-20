const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api';

export interface FeedbackRequest {
  feedback: string;
  email: string;
}

export interface FeedbackResponse {
  id: number;
  content: string;
  email: string;
  createdAt: string;
}

export const submitFeedback = async (
  data: FeedbackRequest,
): Promise<FeedbackResponse> => {
  const response = await fetch(`${API_BASE_URL}/feedback`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || '의견 제출에 실패했습니다.');
  }

  return response.json();
};
