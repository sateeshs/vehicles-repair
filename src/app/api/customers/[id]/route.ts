import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest,
  { params }: { params: { slug: string } }) {
    const slug = params.slug // 'a', 'b', or 'c'
    const requestHeaders = new Headers(request.headers)
    const token = request.cookies.get('token');
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id')
    /**  const data = await res.json()
 
  return NextResponse.json(data) */
}
export async function POST(request: Request) {}
export async function DELETE(request: Request) {}

// export {
    
// }