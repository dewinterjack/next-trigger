import type { repoTask } from "@/trigger/repo";
import { tasks } from "@trigger.dev/sdk/v3";
import { NextResponse } from "next/server";

export async function GET() {
  const handle = await tasks.trigger<typeof repoTask>(
    "repo",
    {
      owner: "triggerdotdev",
      repo: "trigger.dev",
    }
  );

  return NextResponse.json(handle);
}
