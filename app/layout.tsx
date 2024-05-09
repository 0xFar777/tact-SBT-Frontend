import "./css/style.css"
import { Providers } from "./providers"

export const metadata = {
 title: "X Domain",
 description: "X Domain",
}

export default function RootLayout({ children }) {
 return (
  <html lang="en">
   <body className={`font-inter bg-black tracking-tight text-gray-900 antialiased`}>
    <Providers>
     <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
      {children}
     </div>
    </Providers>
   </body>
  </html>
 )
}
