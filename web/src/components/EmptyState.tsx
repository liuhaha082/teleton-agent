import type { ReactNode } from 'react';

export function EmptyState({
  message,
  action,
}: {
  message: ReactNode;
  action?: { label: string; onClick: () => void };
}) {
  return (
    <div style={{ padding: '20px', textAlign: 'center', color: 'var(--text-secondary)', fontSize: '13px' }}>
      <div>{message}</div>
      {action && (
        <button className="btn-sm" style={{ marginTop: '12px' }} onClick={action.onClick}>
          {action.label}
        </button>
      )}
    </div>
  );
}
