import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <>
      <svg width="49" height="45" viewBox="0 0 49 45" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M40 0H8.57143L0 16H8.20277L12.6267 7.43946H36.1291L40 0Z" fill="#3959FF"/>
<path d="M49 16.1422L40.3615 1L36.2301 8.08578L40.9249 16.1422L29 36.8171L33.0374 44L49 16.1422Z" fill="#3959FF"/>
<path d="M15.7626 45L0 16H8.20392L19.8185 37.4965H28.9442L33 45H15.7626Z" fill="#3959FF"/>
<path d="M35.8342 8L40 15.5961L38.6416 18C38.6416 18 38.2793 16.9423 37.736 16.2691C37.1927 15.5961 35.8342 15.1153 35.8342 15.1153H18.0842C17.088 13.2884 16.7308 12.9038 16.0919 11.1731C15.4529 9.4423 18.3558 8.1923 18.3558 8.1923L35.8342 8Z" fill="#3959FF"/>
<path d="M28.64 36H20.2382L19 33.5293C19 33.5293 20.0556 33.6961 20.8572 33.5293C21.6589 33.3626 22.6261 32.541 22.6261 32.541L31.4702 16.0369C33.4119 16.0364 33.9965 15.8916 35.6869 16.1791C37.3772 16.4665 36.9525 19.8519 36.9525 19.8519L28.64 36Z" fill="#3959FF"/>
<path d="M9 16.3994L13.2914 9H16.2455C16.2455 9 15.4984 9.60195 15.23 10.4444C14.9616 11.2869 14.9531 12.3704 14.9531 12.3704L24 28.7407C23.0199 30.5912 22.7347 30.982 21.6462 32.4574C20.5576 33.9327 18.0043 31.9322 18.0043 31.9322L9 16.3994Z" fill="#3959FF"/>
</svg>
      <span style={{ marginLeft: '.4em', fontWeight: 800 }}>
        CybriaChain Docs
      </span>
    </>
  ),
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Docs'
    }
  },
  project: {
    link: 'https://github.com/Cybria-Chain/cybria-documentation',
  },
  docsRepositoryBase: 'https://github.com/Cybria-Chain/cybria-documentation',
  footer: {
    text: 'Cybria Technical Documentation',
  },
  editLink: {
    text: '✏️ Edit this page on GitHub'
  },
  banner: {
    key: '2.1-release',
    text: (
      <a href="https://bridge.cybria.io" target="_self">
        📌 UPDATE: Cybria Mainnet Already Live. Please Check the last update for more info. → 📌
      </a>
    )
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="CybriaChain" />
      <meta property="og:description" content="CybriaChain is a Layer 2 blockchain platform built on top of the Ethereum network." />
    </>
  )
}

export default config