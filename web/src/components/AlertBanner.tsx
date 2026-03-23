import type { ReactNode } from 'react';

export function AlertBanner({
  message,
  type = 'error',
  onDismiss,
  children,
  style,
}: {
  message: ReactNode;
  type?: 'error' | 'warning' | 'info' | 'success';
  onDismiss?: () => void;
  children?: ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`alert ${type}`}
      style={{
        marginBottom: '14px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        ...style,
      }}
    >
      <span>{message}</span>
      {(onDismiss || children) && (
        <div style={{ display: 'flex', gap: '6px' }}>
          {children}
          {onDismiss && (
            <button className="btn-ghost btn-sm" onClick={onDismiss}>Dismiss</button>
          )}
        </div>
      )}
    </div>
  );
}
