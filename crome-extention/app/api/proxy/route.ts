import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { url, method, data, authToken, cookies } = body;

    const headers: Record<string, string> = {
      'accept': '*/*',
      'accept-language': 'en-US,en;q=0.9',
      'content-type': 'application/json',
      'origin': 'https://chat.aifiesta.ai',
      'priority': 'u=1, i',
      'referer': 'https://chat.aifiesta.ai/',
      'sec-ch-ua': '"Not;A=Brand";v="99", "Brave";v="139", "Chromium";v="139"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"Windows"',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-site',
      'sec-gpc': '1',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36'
    };

    // Add authorization header
    if (authToken) {
      headers['authorization'] = authToken.startsWith('Bearer ') ? authToken : `Bearer ${authToken}`;
    }

    // Add cookies if provided
    if (cookies) {
      headers['Cookie'] = cookies;
    }

    console.log('Making request to:', url);
    console.log('With headers:', { ...headers, authorization: '***' }); // Hide token in logs
    console.log('With data:', data);

    const response = await fetch(url, {
      method: method,
      headers: headers,
      body: JSON.stringify(data)
    });

    const responseData = await response.text();
    
    console.log('Response status:', response.status);
    console.log('Response data:', responseData);

    if (!response.ok) {
      return NextResponse.json(
        { message: `Request failed: ${response.status} - ${responseData}` },
        { status: response.status }
      );
    }

    // Try to parse as JSON, otherwise return as text
    try {
      const jsonData = JSON.parse(responseData);
      return NextResponse.json(jsonData);
    } catch {
      return NextResponse.json({ data: responseData });
    }

  } catch (error) {
    console.error('Proxy error:', error);
    return NextResponse.json(
      { message: `Proxy server error: ${error instanceof Error ? error.message : 'Unknown error'}` },
      { status: 500 }
    );
  }
}
