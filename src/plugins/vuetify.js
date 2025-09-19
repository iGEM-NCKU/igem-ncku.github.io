// Centralized Vuetify with warm theme and icon set
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Load global theme CSS once per entry
import '../styles/theme.css'

const vuetify = createVuetify({
  components,
  directives,
  defaults: {
    global: { ripple: true },
    VCard: { rounded: 'lg', class: 'spacious' },
    VContainer: { class: 'section' },
    VBtn: { rounded: 'xl' },
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: { mdi },
  },
  theme: {
    defaultTheme: 'brand',
    themes: {
      brand: {
        dark: false,
        colors: {
          primary: '#0F5C4D',
          secondary: '#A8CF6E',
          background: '#FAF7EF',
          surface: '#FFFFFF',
          error: '#B00020',
          info: '#14705C',
          success: '#16A34A',
          warning: '#F59E0B',
        },
      },
    },
  },
})

export default vuetify
