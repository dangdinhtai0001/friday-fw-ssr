export interface IDividerProps {
  color?: string;
  height?: number;
  type?: 'solid' | 'dashed' | 'dotted';
  text?: string;
}

export interface IDividerContainerProps {
  height: number;
}

export interface IDividerLineProps {
  color: string;
  type: string;
}

export interface IDividerTextProps {
  color?: string;
}