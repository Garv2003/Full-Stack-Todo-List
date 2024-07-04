import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  console.log("Hello from middleware!");
  // Add a header to the response
  return NextResponse.next({
    headers: {
      "x-custom-middleware": "hello",
    },
  });
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/",
};
