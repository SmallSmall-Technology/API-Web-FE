import { useState } from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import Button from '@/components/ui/Button.jsx'
import PageHeader from '@/components/ui/PageHeader.jsx'
import { ApiKeysCard, CreateKeyModal, createApiKey, getApiKeys } from '@/features/credentials'
import plusIcon from '@/assets/icons/plus.svg'

export default function ApiCredentials() {
  const queryClient = useQueryClient()
  const [createOpen, setCreateOpen] = useState(false)

  const { data, isPending, isError, error } = useQuery({
    queryKey: ['api-keys'],
    queryFn: getApiKeys,
  })

  const createKey = useMutation({
    mutationFn: createApiKey,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['api-keys'] })
      setCreateOpen(false)
    },
  })

  function closeCreate() {
    setCreateOpen(false)
    createKey.reset()
  }

  return (
    <>
      <PageHeader
        title="API Credentials"
        subtitle="Create, scope, rotate, and revoke the keys your platform uses to authenticate with the BNPL API."
        action={
          <Button size="compact" onClick={() => setCreateOpen(true)}>
            <img src={plusIcon} alt="" width="10" height="10" />
            Create key
          </Button>
        }
      />

      <div className="mt-[35px]">
        {isPending && <p className="text-[14px] text-muted">Loading…</p>}

        {isError && (
          <p role="alert" className="text-[14px] text-red-600">
            {error.message || 'Could not load your API keys.'}
          </p>
        )}

        {/* TODO: pass onDelete once the revoke-key endpoint exists. */}
        {data && <ApiKeysCard apiKeys={data} />}
      </div>

      <CreateKeyModal
        open={createOpen}
        onClose={closeCreate}
        onSubmit={(environment) => createKey.mutate({ environment })}
        isSubmitting={createKey.isPending}
        error={createKey.error}
      />
    </>
  )
}
