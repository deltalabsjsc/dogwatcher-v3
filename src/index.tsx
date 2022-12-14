import React, { ReactNode, useMemo } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BLOCKED_ADDRESSES } from './config/constants';
import useActiveWeb3React from './hooks/useActiveWeb3React';
import Providers from './Providers';
import ListsUpdater from './state/lists/updater';
import MulticallUpdater from './state/multicall/updater';
import TransactionUpdater from './state/transactions/updater';

function Updaters() {
  return (
    <>
      <ListsUpdater />
      <TransactionUpdater />
      <MulticallUpdater />
    </>
  )
}
function Blocklist({ children }: { children: ReactNode }) {
  const { account } = useActiveWeb3React()
  const blocked: boolean = useMemo(() => Boolean(account && BLOCKED_ADDRESSES.indexOf(account) !== -1), [account])
  if (blocked) {
    return <div>Blocked address</div>
  }
  return <>{children}</>
}

ReactDOM.render(
  <React.StrictMode>
    <Blocklist>
      <Providers>
        <Updaters />
        <App />
      </Providers>
    </Blocklist>
  </React.StrictMode>,
  document.getElementById('root'),
)
