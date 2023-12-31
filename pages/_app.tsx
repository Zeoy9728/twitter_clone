import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import  Layout  from "@/components/Layout"
import LoginModal from '@/components/modals/LoginModal'
// import Modal from '@/components/Modal';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <Modal actionLabel='Submit' isOpen title='Test Modal'/> */}
      <LoginModal/>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
