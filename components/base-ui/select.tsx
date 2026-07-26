import {
  createContext,
  useContext,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import { cn } from '@/lib/cn';

interface SelectContextValue {
  value: string;
  onValueChange: (value: string) => void;
  open: boolean;
  setOpen: (open: boolean) => void;
  triggerRef: React.RefObject<HTMLButtonElement>;
}

const SelectContext = createContext<SelectContextValue | null>(null);

function useSelectContext() {
  const ctx = useContext(SelectContext);
  if (!ctx) {
    throw new Error('Select components must be used within <Select>');
  }
  return ctx;
}

export interface SelectProps {
  value?: string;
  onValueChange?: (value: string) => void;
  children: ReactNode;
}

export function Select({ value = '', onValueChange, children }: SelectProps) {
  const [internalValue, setInternalValue] = useState('');
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const current = value !== undefined ? value : internalValue;

  const handleValueChange = (next: string) => {
    if (value === undefined) setInternalValue(next);
    onValueChange?.(next);
    setOpen(false);
  };

  return (
    <SelectContext.Provider
      value={{
        value: current,
        onValueChange: handleValueChange,
        open,
        setOpen,
        triggerRef,
      }}
    >
      <div className="relative">{children}</div>
    </SelectContext.Provider>
  );
}

export interface SelectTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  id?: string;
}

export function SelectTrigger({
  className,
  children,
  id,
  ...props
}: SelectTriggerProps) {
  const { open, setOpen, triggerRef } = useSelectContext();
  return (
    <button
      ref={triggerRef}
      id={id}
      type="button"
      aria-haspopup="listbox"
      aria-expanded={open}
      onClick={() => setOpen(!open)}
      className={cn(
        'flex h-11 w-full items-center justify-between rounded-md px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    >
      {children}
      <svg
        className={cn(
          'ml-2 h-4 w-4 shrink-0 opacity-60 transition-transform',
          open && 'rotate-180',
        )}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    </button>
  );
}

export function SelectValue({ placeholder }: { placeholder?: string }) {
  const { value } = useSelectContext();
  return <span className={cn(!value && 'opacity-60')}>{value || placeholder}</span>;
}

export interface SelectContentProps {
  className?: string;
  children: ReactNode;
}

export function SelectContent({ className, children }: SelectContentProps) {
  const { open } = useSelectContext();
  if (!open) return null;
  return (
    <ul
      role="listbox"
      className={cn(
        'absolute z-50 mt-1 max-h-72 w-full overflow-auto rounded-md border border-white/10 p-1 shadow-lg',
        className,
      )}
    >
      {children}
    </ul>
  );
}

export interface SelectItemProps {
  value: string;
  children: ReactNode;
  className?: string;
}

export function SelectItem({ value, children, className }: SelectItemProps) {
  const { value: selected, onValueChange } = useSelectContext();
  const isSelected = selected === value;
  return (
    <li role="option" aria-selected={isSelected}>
      <button
        type="button"
        onClick={() => onValueChange(value)}
        className={cn(
          'flex w-full cursor-pointer items-center rounded-sm px-2 py-1.5 text-left text-sm outline-none hover:bg-white/10',
          isSelected && 'bg-white/10 font-medium',
          className,
        )}
      >
        {children}
      </button>
    </li>
  );
}
