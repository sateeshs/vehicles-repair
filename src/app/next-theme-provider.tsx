'use client'
import { ThemeProvider } from 'next-themes'
const NextThemeProvider = ({ children }: { children: React.ReactNode }) => {
    //forcedTheme='{Component.theme || undefined}' 
return <ThemeProvider enableSystem={true} attribute="class">{children}</ThemeProvider>
}
export default NextThemeProvider