import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextRequest, NextResponse } from 'next/server';

const googleApiKey = process.env.GOOGLE_API_KEY;
if (!googleApiKey) {
  throw new Error('GOOGLE_API_KEY is not defined');
}

const genAI = new GoogleGenerativeAI(googleApiKey);

export const POST = async (req: NextRequest) => {
  // Add CORS headers allowing only your frontend domain
  const corsHeaders = {
    'Access-Control-Allow-Origin': 'http://localhost:3000',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  // Handle preflight (OPTIONS) requests
  if (req.method === 'OPTIONS') {
    return NextResponse.json({}, { headers: corsHeaders, status: 200 });
  }

  const { prompt } = await req.json();

  if (!prompt) {
    return NextResponse.json(
      { error: 'Prompt is required' },
      { headers: corsHeaders, status: 400 }
    );
  }

  const model = genAI.getGenerativeModel({
    model: 'gemini-1.5-flash',
  });

  try {
    const result = await model.generateContent(prompt);
    const responseText = result.response.text
      ? result.response.text()
      : JSON.stringify(result.response);

    return NextResponse.json(
      { response: responseText },
      { headers: corsHeaders, status: 200 }
    );
  } catch (e) {
    console.error('Error occurred while generating AI content', e);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { headers: corsHeaders, status: 500 }
    );
  }
};
