import {prefetchWorkflows} from "@/features/workflows/server/prefetch";
import {HydrateClient} from "@/trpc/server";
import { requireAuth } from "@/lib/auth-utils";
import {ErrorBoundary} from "react-error-boundary";
import {Suspense} from "react";
import {WorkflowsList,WorkflowsContainer} from "@/features/workflows/components/workflows";
const Page = async () => {
  await requireAuth();
  prefetchWorkflows();
  return (
    <WorkflowsContainer>
    <HydrateClient>
      <ErrorBoundary fallback={<p>Error!</p>}>
      <Suspense fallback={<p>Loading...</p>}>
      <WorkflowsList/>
      </Suspense>
      </ErrorBoundary>


    </HydrateClient>
    </WorkflowsContainer>
  )

  return <p>Workflows</p>;
};

export default Page;
