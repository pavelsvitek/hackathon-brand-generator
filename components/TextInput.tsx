import useAutoFocus from '@/utils/hooks'

export default function TextInput({
  autoFocus,
  value,
  onChange
}: {
  autoFocus?: boolean
  value?: string
  onChange?: (value: string) => void
}) {
  const refInput = useAutoFocus<HTMLInputElement>()

  return (
    <input
      // autoFocus={autoFocus}
      ref={autoFocus ? refInput : undefined}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) onChange(event.target.value)
      }}
      value={value}
      className='bg-slate-50 rounded-lg border-solid border-2 text-xl	px-5 py-3 mt-2 w-full'
    />
  )
}

TextInput.defaultProps = {
  autoFocus: false
}
