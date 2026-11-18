import React, { Fragment } from 'react'

/**
 * Cú pháp định dạng nhẹ cho nội dung trong CMS:
 *   xuống dòng   → <br>
 *   **chữ**      → <b>
 *   [[chữ]]      → <span class="lime">
 *   {{chữ}}      → <span class="ph"> (ghi chú nghiêng, mờ)
 */
const TOKEN = /(\*\*[\s\S]+?\*\*|\[\[[\s\S]+?\]\]|\{\{[\s\S]+?\}\})/g

function renderLine(line: string, keyPrefix: string): React.ReactNode[] {
  return line
    .split(TOKEN)
    .filter(Boolean)
    .map((part, i) => {
      const key = `${keyPrefix}-${i}`
      if (part.startsWith('**') && part.endsWith('**')) return <b key={key}>{part.slice(2, -2)}</b>
      if (part.startsWith('[[') && part.endsWith(']]'))
        return (
          <span key={key} className="lime">
            {part.slice(2, -2)}
          </span>
        )
      if (part.startsWith('{{') && part.endsWith('}}'))
        return (
          <span key={key} className="ph">
            {part.slice(2, -2)}
          </span>
        )
      return <Fragment key={key}>{part}</Fragment>
    })
}

export function Markup({ text }: { text?: string | null }) {
  if (!text) return null
  const lines = text.replace(/\r\n/g, '\n').split('\n')
  return (
    <>
      {lines.map((line, i) => (
        <Fragment key={i}>
          {i > 0 && <br />}
          {renderLine(line, String(i))}
        </Fragment>
      ))}
    </>
  )
}
