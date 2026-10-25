
type TabProps = {
  title: string,
  children: React.ReactNode
}

export function Tab({ title, children}: TabProps) {

  return (
    <>
    {children}
    </>
  )
}