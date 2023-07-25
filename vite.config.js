import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const htmlPlugin = () => {
  return {
    name: 'html-transform',
    transformIndexHtml(html) {
      return html.replace(
        /<title>(.*?)<\/title>/,
        `<title>ToDo List</title>`
      )
    }
  }
}


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  htmlPlugin
})