import { ThemeProvider } from "@/components/theme-provider"

export default function DAppLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <div className="max-w-screen-md mx-auto">
            {/* Include shared UI here e.g. a header or sidebar */}
            {children}
        </div>
    )
}
