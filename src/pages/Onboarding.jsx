import { useQuery } from '@tanstack/react-query'
import PageHeader from '@/components/ui/PageHeader.jsx'
import { EnvironmentsCard, IntegrationProgressCard, getOnboarding } from '@/features/onboarding'

export default function Onboarding() {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ['onboarding'],
    queryFn: getOnboarding,
  })

  return (
    <>
      <PageHeader title="Onboarding & Quickstart" subtitle="Steps unlock as you complete them" />

      <div className="mt-[35px]">
        {isPending && <p className="text-[14px] text-muted">Loading…</p>}

        {isError && (
          <p role="alert" className="text-[14px] text-red-600">
            {error.message || 'Could not load your onboarding progress.'}
          </p>
        )}

        {data && (
          <div className="grid gap-[25px] lg:grid-cols-[717fr_346fr]">
            <IntegrationProgressCard steps={data.steps} totalSteps={data.totalSteps} />
            <EnvironmentsCard environments={data.environments} />
          </div>
        )}
      </div>
    </>
  )
}
