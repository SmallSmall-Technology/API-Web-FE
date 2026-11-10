export default function Welcome({
  title = 'Welcome to the SmallSmall Enterprise Partner Portal.',
  description = 'Integrate our multi-tenant API to offer your users 25%–65% downpayment retail BNPL.',
}) {
  return (
    <div className="text-ink">
      <h2 className="max-w-[427px] text-[28px] font-semibold leading-normal sm:text-[34px]">
        {title}
      </h2>
      {description && (
        <p className="mt-[27px] max-w-[413px] text-[20px] leading-normal text-muted sm:text-[24px]">
          {description}
        </p>
      )}
    </div>
  )
}
