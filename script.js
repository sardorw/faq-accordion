const accordionHeaders = document.querySelectorAll('[data-accordion-header]')
const minusIconUrl = './images/icon-minus.svg'
const plusIconUrl = './images/icon-plus.svg'

accordionHeaders.forEach((headerEl) => {
  headerEl.addEventListener('click', () => {
    const headerElIsOpen = headerEl.getAttribute('aria-expanded') === 'true'
    const headerElConstrolsId = headerEl.getAttribute('aria-controls')
    const contentEl = document.getElementById(headerElConstrolsId)

    if (headerElIsOpen) {
      headerEl.setAttribute('aria-expanded', false)
      contentEl.setAttribute('hidden', '')
      const iconEl = headerEl.getElementsByTagName('img')[0]
      iconEl.src = plusIconUrl
      iconEl.setAttribute('alt', 'Plus icon')
    } else {
      accordionHeaders.forEach((el) => {
        el.setAttribute('aria-expanded', false)
        const elConstrolsId = el.getAttribute('aria-controls')
        const elContent = document.getElementById(elConstrolsId)
        elContent.setAttribute('hidden', '')
        const iconEl = el.getElementsByTagName('img')[0]
        iconEl.src = plusIconUrl
        iconEl.setAttribute('alt', 'Plus icon')
      })
      headerEl.setAttribute('aria-expanded', true)
      contentEl.removeAttribute('hidden')
      const iconEl = headerEl.getElementsByTagName('img')[0]
      iconEl.src = minusIconUrl
      iconEl.setAttribute('alt', 'Minus icon')
    }
  })
})
