// 1. import `NextUIProvider` component
import { createTheme, NextUIProvider } from "@nextui-org/react"
import { ThemeProvider as NextThemesProvider } from 'next-themes';

// 2. Call `createTheme` and pass your custom values
const lightTheme = createTheme({
  type: 'light',
  /* theme: {
     colors: { ...}, // optional
   }*/
})

const darkTheme = createTheme({
  type: 'dark',
  /* theme: {
     colors: { ...}, // optional
   }*/
})

function MyApp({ Component, pageProps }) {
  return (
    // 2. Use at the root of your app
    <NextThemesProvider
      defaultTheme="system"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className
      }}
    >
      <NextUIProvider>

        <Component {...pageProps} />
      </NextUIProvider>

    </NextThemesProvider>
  );
}

export default MyApp;
