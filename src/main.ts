import { ViteSSG } from 'vite-ssg/single-page'
import App from './App.vue'
import './styles/main.css'

/* Statisch vorgerendert (SEO): vite-ssg erzeugt beim Build fertiges HTML, im Browser wird hydratisiert */
export const createApp = ViteSSG(App)
