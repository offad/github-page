
import Layout from '@/components/Layout'

export const metadata = {
  title: 'Guestbook',
  description: 'Generated by create next app',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function Guestbook() {
    return (
      <main>
        <Layout className='pt-0 grid gap-4'>
          <section className=' grid gap-4'>
            <h1 className='mt-12 text-4xl font-medium font-title'>Guestbook</h1>
          </section>
        </Layout>
      </main>
    )
}