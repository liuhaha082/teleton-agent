export function TableHeader({
  columns,
}: {
  columns: Array<{ label: string; width?: string | number; align?: 'left' | 'center' | 'right' }>;
}) {
  return (
    <thead>
      <tr style={{ borderBottom: '1px solid var(--border)', color: 'var(--text-secondary)', fontSize: '11px', textTransform: 'uppercase' }}>
        {columns.map((col, i) => (
          <th
            key={i}
            style={{
              textAlign: col.align ?? 'left',
              padding: col.align === 'center' ? '8px 10px' : '8px 14px',
              width: col.width,
            }}
          >
            {col.label}
          </th>
        ))}
      </tr>
    </thead>
  );
}
