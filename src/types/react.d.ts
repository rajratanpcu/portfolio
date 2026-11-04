declare module 'react' {
  export type ReactText = string | number;
  export type ReactChild = any;
  export type ReactNode = any;
  export type ReactElement<P = any, T = any> = any;

  export type JSXElementConstructor<P> =
    | ((props: P) => any)
    | (new (props: P) => Component<any, any>);

  export class Component<P = {}, S = {}> {}

  export type ComponentType<P = {}> = ((props: P) => any) | (new (props: P) => Component<any, any>);

  export interface FC<P = {}> {
    (props: P & { key?: any }): any;
  }

  export function useState<T>(initialState: T | (() => T)): [T, (newState: T | ((prevState: T) => T)) => void];
  export function useEffect(effect: () => void | (() => void), deps?: readonly any[]): void;
  export function useMemo<T>(factory: () => T, deps: readonly any[] | undefined): T;
  export function useRef<T>(initialValue?: T): { current: T };

  export interface SVGProps<T = any> {
    [key: string]: any;
  }

  export interface ButtonHTMLAttributes<T = any> {
    [key: string]: any;
  }

  export interface FormEvent<T = any> {
    preventDefault: () => void;
  }

  export interface MouseEvent<T = any> {
    preventDefault: () => void;
    clientX: number;
    clientY: number;
  }

  export const StrictMode: FC<{ children?: any }>;
}

declare module 'react-dom/client' {
  export function createRoot(container: any): {
    render(children: any): void;
    unmount(): void;
  };
}

declare module 'react/jsx-runtime' {
  export const jsx: any;
  export const jsxs: any;
  export const Fragment: any;
}

declare module '*.css' {
  const content: any;
  export default content;
}

declare module '*.svg' {
  const content: string;
  export default content;
}

declare namespace JSX {
  type Element = any;
  interface ElementClass extends React.Component<any> {}
  interface ElementAttributesProperty { props: {}; }
  interface ElementChildrenAttribute { children: {}; }
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}
