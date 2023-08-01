//app/channel/[channel]/[channel2]page.tsx
export default function page({params}: { params: { channel: string, channel2: string } }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      page2
      {params.channel}
      {params.channel2}
    </main>
  )
}