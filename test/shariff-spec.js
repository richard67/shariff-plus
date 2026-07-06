import { strict as assert } from 'assert';
import Shariff from '../src/js/shariff.js';

describe('Shariff', () => {
  let div = null

  beforeEach(() => {
    div = document.createElement('div')
  })

  it('should construct a Shariff object', () => {
    assert.doesNotThrow(() => new Shariff(div))
  })

  describe('Defaults', () => {
    it('should use default services', () => {
      let s = new Shariff(div)
      assert.deepEqual(
        s.options.services,
        ['twitter', 'facebooklike', 'facebook', 'info']
      )
    })
  })

  describe('accessibility (WCAG 2.5.3 Label in Name)', () => {
    const services = ['facebook', 'twitter', 'print', 'mail']

    // Accessible name per the accname spec (simplified): an aria-label wins,
    // otherwise it is the text of descendants that are not aria-hidden.
    function accessibleName(a) {
      const label = a.getAttribute('aria-label')
      if (label) {
        return label.trim()
      }
      let name = ''
      a.querySelectorAll('*').forEach((el) => {
        if (el.getAttribute('aria-hidden') !== 'true') {
          name += el.textContent
        }
      })
      return name.trim()
    }

    it('standard style: the visible label is part of the accessible name', () => {
      new Shariff(div, { services, buttonStyle: 'standard' })
      div.querySelectorAll('li.shariff-button > a').forEach((a) => {
        const visible = a.querySelector('.share-text').textContent.trim()
        assert.ok(visible.length > 0, 'visible label should not be empty')
        assert.ok(
          accessibleName(a).toLowerCase().includes(visible.toLowerCase()),
          `accessible name should contain the visible label "${visible}"`
        )
      })
    })

    it('standard style: marks the decorative icon aria-hidden', () => {
      new Shariff(div, { services, buttonStyle: 'standard' })
      div.querySelectorAll('li.shariff-button > a > span:not(.share-text)').forEach((icon) => {
        assert.equal(icon.getAttribute('aria-hidden'), 'true')
      })
    })

    it('icon style: still provides an accessible name via aria-label', () => {
      new Shariff(div, { services, buttonStyle: 'icon' })
      div.querySelectorAll('li.shariff-button > a').forEach((a) => {
        assert.ok(accessibleName(a).length > 0)
      })
    })

    it('print button is labelled in a language that was previously empty (da)', () => {
      new Shariff(div, { services: ['print'], lang: 'da', buttonStyle: 'standard' })
      assert.ok(div.querySelector('li.print .share-text').textContent.trim().length > 0)
    })
  })
})
