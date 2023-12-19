import { Inter, Roboto_Mono } from 'next/font/google'
import localFont from 'next/font/local'

export const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
})

export const roboto_mono = Roboto_Mono({
    subsets: ['latin'],
    display: 'swap',
})

// Custom fonts
// you can add any font here
export const myan_sans = localFont({
    src: [
        {
            path: './assets/fonts/Z11-MyanSans/Z11-MyanSans-Bold.ttf',
            weight: '700',
            style: 'normal',
        },
    ],
})

export const mona_sans = localFont({
    src: [
        {
            path: './assets/fonts/MonaSans/WOFF 2/MonaSans-Regular.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: './assets/fonts/MonaSans/WOFF 2/MonaSans-Italic.woff2',
            weight: '400',
            style: 'italic',
        },
        {
            path: './assets/fonts/MonaSans/WOFF 2/MonaSans-Bold.woff2',
            weight: '700',
            style: 'normal',
        },
        {
            path: './assets/fonts/MonaSans/WOFF 2/MonaSans-BoldItalic.woff2',
            weight: '700',
            style: 'italic',
        },
    ],
})