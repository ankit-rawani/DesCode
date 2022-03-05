var theme = 'light'

if (window.matchMedia) {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches)
        theme = 'dark'
}

export { theme }
