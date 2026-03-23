import { Fragment, type ReactNode } from 'react';

export function DetailGrid({
  items,
  labelWidth = '120px',
  gap = '6px 12px',
  fontSize = '13px',
}: {
  items: Array<{ label: string; value: ReactNode }>;
  labelWidth?: string;
  gap?: string;
  fontSize?: string;
}) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: `${labelWidth} 1fr`, gap, fontSize, padding: '10px 0' }}>
      {items.map((item, i) => (
        <Fragment key={i}>
          <span style={{ color: 'var(--text-secondary)' }}>{item.label}</span>
          <span>{item.value}</span>
        </Fragment>
      ))}
    </div>
  );
}
