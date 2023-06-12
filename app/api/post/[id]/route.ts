import { NextResponse, NextRequest } from 'next/server';
import { prisma } from '../../clients';

type Params = {
  params: {
    id: string;
  };
};

export async function PATCH(request: NextRequest, { params }: Params) {
  const { id } = params;
  try {
    const { title, content } = await request.json();

    const post = await prisma.post.update({
      where: { id },
      data: { title, content },
    });

    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Error updating post' }, { status: 500 });
  }
}
