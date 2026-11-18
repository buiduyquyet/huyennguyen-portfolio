'use client'

import React from 'react'
import type { TextFieldClientComponent } from 'payload'
import { FieldDescription, FieldError, FieldLabel, useField } from '@payloadcms/ui'

const HEX = /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/

/** Ô chọn màu cho admin: bảng chọn màu + ô nhập mã hex + nút về màu mặc định. */
export const ColorField: TextFieldClientComponent = ({ field, path }) => {
  const { value, setValue, showError } = useField<string>({ path: path || field.name })
  const fallback = (field.admin?.placeholder as string) || '#000000'
  const current = value && HEX.test(value) ? value : fallback
  // <input type="color"> chỉ nhận dạng #rrggbb
  const pickerValue =
    current.length === 4 ? '#' + [...current.slice(1)].map((c) => c + c).join('') : current

  return (
    <div className="field-type text" style={{ marginBottom: 24 }}>
      <FieldLabel label={field.label} path={path} required={field.required} />
      <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
        <input
          type="color"
          value={pickerValue}
          onChange={(e) => setValue(e.target.value)}
          aria-label="Chọn màu"
          style={{
            width: 44,
            height: 40,
            padding: 0,
            border: '1px solid var(--theme-elevation-150)',
            borderRadius: 4,
            background: 'none',
            cursor: 'pointer',
          }}
        />
        <div style={{ flex: 1, position: 'relative' }}>
          <FieldError path={path} showError={showError} />
          <input
            type="text"
            value={value || ''}
            placeholder={fallback}
            onChange={(e) => setValue(e.target.value)}
            style={{ width: '100%' }}
          />
        </div>
        {value && (
          <button
            type="button"
            className="btn btn--style-secondary btn--size-small"
            style={{ margin: 0 }}
            onClick={() => setValue('')}
          >
            Mặc định
          </button>
        )}
      </div>
      <FieldDescription description={field.admin?.description} path={path} />
    </div>
  )
}
