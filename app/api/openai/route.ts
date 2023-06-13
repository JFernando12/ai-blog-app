import { NextRequest, NextResponse } from 'next/server';
import { Configuration, OpenAIApi, CreateChatCompletionResponse } from 'openai';

const configuration = new Configuration({
  organization: 'org-iG6qRp6DwerFYA0LUKylMDx2',
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export async function POST(request: NextRequest, response: any) {
  try {
    const { title, role } = await request.json();
    const aiResponse: any = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content: `Create 3 line blog post with html tags based on this title: ${title}`,
        },
        {
          role: 'system',
          content: `${
            role || 'I am a helpful assistant'
          }. Write with html tags.`,
        },
      ],
    });

    return NextResponse.json(
      {
        content: aiResponse.data.choices[0].message?.content,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('request error', error);
    NextResponse.json({ error: 'error updating post' }, { status: 500 });
  }
}
