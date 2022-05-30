# `react-native-nx-monorepo`

- [Getting started with Nx](./docs/nx.md)
- [Design](./docs/design.md)
- [FAQ](./docs/faq.md)

## Tooling

- Monorepo generated using [Nx](https://nx.dev/getting-started/intro)
- UI design with [NativeBase](https://docs.nativebase.io/)
- Design system with [Storybook](https://nx.dev/storybook/overview-react#storybook)

## Getting Started

```console
yarn
yarn ios:start
yarn android:start
yarn web:start
```

```console
yarn mobile:storybook
yarn web:storybook
```

## Apps

- [`/mobile`](./apps/mobile) with [https://nx.dev/packages/react-native](https://nx.dev/packages/react-native)
- [`/web`](./apps/web/) with [https://nx.dev/packages/react](https://nx.dev/packages/react)
