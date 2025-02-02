// import { NextResponse } from "next/server"
// import connect from "@/utils/db";
// import Post from "@/models/Post";


// export const GET = async(request, {params}) =>{

//     const {id} = params;

//     try {
//         await connect();
//         const post = await Post.findById(id)
//         return new NextResponse(JSON.stringify(post), {status: 200});

//     } catch (error) {
//         console.error("Database error:", error);
//         return new NextResponse("Error connecting to db", {status: 500})
//     }

// }

import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Post from "@/models/Post";

export const GET = async (request, context) => {
  // Await params object
  const { id } = await context.params;

  try {
    await connect();
    const post = await Post.findById(id);
    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (error) {
    console.error("Database error:", error);
    return new NextResponse("Error connecting to db", { status: 500 });
  }
};
