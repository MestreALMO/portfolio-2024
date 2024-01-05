import { Layout } from "@/components/layout";
import "@/styles/globals.css";
import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";
import { useRouter } from "next/router";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <ThemeProvider>
      <style jsx global>{`
        html {
          font-family: ${roboto.style.fontFamily};
        }
      `}</style>

      <NextIntlClientProvider
        locale={router.locale}
        timeZone="Brazil/Brasilia"
        messages={pageProps.messages}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </NextIntlClientProvider>
    </ThemeProvider>
  );
}
