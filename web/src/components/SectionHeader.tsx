import type { ReactNode } from 'react';

export function SectionHeader({
  title,
  count,
  children,
}: {
  title: string;
  count?: number | string;
  children?: ReactNode;
}) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <h2 style={{ margin: 0, fontSize: '16px' }}>{title}</h2>
        {count != null && (
          <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{count}</span>
        )}
      </div>
      {children}
    </div>
  );
}
