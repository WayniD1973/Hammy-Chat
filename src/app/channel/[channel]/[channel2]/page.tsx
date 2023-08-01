export default function page({params}: { params: { channel: number, channel2: number } }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      page2
      {params.channel}
      {params.channel2}
    </main>
  )
}