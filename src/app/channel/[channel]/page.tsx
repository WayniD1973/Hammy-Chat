//app/channel/[channel]/page.tsx
export default function Page({params}: { params: { channel: string } }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      page1
      {params.channel}
    </main>
  )
}